# NPM Token Setup Checklist

## ✅ Verify Your NPM Token

### Step 1: Generate a NEW Token
1. Go to https://www.npmjs.com/settings/tokens
2. Click **"Generate New Token"**
3. Choose type: **"Automation"** ⚠️ (MUST be Automation type)
4. Copy the entire token (it looks like: `npm_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
5. **Save it somewhere safe** - you'll only see it once!

### Step 2: Verify GitHub Secret is Updated
1. Go to: https://github.com/heinhtet8X/hiinformer/settings/secrets/actions
2. Look for the `NPM_TOKEN` secret
3. Click on it and click **"Update"**
4. Paste your NEW token from Step 1
5. Click **"Update secret"**

### Step 3: Verify in Terminal (Optional)
```bash
npm whoami --registry https://registry.npmjs.org/
```

### Step 4: Verify Package Ownership
Go to: https://www.npmjs.com/package/hiinformer
- Check if you're listed as a collaborator
- If not, you may need to be added to the package

### Step 5: Re-trigger the Workflow
```bash
git tag -d v1.0.3
git push origin :refs/tags/v1.0.3
git tag v1.0.3
git push origin v1.0.3
```

Then check: https://github.com/heinhtet8X/hiinformer/actions

## ⚠️ Common Issues

### Issue: "Access token expired or revoked"
- **Solution**: Generate a NEW token with "Automation" type
- Old tokens may have expired
- Make sure it's "Automation" type, not "Read-only"

### Issue: "404 Not Found"
- **Solution**: Verify you have permission to publish to `hiinformer`
- Go to https://www.npmjs.com/package/hiinformer/access
- Check if your account is listed

### Issue: Token still not working
- Try logging in locally first:
  ```bash
  npm login --registry https://registry.npmjs.org/
  ```
- Then manually test publish:
  ```bash
  npm publish --access public
  ```

## 🔍 Debug the Workflow

1. Go to: https://github.com/heinhtet8X/hiinformer/actions
2. Click the failed workflow run
3. Expand **"Publish to NPM"** step
4. Look for the error message
5. Common errors to look for:
   - "Access token expired or revoked" → Get new token
   - "402 Payment Required" → Check npm account status
   - "403 Forbidden" → Check package permissions
   - "404 Not Found" → Check package exists and you own it
