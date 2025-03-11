# CLAUDE.md - Project Guidelines

## Build/Dev Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Code Style Guidelines
- **TypeScript**: Use strict typing with explicit return types
- **Components**: React functional components with typed props
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Group by external/internal, alphabetize within groups
- **CSS**: Use Tailwind utilities with consistent structure
- **Error Handling**: Use try/catch with typed error responses
- **State**: Prefer React hooks for state management
- **Formatting**: Use consistent indentation (2 spaces)
- **JSX**: One component per file, descriptive component names
- **A11y**: Include proper aria attributes and semantic HTML

## Project Structure
- Next.js App Router architecture
- `/src/app` - Pages and layouts
- `/public` - Static assets
- Responsive design with Tailwind
- Dark/light mode support via CSS variables