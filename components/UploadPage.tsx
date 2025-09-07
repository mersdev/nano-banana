
import React, { useState } from 'react';
import { UploadIcon } from './icons';

interface UploadPageProps {
  onImageUpload: (base64: string, mimeType: string) => void;
}

const fileToBase64 = (file: File): Promise<{base64: string, mimeType: string}> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (typeof reader.result === 'string') {
                resolve({
                    base64: reader.result.split(',')[1],
                    mimeType: file.type
                });
            } else {
                reject(new Error('Failed to read file as base64'));
            }
        };
        reader.onerror = error => reject(error);
    });
};

const UploadPage: React.FC<UploadPageProps> = ({ onImageUpload }) => {
  const [error, setError] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        setError(null);
        const { base64, mimeType } = await fileToBase64(file);
        onImageUpload(base64, mimeType);
      } catch (err) {
        setError('Failed to load image. Please try another file.');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        try {
          setError(null);
          const { base64, mimeType } = await fileToBase64(file);
          onImageUpload(base64, mimeType);
        } catch (err) {
          setError('Failed to load image. Please try another file.');
        }
      } else {
        setError('Please upload a valid image file.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Virtual Try-On
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Upload your photo to see how our AIRism Cotton T-Shirt looks on you
            </p>
          </div>

          {/* Upload Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
            <label
              htmlFor="image-upload"
              className={`
                upload-area cursor-pointer block w-full p-12 border-2 border-dashed rounded-lg transition-all duration-300
                ${isDragOver
                  ? 'border-gray-400 bg-gray-50 scale-[1.01]'
                  : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }
                group
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                  ${isDragOver
                    ? 'bg-gray-100 text-gray-600 scale-110'
                    : 'bg-gray-50 text-gray-500 group-hover:bg-gray-100 group-hover:text-gray-600 group-hover:scale-105'
                  }
                `}>
                  <UploadIcon className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Upload your photo
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Drag and drop your image here, or click to browse
                  </p>
                  <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                    <span>PNG, JPG, WEBP</span>
                    <span>•</span>
                    <span>Max 10MB</span>
                  </div>
                </div>
              </div>
            </label>

            <input
              id="image-upload"
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, image/webp"
              onChange={handleFileChange}
            />

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
                <p className="font-medium text-sm">{error}</p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <span className="text-gray-700 font-bold text-lg">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">AI Technology</h3>
              <p className="text-gray-600 text-xs">Advanced virtual fitting</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <span className="text-gray-700 font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Instant Preview</h3>
              <p className="text-gray-600 text-xs">See results immediately</p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <span className="text-gray-700 font-bold text-lg">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1">Secure & Private</h3>
              <p className="text-gray-600 text-xs">Your photos stay safe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
