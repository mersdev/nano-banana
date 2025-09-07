# Contributing to Tanah Airku Series

Thank you for your interest in contributing to the Tanah Airku Series virtual try-on platform! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git
- Google Gemini API key

### Development Setup

1. **Fork the repository**
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
   # Add your Gemini API key to .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write meaningful commit messages

### Component Structure
- Keep components small and focused
- Use proper TypeScript interfaces
- Implement proper error handling
- Add loading states for async operations

### File Organization
```
components/
├── ui/           # Reusable UI components
├── [Feature]/    # Feature-specific components
└── icons.tsx     # Icon components

services/
└── [service].ts  # API and external service integrations
```

## 🐛 Bug Reports

When filing a bug report, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and device information
- Screenshots if applicable

## ✨ Feature Requests

For feature requests, please:
- Check existing issues first
- Provide clear use case
- Explain the expected behavior
- Consider implementation complexity

## 🔄 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Add tests if applicable
   - Update documentation

3. **Test your changes**
   ```bash
   npm run build
   npm run preview
   ```

4. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

## 🎨 Design Guidelines

### UI/UX Principles
- Mobile-first responsive design
- Clean, minimal interface
- Consistent spacing and typography
- Accessible color contrasts
- Intuitive user flows

### Brand Guidelines
- Use the official logo and colors
- Maintain Malaysian heritage theme
- Professional e-commerce appearance
- Consistent with modern fashion brands

## 🧪 Testing

### Manual Testing
- Test on multiple devices and browsers
- Verify responsive design
- Check AI virtual try-on functionality
- Validate form inputs and error states

### Automated Testing (Future)
- Unit tests for components
- Integration tests for AI service
- E2E tests for user flows

## 📚 Resources

- [React Documentation](https://reactjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Google Gemini AI Documentation](https://ai.google.dev/docs)

## 🤝 Community

- Be respectful and inclusive
- Help others learn and grow
- Share knowledge and best practices
- Provide constructive feedback

## 📞 Questions?

If you have questions about contributing, please:
- Check existing documentation
- Search through issues
- Create a new issue with the "question" label
- Reach out to maintainers

Thank you for contributing to Tanah Airku Series! 🇲🇾
