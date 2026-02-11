# Cloudflare Pages Configuration

## Build Settings

- **Framework preset**: None (or Next.js if available)
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: (leave empty or set to `/`)

## Environment Variables

Add these in Cloudflare Pages → Settings → Environment Variables:

- `NEXT_PUBLIC_RESEND_API_KEY`: Your Resend API key

## Important Notes

1. Make sure the **Root directory** field in Cloudflare Pages settings is **empty** or set to `/` (not `/3D_Interactive_Portfolio` or any subdirectory)
2. The project must have at least one commit in the repository
3. Ensure `package.json` is in the root of the repository
4. The build script automatically cleans `.next` and `out` directories before building to prevent cache issues
5. **IMPORTANT**: Make sure Cloudflare Pages is configured to only publish the `out/` directory, not the entire repository root
