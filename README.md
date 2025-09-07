# 🇲🇾 Tanah Airku Series - AI-Powered Virtual Try-On

<div align="center">
  <img src="public/logo.png" alt="Tanah Airku Series Logo" width="200"/>

  [![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC.svg)](https://tailwindcss.com/)
  [![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-AI-4285F4.svg)](https://ai.google.dev/)
</div>

## 🌟 Overview

**Tanah Airku Series** is a premium e-commerce platform featuring AI-powered virtual try-on technology for the "Malaysia Day '63 Heritage Tee" collection. Built with cutting-edge web technologies and Google's Gemini AI, this application allows customers to virtually try on t-shirts before purchasing.

### ✨ Key Features

- 🤖 **AI Virtual Try-On**: Powered by Google Gemini 2.5 Flash Image Preview
- 🎨 **Multiple Color Options**: Black, Cream, Maroon, Navy Blue, and Rainbow variants
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🛒 **E-commerce Ready**: Complete product page with size selection and cart functionality
- 🎯 **Premium UX**: Clean, modern interface inspired by leading fashion brands
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.8.2** - Type-safe development
- **Vite 6.2.0** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework

### AI & APIs
- **Google Gemini AI** - Advanced image generation and editing
- **@google/genai 1.16.0** - Official Google Generative AI SDK

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Google Gemini API key

### Quick Setup (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tanah-airku-series.git
   cd tanah-airku-series
   ```

2. **Run the setup script**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Add your Gemini API key**
   Edit `.env.local` and replace `your_gemini_api_key_here` with your actual API key

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Manual Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tanah-airku-series.git
   cd tanah-airku-series
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Add your Gemini API key to `.env.local`:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
tanah-airku-series/
├── public/                 # Static assets
│   ├── logo.png           # Brand logo
│   ├── black-shirt.png    # T-shirt templates
│   ├── cream-shirt.png
│   ├── maroon-shirt.png
│   ├── navy-blue-shirt.png
│   └── rainbow-shirt.png
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── LoadingDialog.tsx # Custom loading component
│   ├── ProductPage.tsx   # Main product page
│   ├── UploadPage.tsx    # Image upload interface
│   └── icons.tsx         # Icon components
├── services/             # API services
│   └── geminiService.ts  # Gemini AI integration
├── App.tsx              # Main application component
├── types.ts             # TypeScript type definitions
└── index.css            # Global styles
```

## 🎨 Available T-Shirt Colors

| Color | Preview | File |
|-------|---------|------|
| Black | ⚫ | `black-shirt.png` |
| Cream | 🟡 | `cream-shirt.png` |
| Maroon | 🟤 | `maroon-shirt.png` |
| Navy Blue | 🔵 | `navy-blue-shirt.png` |
| Rainbow | 🌈 | `rainbow-shirt.png` |

## 🔧 Configuration

### Environment Variables

#### Local Development
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

#### GitHub Secrets (for GitHub Pages deployment)
To deploy to GitHub Pages, add the following secret to your repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add:
   - **Name**: `GEMINI_API_KEY`
   - **Value**: Your actual Gemini API key

The GitHub Actions workflow will automatically use this secret during deployment.

### Vite Configuration
The project uses custom Vite configuration for:
- Environment variable handling
- Path aliases (`@` for root directory)
- Gemini API key injection

## 📱 Features in Detail

### Virtual Try-On Process
1. **Upload Photo**: Users upload their portrait image
2. **Select Color**: Choose from available t-shirt colors
3. **AI Processing**: Gemini AI generates realistic try-on image
4. **Result Display**: View the virtual try-on result

### E-commerce Features
- Size selection (XS to 4XL)
- Quantity selector
- Add to cart functionality
- Responsive product gallery
- Mobile-optimized interface

## 🚀 Deployment

### GitHub Pages (Recommended)

This project includes automated GitHub Actions workflow for deployment to GitHub Pages.

#### Setup Steps:

1. **Fork/Clone the repository to your GitHub account**

2. **Add GitHub Secrets**:
   - Go to your repository → Settings → Secrets and variables → Actions
   - Add a new repository secret:
     - Name: `GEMINI_API_KEY`
     - Value: Your actual Gemini API key

3. **Enable GitHub Pages**:
   - Go to repository → Settings → Pages
   - Source: "GitHub Actions"

4. **Update repository name in vite.config.ts**:
   ```typescript
   const base = process.env.NODE_ENV === 'production'
     ? '/your-repository-name/' // Replace with your actual repo name
     : '/';
   ```

5. **Push to main branch**:
   ```bash
   git push origin main
   ```

The GitHub Action will automatically build and deploy your app to GitHub Pages!

### Manual Deployment

#### Build for Production
```bash
npm run build
```

#### Preview Production Build
```bash
npm run preview
```

#### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for powerful image generation
- Radix UI for accessible components
- Tailwind CSS for rapid styling
- The React and Vite communities

## 📞 Support

For support, email support@tanahairku.com or join our Discord community.

---

<div align="center">
  Made with ❤️ for Malaysia Day '63 Heritage Collection
</div>
