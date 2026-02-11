# Cloudflare Pages Configuration

## Build Settings

- **Framework preset**: None (or Next.js if available)
- **Build command**: `pnpm run build` (or `npm run build` if not using pnpm)
- **Build output directory**: `out` ⚠️ **CRITICAL: Must be exactly `out`**
- **Root directory**: (leave empty or set to `/`)
- **Deploy command**: `echo "deploy"` (if required)
- **Non-production branch deploy command**: (leave empty)

## Environment Variables

Add these in Cloudflare Pages → Settings → Environment Variables:

- `NEXT_PUBLIC_RESEND_API_KEY`: Your Resend API key

## Important Notes

1. **CRITICAL**: The **Build output directory** MUST be set to `out` (not `.next`, not `/`, not empty)
2. **CRITICAL**: `trailingSlash: true` is configured in `next.config.mjs` to generate folders (`/about/index.html`) instead of files (`about.html`) for proper Cloudflare Pages routing
3. Make sure the **Root directory** field in Cloudflare Pages settings is **empty** or set to `/`
4. The project must have at least one commit in the repository
5. Ensure `package.json` is in the root of the repository
6. The build script automatically:
   - Cleans `.next` and `out` directories **before** building (prebuild)
   - Removes `.next` directory **after** building (postbuild) to prevent Cloudflare from validating it
7. **Routing**: With `trailingSlash: true`, routes will be:
   - `/` → `out/index.html` ✅
   - `/about/` → `out/about/index.html` ✅
   - `/blogs/` → `out/blogs/index.html` ✅
   - `/contact/` → `out/contact/index.html` ✅
   - `/projects/` → `out/projects/index.html` ✅
8. **If you get 404 errors**: 
   - Verify "Build output directory" is set to `out` (not `.next` or root)
   - Check that `out/index.html` exists after build
   - Ensure `trailingSlash: true` is in `next.config.mjs`
   - Redeploy after making changes

## Verification

After build, verify the structure:
```
out/
├── index.html          ✅ Home page
├── about/
│   └── index.html      ✅ About page
├── blogs/
│   └── index.html      ✅ Blogs page
├── contact/
│   └── index.html      ✅ Contact page
└── projects/
    └── index.html      ✅ Projects page
```
