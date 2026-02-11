# Cloudflare Pages Configuration

## Build Settings

- **Framework preset**: None (or Next.js if available)
- **Build command**: `npm run build`
- **Build output directory**: `out` ⚠️ **CRITICAL: Must be exactly `out`**
- **Root directory**: (leave empty or set to `/`)

## Environment Variables

Add these in Cloudflare Pages → Settings → Environment Variables:

- `NEXT_PUBLIC_RESEND_API_KEY`: Your Resend API key

## Important Notes

1. **CRITICAL**: The **Build output directory** MUST be set to `out` (not `.next`, not `/`, not empty)
2. Make sure the **Root directory** field in Cloudflare Pages settings is **empty** or set to `/`
3. The project must have at least one commit in the repository
4. Ensure `package.json` is in the root of the repository
5. The build script automatically:
   - Cleans `.next` and `out` directories **before** building (prebuild)
   - Removes `.next` directory **after** building (postbuild) to prevent Cloudflare from validating it
6. **If you still get the error**: Double-check that "Build output directory" is set to `out` and not `.next` or root
