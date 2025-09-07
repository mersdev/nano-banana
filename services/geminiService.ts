import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY || process.env.API_KEY;

if (!API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Cache for base64 images to avoid repeated conversions
const imageCache = new Map<string, string>();

// Helper function to convert image URL to base64 with caching
const imageUrlToBase64 = async (imageUrl: string): Promise<string> => {
    // Check cache first
    if (imageCache.has(imageUrl)) {
        return imageCache.get(imageUrl)!;
    }

    try {
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const blob = await response.blob();
        const base64Data = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                // Remove the data URL prefix to get just the base64 string
                const base64Data = base64.split(',')[1];
                resolve(base64Data);
            };
            reader.onerror = () => reject(new Error('Failed to read image file'));
            reader.readAsDataURL(blob);
        });

        // Cache the result
        imageCache.set(imageUrl, base64Data);
        return base64Data;
    } catch (error) {
        console.error('Error converting image to base64:', error);
        throw new Error(`Failed to load shirt template image: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
};

export const editImageWithShirt = async (
    userImageBase64: string,
    userMimeType: string,
    shirtColor: string,
    shirtImageUrl: string
): Promise<string | null> => {
    try {
        // Convert shirt image to base64
        const shirtImageBase64 = await imageUrlToBase64(shirtImageUrl);

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image-preview',
            contents: [{
                parts: [
                    {
                        inlineData: {
                            data: userImageBase64,
                            mimeType: userMimeType,
                        },
                    },
                    {
                        inlineData: {
                            data: shirtImageBase64,
                            mimeType: 'image/png',
                        },
                    },
                    {
                        text: `Using the two provided images: Edit the first image (the person's portrait) to show them wearing the t-shirt from the second image. The t-shirt should be colored ${shirtColor} and fit the person's body naturally, replacing any existing clothing on their upper body. Keep the person's face, hair, skin tone, pose, and background exactly the same. Make it look natural and realistic, as if they were originally wearing this ${shirtColor} t-shirt. Return only the edited image.`,
                    }
                ],
            }],
            config: {
                responseModalities: [Modality.IMAGE, Modality.TEXT],
            },
        });

        // Check for image response
        for (const part of response.candidates?.[0]?.content?.parts || []) {
            if (part.inlineData && part.inlineData.data) {
                return part.inlineData.data;
            }
        }

        // Check for text response (error case)
        const textResponse = response.text;
        if (textResponse) {
            console.warn('Gemini API returned text instead of image:', textResponse);
            throw new Error(`AI model could not generate the image. Please try with a different photo or color.`);
        }

        throw new Error('No image data received from AI model. Please try again.');

    } catch (error: any) {
        console.error("Error calling Gemini API:", error);

        // Provide more specific error messages
        if (error.message?.includes('quota')) {
            throw new Error('API quota exceeded. Please try again later.');
        } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
            throw new Error('Network error. Please check your connection and try again.');
        } else if (error.message?.includes('API key')) {
            throw new Error('API configuration error. Please contact support.');
        } else {
            throw new Error(error.message || 'Failed to generate image. Please try again.');
        }
    }
};
