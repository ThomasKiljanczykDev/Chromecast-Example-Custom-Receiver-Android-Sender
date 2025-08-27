# Chromecast Example Custom Receiver

## Overview

Example Chromecast (Google Cast) custom receiver application that displays a red square which moves based on sender
commands.
This is the JavaScript/TypeScript portion of the Chromecast Example project,
containing the receiver web application and its AWS infrastructure deployment.

## Project Structure

This is a Yarn workspace monorepo containing three packages:

- **`receiver-app/`** - The main Chromecast receiver web application built with TypeScript and Vite
- **`iac/`** - Infrastructure as Code using AWS CDK for deploying the receiver app to AWS CloudFront + S3
- **`eslint-config/`** - Shared ESLint configuration for the workspace

## Prerequisites

- Node.js (v22 or later recommended)
- Yarn 4.x (using Yarn Berry with node_modules)
- Google Cast SDK Developer Console access

## Setup

1. Install dependencies:

    ```bash
    yarn install
    ```

2. Configure your Chromecast App ID in the receiver app if needed.

## Development

### Running the receiver app locally

```bash
# Start the development server
cd receiver-app
yarn dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Building for production

```bash
# Build the receiver app
cd receiver-app
yarn build

# Or build with development configuration
yarn build:development
```

The built files will be in `receiver-app/dist/`.

## Code Quality

### Linting

```bash
# Run ESLint across the entire workspace
yarn lint
```

### Formatting

```bash
# Format all files with Prettier
yarn format
```

### Type Checking

```bash
# Check TypeScript types in receiver-app
cd receiver-app
yarn check-types

# Check TypeScript types in IAC
cd ../iac
yarn check-types
```

## Deployment

The project uses AWS CDK to deploy the receiver app to AWS CloudFront with S3 storage.

```bash
cd iac

# Compile TypeScript
yarn compile

# Deploy to AWS
yarn cdk deploy
```

## Git Hooks

This project uses Husky for Git hooks.
Pre-commit hooks are automatically installed when you run `yarn install` and will run linting checks before each commit.

## Additional Resources

- [Google Cast Web Receiver Documentation](https://developers.google.com/cast/docs/web_receiver/basic?hl=en)
- [Vite Documentation](https://vitejs.dev/)
- [AWS CDK Documentation](https://docs.aws.amazon.com/cdk/)
- [Yarn Workspaces Documentation](https://yarnpkg.com/features/workspaces)
