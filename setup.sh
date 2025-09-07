#!/bin/bash

# Tanah Airku Series - Setup Script
# This script helps you set up the project for development

echo "🇲🇾 Tanah Airku Series - Setup Script"
echo "======================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    echo "   Please update Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo ""
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo ""
    echo "🔑 Setting up environment variables..."
    cp .env.example .env.local
    echo "✅ Created .env.local from template"
    echo ""
    echo "⚠️  IMPORTANT: Please edit .env.local and add your Gemini API key"
    echo "   Get your API key from: https://ai.google.dev/"
    echo ""
else
    echo "✅ .env.local already exists"
fi

# Check if API key is set
if grep -q "your_gemini_api_key_here" .env.local 2>/dev/null; then
    echo "⚠️  Please update your Gemini API key in .env.local"
    echo "   Current value is still the placeholder"
fi

echo ""
echo "🚀 Setup complete! Next steps:"
echo ""
echo "1. Edit .env.local and add your Gemini API key"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:5173"
echo ""
echo "📚 For deployment to GitHub Pages, see DEPLOYMENT.md"
echo ""
echo "Happy coding! 🎉"
