# NeoFolio - AI Developer Portfolio

## Overview

NeoFolio is a modern, AI-themed developer portfolio showcasing cutting-edge web development skills. It's built as a futuristic portfolio application with interactive 3D elements, AI-powered features, and a sleek dark/light theme system. The application demonstrates various frontend technologies and includes interactive demos of dashboard analytics, AI chat functionality, and modern UI/UX patterns.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with custom CSS variables for theming and glassmorphism effects
- **3D Graphics**: Three.js with React Three Fiber for interactive 3D components and particle systems
- **Animations**: Framer Motion for smooth page transitions and micro-interactions
- **State Management**: Zustand for lightweight state management (theme, audio, game states)
- **UI Components**: Radix UI primitives with custom styling for accessibility-first components

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: In-memory storage implementation with interface for easy database switching
- **Session Management**: Express sessions with PostgreSQL session store

### Development Architecture
- **Monorepo Structure**: Shared code between client and server in `/shared` directory
- **Hot Module Replacement**: Vite dev server integration with Express for seamless development
- **Type Safety**: Comprehensive TypeScript configuration across all modules

## Key Components

### Portfolio Sections
- **Hero**: Interactive particle background with 3D elements and call-to-action buttons
- **About**: Timeline-based biography with animated skill progression
- **Skills**: Interactive skill categories with hover effects and project associations
- **Projects**: Filterable project showcase with live demos and source code links
- **AI Chat**: Simulated AI assistant for portfolio interaction and Q&A
- **Dashboard Demo**: Real-time analytics dashboard with charts and data visualization
- **Testimonials**: Carousel-based testimonial display with ratings
- **Contact**: Interactive contact form with toast notifications

### Interactive Features
- **Theme System**: Dark/light mode toggle with persistent storage
- **Particle System**: WebGL-based particle backgrounds for visual enhancement
- **3D Elements**: Floating geometric shapes and interactive 3D components
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Game Components
- **Audio System**: Zustand-based audio management with mute/unmute functionality
- **Game State**: Phase-based game state management (ready/playing/ended)
- **Confetti Effects**: Celebration animations for achievements

## Data Flow

### State Management
1. **Theme State**: Persisted in localStorage, synchronized across components
2. **Audio State**: Centralized audio control with sound effect management
3. **Game State**: Phase transitions and game logic coordination
4. **Form State**: Contact form validation and submission handling

### API Communication
1. **Express Routes**: RESTful API endpoints under `/api` prefix
2. **Error Handling**: Centralized error middleware with proper status codes
3. **Request Logging**: Detailed logging for API requests and responses

### Database Operations
1. **User Management**: CRUD operations through storage interface
2. **Schema Validation**: Zod schemas for type-safe data validation
3. **Migration System**: Drizzle migrations for database schema management

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### 3D and Visualization
- **Three.js**: 3D graphics engine
- **React Three Fiber**: React renderer for Three.js
- **React Three Drei**: Useful helpers for R3F
- **Recharts**: Chart library for data visualization

### Database and Backend
- **Drizzle ORM**: Type-safe ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider
- **Express**: Web application framework
- **Connect PG Simple**: PostgreSQL session store

### Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing tool
- **GLSL**: Shader support for advanced graphics

## Deployment Strategy

### Build Process
1. **Client Build**: Vite builds React application to `/dist/public`
2. **Server Build**: ESBuild bundles server code to `/dist/index.js`
3. **Asset Optimization**: Automatic optimization of images, fonts, and 3D models

### Production Configuration
- **Environment**: Node.js production mode
- **Static Serving**: Express serves built client assets
- **Database**: PostgreSQL connection via DATABASE_URL
- **Session Storage**: PostgreSQL-based session persistence

### Hosting Platform
- **Replit Deployment**: Configured for Replit's autoscale deployment
- **Port Configuration**: Server listens on port 5000, exposed on port 80
- **Asset Handling**: Support for GLTF/GLB 3D models and audio files

## Changelog

```
Changelog:
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```