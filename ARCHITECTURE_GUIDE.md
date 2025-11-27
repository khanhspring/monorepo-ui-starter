# Building a Scalable Frontend Monorepo: Architecture Best Practices

## Introduction

In modern frontend development, managing multiple applications and shared packages efficiently is crucial for maintaining code quality, enforcing consistency, and accelerating development velocity. This article introduces a production-ready monorepo architecture that demonstrates best practices for structuring large-scale frontend projects.

This **Monorepo UI Starter** is built with cutting-edge tools and follows industry-standard patterns to solve common challenges in enterprise frontend development:

- 🚀 **Code Sharing**: Reusable components, utilities, and configurations across multiple apps
- 🏗️ **Scalability**: Clear separation of concerns with a modular package structure
- ⚡ **Performance**: Optimized builds with caching and parallel execution via Turborepo
- 🎨 **Developer Experience**: Integrated Storybook for component development and documentation
- 📦 **Type Safety**: End-to-end TypeScript with shared type definitions
- 🔧 **Maintainability**: Consistent linting, formatting, and build configurations

## Key Features

### Modern Stack
- **React 19** with React Compiler for automatic optimization
- **Vite 7** for lightning-fast builds and HMR
- **TypeScript 5.9** with strict type checking
- **Tailwind CSS v4** for utility-first styling

### Complete Form System
- **TanStack Form** integration with type-safe form state management
- Pre-built form components (TextField, SelectField, SubmitButton)
- Lazy loading for optimal bundle size
- Automatic validation and error handling

### Data Management
- **TanStack Query** for server state management
- Separate packages for queries and mutations
- Automatic caching and background refetching
- Optimistic updates support

### Type-Safe Routing
- **TanStack Router** with file-based routing
- Auto-generated route tree
- Protected route groups
- Type-safe navigation and params

### Component Library
- **Mantine v8** + **Tailwind v4** hybrid approach
- Atomic design structure (atoms, molecules, templates)
- **Storybook** for component documentation
- **Phosphor Icons** for consistent iconography

### Developer Tools
- Turborepo for build orchestration
- pnpm for fast, efficient package management
- ESLint and Prettier for code quality
- Type checking across all packages

## Technology Stack

### Core Tools

- **[Turborepo](https://turbo.build/repo)**: High-performance build system for JavaScript/TypeScript monorepos (v2.6.1)
- **[pnpm](https://pnpm.io/)**: Fast, disk space efficient package manager with excellent monorepo support (v9.0.0)
- **[React 19](https://react.dev/)**: Latest version with React Compiler support (v19.2.0)
- **[Vite 7](https://vitejs.dev/)**: Next-generation frontend build tool (v7.2.4)
- **[TypeScript 5.9](https://www.typescriptlang.org/)**: Strict type checking across the entire codebase (v5.9.3)

### UI & Styling

- **[Mantine](https://mantine.dev/)**: Comprehensive React component library (v8.3.8)
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework (v4.1.17)
- **[Storybook](https://storybook.js.org/)**: Component development and documentation environment (v10.0.8)
- **[Phosphor Icons](https://phosphoricons.com/)**: Flexible icon family (v2.1.10)

### Application Framework

- **[TanStack Router](https://tanstack.com/router)**: Type-safe routing with automatic route generation (v1.139.1)
- **[TanStack Query](https://tanstack.com/query)**: Powerful asynchronous state management (v5.90.10)
- **[TanStack Form](https://tanstack.com/form)**: Headless, type-safe form state management (v1.26.0)
- **[Axios](https://axios-http.com/)**: HTTP client for API requests (v1.13.2)
- **[Zod](https://zod.dev/)**: TypeScript-first schema validation (v4.1.12)

### Utility Libraries

- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)**: Efficiently merge Tailwind CSS classes (v3.4.0)
- **[tailwind-variants](https://www.tailwind-variants.org/)**: Create variant-based component styles (v3.2.2)
- **[@uidotdev/usehooks](https://usehooks.com/)**: Collection of modern React hooks (v2.4.1)

## Monorepo Architecture

### High-Level Structure

```
monorepo-ui-starter/
├── apps/                    # Deployable applications
│   ├── web/                # Main web application
│   └── storybook/          # Component documentation
├── packages/               # Shared internal packages
│   ├── ui/                 # Component library
│   ├── api-client/         # API layer
│   ├── hooks/              # React hooks & queries
│   ├── types/              # TypeScript definitions
│   ├── utils/              # Utility functions
│   ├── eslint-config/      # Shared ESLint configs
│   └── typescript-config/  # Shared TypeScript configs
├── package.json            # Root workspace configuration
├── pnpm-workspace.yaml     # pnpm workspace definition
└── turbo.json              # Turborepo pipeline configuration
```

### Design Philosophy

This architecture follows the **"apps and packages"** pattern, which separates:

1. **Applications** (`apps/`): Deployable, user-facing applications
2. **Packages** (`packages/`): Reusable internal libraries and configurations

This separation ensures clear boundaries and enables:
- Independent deployment of applications
- Shared code without duplication
- Incremental adoption of shared packages
- Clear dependency graphs

## Deep Dive: Package Structure

### 1. `apps/web` - Main Application

The primary React application built with Vite and modern routing patterns.

**Key Features:**
- **File-based routing** with TanStack Router
- **Route generation** via `@tanstack/router-plugin`
- **Authentication context** with protected routes
- **Layout system** for consistent UI structure
- **Feature-based organization** for scalability

**Directory Structure:**
```
web/
├── src/
│   ├── main.tsx                    # App entry point
│   ├── routeTree.gen.ts           # Auto-generated routes
│   ├── components/
│   │   └── layouts/               # Layout components
│   │       └── MainLayout/
│   ├── context/
│   │   └── auth.tsx               # Auth state management
│   ├── features/                  # Feature modules
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Users/
│   │   ├── AddUser/
│   │   └── UserDetail/
│   ├── hooks/                     # App-specific hooks
│   ├── routes/                    # Route definitions
│   │   ├── __root.tsx
│   │   ├── (auth)/               # Auth route group
│   │   │   └── login.tsx
│   │   └── (main)/               # Protected route group
│   │       ├── index.tsx
│   │       ├── route.tsx
│   │       └── users/
│   │           ├── index.tsx      # /users
│   │           ├── create.tsx     # /users/create
│   │           └── $userId.tsx    # /users/:userId
│   └── styles/
│       └── globals.css
├── package.json
└── vite.config.ts
```

**Best Practices Demonstrated:**

1. **Feature-Based Organization**: Each feature (Home, Users, Login) is self-contained with its own components and logic
2. **Route Grouping**: Using `(auth)` and `(main)` for logical separation without affecting URLs
3. **Type-Safe Routing**: TanStack Router provides full TypeScript support
4. **Context Separation**: Auth logic separated from components

### 2. `apps/storybook` - Component Documentation

Dedicated Storybook instance for developing and documenting the UI component library.

**Purpose:**
- Visual component testing
- Interactive documentation
- Design system showcase
- Isolated development environment

**Key Files:**
```
storybook/
├── src/
│   ├── examples/              # Example implementations
│   │   ├── Icons.tsx
│   │   └── table.tsx
│   └── stories/               # Component stories
│       ├── Button.stories.ts
│       ├── Input.stories.ts
│       ├── TextInput.stories.ts
│       ├── Table.stories.ts
│       ├── EmptyState.stories.tsx
│       └── Icons.stories.ts
└── package.json
```

### 3. `packages/ui` - Component Library

The heart of the design system, providing reusable React components.

**Architecture Highlights:**

- **Atomic Design Pattern**: Organized into atoms, molecules, organisms, and templates
- **Polymorphic Components**: Using Mantine's `createPolymorphicComponent` for flexibility
- **Tailwind + Mantine Hybrid**: Leverages both utility classes and component library
- **CSS Export**: Exports `globals.css` for consistent styling

**Structure:**
```
ui/
├── src/
│   ├── globals.css           # Global styles
│   ├── assets/
│   │   └── images/
│   ├── atoms/                # Basic building blocks
│   │   ├── ActionIcon.tsx
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── TextInput.tsx
│   │   ├── Select.tsx
│   │   ├── Table.tsx
│   │   ├── Icon.tsx
│   │   ├── EmptyState.tsx
│   │   ├── CopyButton.tsx
│   │   ├── UIProvider.tsx
│   │   └── index.ts
│   ├── molecules/            # Composite components
│   │   ├── Form/            # TanStack Form integration
│   │   │   ├── components/
│   │   │   │   ├── FormContainer.tsx
│   │   │   │   ├── FormTextField.tsx
│   │   │   │   ├── FormSelectField.tsx
│   │   │   │   ├── SubmitButton.tsx
│   │   │   │   └── index.ts
│   │   │   ├── context.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   └── templates/            # Page templates
└── package.json
```

**Component Example:**
```typescript
// Wrapping Mantine with custom styling
import { Button as MButton, type ButtonProps as MButtonProps } from '@mantine/core';

const Button = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>(({ ...props }, ref) => (
    <MButton
      {...props}
      ref={ref}
      classNames={{
        root: 'focus:ring-2 focus:ring-brand-400',
        section: '[&_svg]:text-brand-300',
      }}
    />
  ))
);
```

**Benefits:**
- Consistent component API across the application
- Easy customization through Tailwind classes
- Type-safe props with TypeScript
- Accessible components out of the box (Mantine)

**Form System with TanStack Form:**

The UI package includes a sophisticated form system built on TanStack Form v1.26.0, providing type-safe, headless form state management:

```typescript
// Form hook creation with field and form components
import {lazy} from "react";
import {createFormHook} from "@tanstack/react-form";

const TextField = lazy(() => import('./FormTextField'));
const SelectField = lazy(() => import('./FormSelectField'));
const SubmitButton = lazy(() => import('./SubmitButton'))

export const {useAppForm, withForm, withFieldGroup} = createFormHook({
  fieldComponents: {
    TextField,
    SelectField
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});
```

**Form Components:**
- `FormContainer`: Wrapper component for form layout
- `FormTextField`: Text input field with validation
- `FormSelectField`: Select dropdown field
- `SubmitButton`: Form submission button with loading state

This approach provides:
- Lazy loading for optimal bundle size
- Type-safe field definitions
- Automatic validation and error handling
- Consistent form behavior across the application

### 4. `packages/api-client` - API Layer

Centralized HTTP client with type-safe API endpoints.

**Structure:**
```
api-client/
├── src/
│   ├── index.ts              # Main client export
│   ├── axios.ts              # Axios configuration
│   ├── user.ts               # User endpoints
│   └── product.ts            # Product endpoints
└── package.json
```

**Key Concepts:**

1. **Client Configuration**: Single source for base URL, auth tokens, and interceptors
2. **Resource Organization**: Each domain (user, product) has its own file
3. **Type Integration**: Uses shared types from `@repo/types`
4. **Token Management**: Integrates with utility functions for auth

**Benefits:**
- Centralized API logic
- Easy to mock for testing
- Consistent error handling
- Reusable across multiple apps

### 5. `packages/hooks` - React Hooks & Queries

Custom hooks and TanStack Query integration layer.

**Structure:**
```
hooks/
├── src/
│   ├── lib/                  # Utility hooks
│   │   ├── api.ts
│   │   └── index.ts
│   ├── queries/              # TanStack Query hooks
│   │   ├── index.ts
│   │   ├── user.ts
│   │   └── product.ts
│   └── mutations/            # TanStack Query mutations
│       ├── index.ts
│       └── user.ts
└── package.json
```

**Multi-path Export Strategy:**
```json
{
  "exports": {
    "./lib": "./src/lib/index.ts",
    "./queries": "./src/queries/index.ts",
    "./mutations": "./src/mutations/index.ts"
  }
}
```

**Benefits:**
- Separation of general hooks from data-fetching hooks
- Server state management with TanStack Query
- Consistent data fetching patterns (queries) and mutation patterns
- Automatic caching and refetching
- Optimistic updates and error handling for mutations

### 6. `packages/types` - Type Definitions

Shared TypeScript interfaces and types.

**Structure:**
```
types/
├── src/
│   ├── index.ts              # Main exports
│   ├── user.ts               # User types
│   ├── product.ts            # Product types
│   └── response.ts           # API response types
└── package.json
```

**Best Practices:**
- Domain-based type organization
- Zod schemas for runtime validation
- Export both types and validators
- Single source of truth for data structures

### 7. `packages/utils` - Utility Functions

Pure utility functions for common operations.

**Structure:**
```
utils/
├── src/
│   ├── index.ts
│   └── cookies.ts            # Cookie management
└── package.json
```

**Purpose:**
- Framework-agnostic utilities
- Shared business logic
- Helper functions
- No external dependencies (when possible)

### 8. Configuration Packages

#### `packages/eslint-config`
Shared ESLint configurations for consistent code quality.

```
eslint-config/
├── eslint.base.js            # Base config
├── eslint.react.js           # React-specific rules
└── package.json
```

**Benefits:**
- Consistent linting across all packages
- Easy to update rules globally
- Different configs for different package types

#### `packages/typescript-config`
Shared TypeScript configurations.

```
typescript-config/
├── tsconfig.base.json        # Base config
├── tsconfig.vite.json        # Vite-specific config
└── package.json
```

**Configuration Inheritance:**
```json
// In app's tsconfig.json
{
  "extends": "@repo/typescript-config/tsconfig.vite.json",
  "compilerOptions": {
    // App-specific overrides
  }
}
```

## Workspace Configuration

### pnpm Workspace

**`pnpm-workspace.yaml`:**
```yaml
packages:
  - "apps/*"
  - "packages/*"
```

This simple configuration tells pnpm to treat all directories under `apps/` and `packages/` as workspace packages.

**Benefits:**
- Single `node_modules` at root (with proper hoisting)
- Fast installation with content-addressable storage
- Strict dependency management
- Workspace protocol for internal packages

### Turborepo Pipeline

**`turbo.json`:**
```json
{
  "$schema": "https://turborepo.com/schema.json",
  "ui": "tui",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

**Key Concepts:**

1. **Task Dependencies**: `^build` means "run build in dependencies first"
2. **Caching**: Automatic caching of build outputs for fast rebuilds
3. **Parallel Execution**: Independent tasks run in parallel
4. **Incremental Builds**: Only rebuild changed packages

**Workflow Example:**
```bash
# Build everything (with dependency order)
pnpm build

# Build only web app and its dependencies
pnpm build --filter=web

# Develop specific app
pnpm dev --filter=storybook
```

## Dependency Management Strategy

### Workspace Dependencies

Internal packages reference each other using the `workspace:*` protocol:

```json
{
  "dependencies": {
    "@repo/ui": "workspace:*",
    "@repo/hooks": "workspace:*",
    "@repo/types": "workspace:*"
  }
}
```

**Benefits:**
- Always uses local version during development
- Prevents version mismatches
- Clear indication of internal dependencies

### Peer Dependencies

UI components declare React as a peer dependency:

```json
{
  "peerDependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

**Why:**
- Ensures single React instance across the app
- Prevents duplicate React in bundle
- Consumer controls the React version

### Version Synchronization

Common dependencies use the same version across packages:
- `typescript`: `~5.9.3` (all packages)
- `eslint`: `^9.39.1` (all packages)
- `react` and `react-dom`: `^19.2.0` (web + storybook)
- `@tanstack/react-query`: `^5.90.10` (web + hooks)
- `@tanstack/react-form`: `^1.26.0` (web + ui)
- `vite`: `^7.2.4` (web + storybook + ui)
- `tailwindcss`: `^4.1.17` (web + ui)
- `@mantine/core`: `^8.3.8` (ui)

## Routing Architecture

### TanStack Router Features

The web app uses TanStack Router with advanced features:

**1. File-Based Routing**
```
routes/
├── __root.tsx                 # Root layout
├── (auth)/
│   └── login.tsx             # /login
└── (main)/
    ├── route.tsx             # Layout for protected routes
    ├── index.tsx             # /
    └── users/
        ├── index.tsx         # /users
        └── $userId.tsx       # /users/:userId
```

**2. Route Context**
```typescript
export interface AppRouterContext {
  queryClient: QueryClient,
  auth: AuthContext
}

const router = createRouter({
  routeTree,
  context: { queryClient, auth }
});
```

**3. Type-Safe Navigation**
```typescript
// Auto-generated types for all routes
import { Link } from '@tanstack/react-router'

<Link to="/users/$userId" params={{ userId: '123' }} />
```

## State Management Patterns

### 1. Server State (TanStack Query)

For data from APIs:
```typescript
// In @repo/hooks/queries/user.ts
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => apiClient.getUsers()
  });
};
```

For data mutations:
```typescript
// In @repo/hooks/mutations/user.ts
export const useCreateUser = () => {
  return useMutation({
    mutationFn: (data: CreateUserData) => apiClient.users.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    }
  });
};
```

**Benefits:**
- Automatic caching
- Background refetching
- Optimistic updates
- Loading/error states
- Automatic query invalidation after mutations

### 2. Authentication State (Context)

For global auth state:
```typescript
// In apps/web/src/context/auth.tsx
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // Auth logic
  return <AuthContext.Provider value={{ user }} />;
};
```

### 3. Local State (React Hooks)

For component-specific state:
```typescript
const [isOpen, setIsOpen] = useState(false);
```

## Development Workflow

### Getting Started

```bash
# Install dependencies
pnpm install

# Develop all apps
pnpm dev

# Develop specific app
pnpm dev --filter=web
pnpm dev --filter=storybook

# Build all packages
pnpm build

# Lint everything
pnpm lint

# Type check all packages
pnpm check-types

# Format code
pnpm format
```

### Adding a New Package

1. Create package directory:
```bash
mkdir packages/new-package
```

2. Add `package.json`:
```json
{
  "name": "@repo/new-package",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "exports": {
    ".": "./src/index.ts"
  }
}
```

3. The package is automatically detected by pnpm workspace

### Adding a New App

Similar to package, but in `apps/` directory:
```bash
mkdir apps/new-app
# Add package.json with appropriate dependencies
```

## Best Practices & Patterns

### 1. Package Naming Convention

- Use `@repo/` scope for all internal packages
- Descriptive names: `@repo/ui`, `@repo/api-client`, `@repo/hooks`
- Consistent with standard naming (e.g., `eslint-config`, `typescript-config`)

### 2. Export Strategy

**Named Exports for Atoms:**
```typescript
// @repo/ui/atoms/index.ts
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as TextInput } from './TextInput';
export { default as Select } from './Select';
export { default as Table } from './Table';
export { default as EmptyState } from './EmptyState';
export { default as Icon } from './Icon';
export * from './Icon';
```

**Sub-path Exports for Categories:**
```json
{
  "exports": {
    "./globals.css": "./src/globals.css",
    "./atoms": "./src/atoms/index.ts",
    "./molecules": "./src/molecules/index.ts"
  }
}
```

**Usage in Applications:**
```typescript
// Import atoms
import { Button, Input, Select } from '@repo/ui/atoms';

// Import molecules (Form components)
import { FormContainer, useAppForm } from '@repo/ui/molecules';

// Import global styles
import '@repo/ui/globals.css';
```

### 3. Type Safety

- Strict TypeScript in all packages
- Shared types in `@repo/types`
- Runtime validation with Zod where needed
- Proper peer dependencies for React components

### 4. Code Organization

**Feature-Based Structure in Apps:**
```
features/
├── Users/
│   ├── Users.tsx
│   ├── UserList.tsx
│   ├── UserCard.tsx
│   └── index.ts
```

**Atomic Design in UI Package:**
```
ui/
├── atoms/          # Button, Input
├── molecules/      # SearchBar, Card
├── organisms/      # Header, Sidebar
└── templates/      # PageLayout
```

### 5. Documentation

- README in each package explaining its purpose
- Storybook for visual components
- JSDoc comments for complex functions
- TypeScript types as inline documentation

### 6. Performance Optimization

- **Tree-shaking**: ES modules for optimal bundling
- **Code splitting**: Dynamic imports for routes
- **Caching**: Turborepo caches all build outputs
- **React Compiler**: Enabled for automatic optimization

### 7. Testing Strategy

While not shown in current structure, recommended additions:

```
packages/ui/
├── src/
│   └── atoms/
│       ├── Button.tsx
│       └── Button.test.tsx
└── vitest.config.ts
```

## Scaling Considerations

### When to Create New Packages

Create a new package when:
- ✅ Code is reused across 2+ apps
- ✅ It has a clear, single responsibility
- ✅ It can be developed/tested independently
- ✅ It has stable interfaces

Don't create a package if:
- ❌ It's only used in one app
- ❌ It's tightly coupled to app logic
- ❌ The API changes frequently

### Adding More Apps

This structure easily supports:
- Admin dashboard (`apps/admin`)
- Mobile web app (`apps/mobile`)
- Landing page (`apps/landing`)
- Internal tools (`apps/tools`)

All sharing the same packages for consistency.

### Multi-Framework Support

While this starter uses React, you could add:
- Vue app using `@repo/types` and `@repo/api-client`
- Node.js backend using `@repo/types`
- React Native app using `@repo/hooks` and `@repo/utils`

## Migration Path for Existing Projects

### Step 1: Monorepo Setup
1. Add `pnpm-workspace.yaml`
2. Add `turbo.json`
3. Update root `package.json`

### Step 2: Extract Shared Code
1. Move shared components to `packages/ui`
2. Move API calls to `packages/api-client`
3. Move types to `packages/types`

### Step 3: Configure Dependencies
1. Update imports to use `@repo/*`
2. Add workspace dependencies
3. Test builds and dev mode

### Step 4: Optimize
1. Configure Turborepo caching
2. Set up parallel execution
3. Add Storybook for components

## Common Pitfalls & Solutions

### Issue: Circular Dependencies
**Solution**: Use dependency injection and proper layering
```
utils → types → api-client → hooks → ui → apps
```

### Issue: Slow Installations
**Solution**: Use pnpm and Turborepo caching
```bash
# pnpm is much faster than npm/yarn
pnpm install --frozen-lockfile
```

### Issue: Type Errors Across Packages
**Solution**: Use project references in TypeScript
```json
{
  "references": [
    { "path": "../../packages/types" }
  ]
}
```

### Issue: Hot Reload Not Working
**Solution**: Configure Vite to watch workspace packages
```typescript
// vite.config.ts
export default {
  server: {
    watch: {
      ignored: ['!**/node_modules/@repo/**']
    }
  }
}
```

## Real-World Benefits

### Development Speed
- ✅ **Shared components**: Build once, use everywhere
- ✅ **Type safety**: Catch errors at compile time
- ✅ **Fast builds**: Turborepo cache eliminates redundant work

### Code Quality
- ✅ **Consistent patterns**: Shared configs enforce standards
- ✅ **Reusability**: DRY principle across all apps
- ✅ **Testing**: Shared test utilities and patterns

### Team Collaboration
- ✅ **Clear ownership**: Each package has clear boundaries
- ✅ **Independent work**: Teams can work on different apps/packages
- ✅ **Shared knowledge**: Common patterns across codebase

### Maintainability
- ✅ **Single source of truth**: Types, configs, and components
- ✅ **Easy updates**: Change once, update everywhere
- ✅ **Dependency management**: Workspace protocol prevents version drift

## Conclusion

This monorepo architecture represents modern best practices for frontend development at scale. By combining Turborepo's build orchestration, pnpm's efficient package management, and a well-organized structure, it provides:

1. **Exceptional Developer Experience**: Fast builds, hot reload, type safety
2. **Code Reusability**: Shared packages eliminate duplication
3. **Scalability**: Easy to add new apps and packages
4. **Maintainability**: Consistent patterns and single source of truth
5. **Performance**: Optimized builds with caching and parallel execution

Whether you're starting a new project or migrating an existing one, this architecture provides a solid foundation for building modern, scalable frontend applications.

## Further Resources

- **Turborepo Documentation**: https://turbo.build/repo/docs
- **pnpm Workspaces**: https://pnpm.io/workspaces
- **TanStack Router**: https://tanstack.com/router/latest
- **TanStack Query**: https://tanstack.com/query/latest
- **TanStack Form**: https://tanstack.com/form/latest
- **Mantine UI**: https://mantine.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Phosphor Icons**: https://phosphoricons.com/
- **Vite**: https://vitejs.dev/

---

## Repository

Check out the full implementation at: [https://github.com/khanhspring/monorepo-ui-starter]

Feel free to use this starter as a foundation for your next project, and contribute improvements back to the community!

---

*Last updated: November 27, 2025*
*Built with ❤️ for the frontend community*

