# Replit.md

## Overview

This is a full-stack web application built with React and Express.js that provides a modern business services platform. The application uses a monorepo structure with shared components between frontend and backend, featuring a PostgreSQL database with Drizzle ORM for data management. The frontend is built with React, TypeScript, and shadcn/ui components with Tailwind CSS styling, while the backend provides REST API endpoints using Express.js.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Framework**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation through hookform/resolvers

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but can be provisioned)
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple
- **API Structure**: RESTful endpoints with `/api` prefix
- **Development**: Hot reloading with tsx for TypeScript execution

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Current Schema**: Users table with username/password authentication
- **In-Memory Fallback**: MemStorage class for development without database

### Authentication and Authorization
- **Session-based Authentication**: Uses PostgreSQL session store
- **User Model**: Simple username/password system with UUID primary keys
- **Password Storage**: Plain text (needs to be enhanced with hashing)
- **Query Client**: Custom configuration with credential handling for authenticated requests

### Development and Build System
- **Monorepo Structure**: Shared TypeScript definitions between client and server
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **Development Server**: Integrated Vite dev server with Express backend
- **Path Aliases**: Configured for clean imports (@, @shared, @assets)

### External Dependencies

#### UI and Frontend Libraries
- **Radix UI**: Complete set of unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Lucide React**: Icon library for consistent iconography
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing solution
- **date-fns**: Date manipulation and formatting utilities

#### Backend and Database
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe SQL query builder and migration tool
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions

#### Development Tools
- **TypeScript**: Static type checking across the entire stack
- **Vite**: Frontend build tool with HMR and optimized bundling
- **esbuild**: Fast JavaScript bundler for backend production builds
- **tsx**: TypeScript execution engine for development
- **Replit Integrations**: Development banner and cartographer for Replit environment

#### Form and Validation
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod