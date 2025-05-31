# Firebase Studio Project

This is a Next.js starter project for Firebase Studio.

## Key Technologies

*   **Next.js**: `15.2.3`
*   **Genkit (Firebase AI)**: `^1.11.0`
    *   `genkit`
    *   `@genkit-ai/next`
    *   `@genkit-ai/googleai`
    *   `genkit-cli`
*   **React**: `^18.3.1` (as per current `package.json`)
*   **TypeScript**

## Getting Started

To get started with development:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    This will typically start the server on `http://localhost:9002` (as per `dev` script in `package.json`).

3.  **Open in Browser**:
    Navigate to `http://localhost:9002` (or the port shown in your terminal) to see the application.
    The main page can be found at `src/app/page.tsx`.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

## Development Notes & Troubleshooting

### Genkit Next.js Handler Import

Starting with `@genkit-ai/next` version `1.11.0` (and potentially some earlier versions if the change was backported or part of a precursor release aligned with Next.js 15 support), the way to import the Genkit request handler for Next.js has changed.

Previously, you might have used a named import:
```typescript
// Old way
import { createNextHandler } from '@genkit-ai/next';
```

The correct way to import it now is using a default import:
```typescript
// Current way for @genkit-ai/next@^1.11.0
import createNextHandler from '@genkit-ai/next';
```
This is implemented in `src/app/api/genkit/[[...path]]/route.ts`.

### OpenTelemetry Warnings during Build

During the `npm run build` process, you might see warnings related to OpenTelemetry, such as:
*   `Critical dependency: the request of a dependency is an expression`
*   `Module not found: Can't resolve '@opentelemetry/exporter-jaeger'`

These are typically related to optional dependencies or dynamic loading within the OpenTelemetry packages (which Genkit uses for tracing). As of the current testing, these warnings do not prevent a successful production build. If Jaeger or specific OpenTelemetry exporters are explicitly needed, ensure they are correctly installed and configured.

### Handlebars `require.extensions` Warning

A warning like `require.extensions is not supported by webpack. Use a loader instead.` may appear during the build, originating from the `handlebars` package (a dependency of `dotprompt`, which is used by Genkit). This is an issue within the Handlebars library's compatibility with modern webpack bundling. This warning also does not currently prevent a successful build.
