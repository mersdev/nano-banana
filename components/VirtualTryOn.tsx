
import React, { useState, useCallback } from 'react';
import type { View } from '../App';
import { editImageWithShirt } from '../services/geminiService';
import { ArrowLeftIcon, UploadIcon, SparklesIcon } from './icons';

interface VirtualTryOnProps {
  onNavigate: (view: View) => void;
}

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve(reader.result.split(',')[1]);
            } else {
                reject(new Error('Failed to read file as base64'));
            }
        };
        reader.onerror = error => reject(error);
    });
};

const VirtualTryOn: React.FC<VirtualTryOnProps> = ({ onNavigate }) => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userImageType, setUserImageType] = useState<string>('image/jpeg');

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setGeneratedImage(null);
        setError(null);
        const base64 = await fileToBase64(file);
        setUserImageType(file.type);
        setUserImage(`data:${file.type};base64,${base64}`);
      } catch (err) {
        setError('Failed to load image. Please try another file.');
        setUserImage(null);
      }
    }
  };

  const handleGenerate = useCallback(async () => {
    if (!userImage) {
      setError("Please upload an image first.");
      return;
    }
    
    setIsLoading(true);
    setGeneratedImage(null);
    setError(null);

    try {
      const userImageBase64 = userImage.split(',')[1];
      // FIX: Added 'White' as the third argument for shirtColor to match the function signature.
      const resultBase64 = await editImageWithShirt(userImageBase64, userImageType, 'White');
      if (resultBase64) {
        setGeneratedImage(`data:image/png;base64,${resultBase64}`);
      } else {
        throw new Error("The AI model did not return an image. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [userImage, userImageType]);

  return (
    <div className="p-4">
      <header className="flex items-center mb-4">
        <button onClick={() => onNavigate('product')} className="p-2 -ml-2 mr-2 rounded-full hover:bg-gray-100">
          <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-xl font-bold">Virtual Try-On</h1>
      </header>

      <div className="space-y-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg border border-dashed">
            <h2 className="font-semibold text-lg text-gray-700">The Shirt</h2>
            <p className="text-sm text-gray-500 mb-2">The AI will place this shirt on your photo.</p>
            <img 
              src="https://i.ibb.co/L5BZyqs/maxx-tshirt.png"
              alt="White T-Shirt"
              className="w-32 h-32 object-contain mx-auto bg-white p-2 rounded-lg shadow-sm" 
            />
        </div>

        <div className="text-center">
            <label htmlFor="image-upload" className="cursor-pointer inline-block w-full p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 transition-colors">
                {userImage ? (
                    <img src={userImage} alt="User portrait" className="max-h-48 mx-auto rounded-lg shadow-md" />
                ) : (
                    <div className="flex flex-col items-center text-gray-500">
                        <UploadIcon className="w-12 h-12 mb-2" />
                        <span className="font-semibold">Click to upload your portrait</span>
                        <span className="text-sm">PNG, JPG, or WEBP</span>
                    </div>
                )}
            </label>
            <input id="image-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
        </div>
        
        {userImage && (
            <button 
                onClick={handleGenerate} 
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-300 transition-colors"
            >
                {isLoading ? (
                    <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Generating...
                    </>
                ) : (
                    <>
                        <SparklesIcon className="w-6 h-6" />
                        Generate My Try-On
                    </>
                )}
            </button>
        )}

        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg" role="alert">{error}</div>}

        {isLoading && (
            <div className="text-center p-4 bg-gray-50 rounded-lg border">
                <p className="text-lg font-semibold animate-pulse">AI is working its magic...</p>
                <p className="text-sm text-gray-600 mt-2">This may take a moment. Please be patient.</p>
            </div>
        )}

        {generatedImage && (
            <div className="mt-6 text-center border-t pt-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Virtual Try-On!</h2>
                <img src={generatedImage} alt="Generated try-on" className="w-full rounded-lg shadow-xl mx-auto border" />
            </div>
        )}
      </div>
    </div>
  );
};

export default VirtualTryOn;
