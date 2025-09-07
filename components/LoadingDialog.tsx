import React from 'react';

interface LoadingDialogProps {
  isOpen: boolean;
  message?: string;
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({ 
  isOpen, 
  message = "Nano banana is working hard to make things done..." 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      
      {/* Dialog */}
      <div className="relative bg-white rounded-2xl p-8 mx-4 max-w-md w-full shadow-2xl">
        <div className="text-center">
          {/* Nano Banana Logo/Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🍌</span>
            </div>
          </div>
          
          {/* Loading Animation */}
          <div className="mb-6">
            <div className="flex justify-center space-x-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
          
          {/* Message */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Processing Your Image
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {message}
          </p>
          
          {/* Progress indicator */}
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDialog;
