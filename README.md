# 🚀 My Portfolio Website

Welcome to the repository for my personal portfolio website! This is where I showcase my skills, projects, and a bit of my personality through jaw-dropping 3D animations, slick interactions, and fluid motion. If you're into creative web design, you're in the right place.

## 🔥 Features

- **3D Animations**: Custom-made interactive keyboard using Spline with skills as keycaps that reveal titles and descriptions on hover.
- **Slick Interactions**: Powered by GSAP and Framer Motion for smooth animations on scroll, hover, and element reveal.
- **Space Theme**: Particles on a dark background to simulate a cosmic environment, making the experience out of this world.
- **Responsive Design**: Fully responsive across all devices to ensure the best user experience.
- **Innovative Web Design**: Combining creativity with functionality to push the boundaries of modern web design.

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Shadcn, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Misc**: Resend, Socketio, Zod

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone <your-repo-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd Portfolio
    ```

3. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the magic!

## 🚀 Deployment

### Cloudflare Pages

This site is configured for static export and can be deployed on Cloudflare Pages:

1. **Build Configuration:**
   - Build command: `npm run build`
   - Deploy command: (leave empty)
   - Output directory: `out`

2. **Environment Variables:**
   Add the following environment variable in Cloudflare Pages settings:
   - `NEXT_PUBLIC_RESEND_API_KEY`: Your Resend API key (for contact form)

3. **Deployment Steps:**
   - Push your code to a GitHub repository
   - Connect your repository to Cloudflare Pages
   - Configure the build settings as shown above
   - Add the environment variable
   - Deploy!

**Note:** The project uses static export (`output: "export"` in `next.config.mjs`), which generates a static site in the `out/` folder. API routes are not supported with static export, so the contact form uses Resend API directly from the client.

### Local Build Test

Before deploying, test the build locally:

```bash
npm run build
```

Verify that the `out/` folder is created successfully.

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
