import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { UserImage } from '../App';
import type { ColorOption } from '../types';
import { editImageWithShirt } from '../services/geminiService';
import LoadingDialog from './LoadingDialog';
import {
    ArrowLeftIcon, ShareIcon, HeartIcon
} from './icons';

interface ProductPageProps {
  userImage: UserImage;
  onBack: () => void;
}

// Updated color options with actual color values for swatches
const colorOptions: ColorOption[] = [
  { name: 'Black', image: './black-shirt.png' },
  { name: 'Cream', image: './cream-shirt.png' },
  { name: 'Maroon', image: './maroon-shirt.png' },
  { name: 'Navy Blue', image: './navy-blue-shirt.png' },
  { name: 'Rainbow', image: './rainbow-shirt.png' },
];

// Color swatch mapping - only for available colors
const colorSwatches = {
  'Black': '#000000',
  'Cream': '#f5f5dc',
  'Maroon': '#800000',
  'Navy Blue': '#1e3a8a',
  'Rainbow': 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
};

// Size options
const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'];

const ProductPage: React.FC<ProductPageProps> = ({ userImage, onBack }) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize the generation function to prevent unnecessary re-renders
  const generateImage = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const resultBase64 = await editImageWithShirt(
        userImage.base64,
        userImage.mimeType,
        selectedColor.name,
        selectedColor.image
      );
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
  }, [userImage.base64, userImage.mimeType, selectedColor.name, selectedColor.image]);

  useEffect(() => {
    generateImage();
  }, [generateImage]);

  // Memoize color options to prevent unnecessary re-renders
  const availableColors = useMemo(() => colorOptions, []);

  // Retry function for failed generations
  const retryGeneration = useCallback(() => {
    generateImage();
  }, [generateImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Dialog */}
      <LoadingDialog
        isOpen={isLoading}
        message="Nano banana is working hard to make things done..."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to upload
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Images */}
          <div className="space-y-6">
            {/* Main image */}
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              {error && !isLoading && (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-600 text-2xl">⚠️</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Something went wrong</h3>
                    <p className="text-gray-600 text-sm mb-4">{error}</p>
                    <button
                      onClick={retryGeneration}
                      className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}
              {generatedImage && !isLoading && !error && (
                <img
                  src={generatedImage}
                  alt={`Virtual try-on with ${selectedColor.name} shirt`}
                  className="w-full h-full object-cover"
                />
              )}
              {!generatedImage && !error && (
                <img
                  src={userImage.base64}
                  alt="Your photo"
                  className="w-full h-full object-cover opacity-50"
                />
              )}
            </div>

            {/* Thumbnail images */}
            <div className="grid grid-cols-4 gap-4">
              {colorOptions.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedColor.name === color.name ? 'border-gray-900' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Product details */}
          <div className="space-y-8">
            {/* Product title */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Tanah Airku Series: Malaysia Day '63 Heritage Tee | Premium Cotton Oversized Graphic T-Shirt 210gsm
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">(999+)</span>
                </div>
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <HeartIcon className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors">
                  <ShareIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Color selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Colour: {selectedColor.name}
              </h3>
              <div className="flex gap-3">
                {Object.entries(colorSwatches).map(([colorName, colorValue]) => (
                  <button
                    key={colorName}
                    onClick={() => {
                      const colorOption = availableColors.find(c => c.name === colorName) || availableColors[0];
                      setSelectedColor(colorOption);
                    }}
                    className={`color-swatch ${selectedColor.name === colorName ? 'selected' : ''}`}
                    style={
                      colorName === 'Rainbow'
                        ? { background: colorValue }
                        : { backgroundColor: colorValue }
                    }
                    title={colorName}
                  />
                ))}
              </div>
            </div>

            {/* Size selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-gray-900">
                  Size: {selectedSize}
                </h3>
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                  Check my size
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">Recommended size: UNISEX XS</p>
            </div>

            {/* Price */}
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">RM 59.90</div>
              <p className="text-sm text-gray-600">Made from recycled materials.</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-900">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900"
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="add-to-cart">
                ADD TO CART
              </button>

            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;