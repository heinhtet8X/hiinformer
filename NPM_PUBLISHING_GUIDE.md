# NPM Publishing Guide

This guide explains how to set up and use the CI/CD pipeline to publish your package to npm.

## Files Created

### 1. `.npmrc` - NPM Configuration
```
registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
always-auth=true
```

This file configures npm to use your authentication token for publishing.

### 2. `.github/workflows/publish-npm.yml` - GitHub Actions Workflow
Automated workflow that publishes to npm when you create a git tag.

## Setup Instructions

### Step 1: Generate NPM Token

1. Go to [https://www.npmjs.com/settings/tokens](https://www.npmjs.com/settings/tokens)
2. Click **"Generate New Token"**
3. Select **"Automation"** type (important for CI/CD)
4. Copy the token (you'll need it in the next step)

### Step 2: Add NPM Token to GitHub Secrets

1. Go to your repository: https://github.com/heinhtet8X/hiinformer
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `NPM_TOKEN`
5. Value: Paste your npm token from Step 1
6. Click **"Add secret"**

### Step 3: Verify Your Package Configuration

Check that `package.json` is correctly set up:

```json
{
  "name": "hiinformer",
  "version": "1.0.2-beta",
  "description": "...",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": ["dist"]
}
```

✅ Your package.json is already correctly configured!

## Publishing Your Package

### Method 1: Using Git Tags (Recommended - Automated)

1. **Build your package:**
   ```bash
   npm run build
   ```

2. **Create a git tag:**
   ```bash
   git tag v1.0.2
   git push origin v1.0.2
   ```

3. **The GitHub Actions workflow will automatically:**
   - Checkout your code
   - Install dependencies
   - Build the package
   - Publish to npm

### Method 2: Manual Publishing (Local Machine)

1. **Make sure you're logged in to npm:**
   ```bash
   npm login
   ```

2. **Update version in package.json:**
   ```bash
   npm version patch  # or minor, major
   ```

3. **Build the package:**
   ```bash
   npm run build
   ```

4. **Publish to npm:**
   ```bash
   npm publish --access public
   ```

## Troubleshooting 403 Error

### Common Causes and Solutions

#### 1. **Invalid or Missing Token**
- ✓ Re-generate your npm token
- ✓ Verify the token is set in GitHub Secrets as `NPM_TOKEN`
- ✓ Make sure token has "Automation" type access

#### 2. **Registry Authentication Issue**
- ✓ Check `.npmrc` has correct registry URL
- ✓ Verify `always-auth=true` is set
- ✓ Check `NODE_AUTH_TOKEN` is properly passed in workflow

#### 3. **Package Name Already Exists**
- ✓ Check if package `hiinformer` already exists on npm
- ✓ If it exists, ensure your account has permission to publish
- ✓ If needed, add your account as a collaborator

#### 4. **Scope or Organization Issues**
- ✓ If using scoped packages like `@username/package`, update `package.json`
- ✓ Ensure you have access to the scope

#### 5. **Version Already Published**
- ✓ Increment the version in `package.json`
- ✓ Don't publish the same version twice

## Workflow Triggers

The workflow is triggered when you:
- Push a git tag starting with `v` (e.g., `v1.0.2`, `v1.0.3-beta`)

Example:
```bash
git tag v1.0.2
git push origin v1.0.2
```

## Verify Published Package

After successful publishing, verify your package on npm:

```
https://www.npmjs.com/package/hiinformer
```

Or install and test:
```bash
npm install hiinformer
```

## Important Notes

- 🔐 **Never commit your npm token** to version control
- 🔐 GitHub Secrets are encrypted and safe to use
- ✅ The `.npmrc` file is safe to commit (it uses `${NPM_TOKEN}` variable)
- 📦 Always run `npm run build` before publishing
- 🏷️ Use semantic versioning (MAJOR.MINOR.PATCH)

## Version Meanings

- **PATCH** (1.0.2 → 1.0.3): Bug fixes
- **MINOR** (1.0.2 → 1.1.0): New features (backward compatible)
- **MAJOR** (1.0.2 → 2.0.0): Breaking changes

## Update Workflow

For future releases:
1. Make changes to your code
2. Update `package.json` version
3. Create git tag: `git tag vX.Y.Z`
4. Push tag: `git push origin vX.Y.Z`
5. GitHub Actions will automatically build and publish

That's it! No manual npm publish needed.
