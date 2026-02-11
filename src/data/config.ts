const config = {
  title: "Jamil Williams | Estudiante de Desarrollo de Software",
  description: {
    long: "Explora el portafolio de Jamil Williams, estudiante de desarrollo de software apasionado por crear experiencias web interactivas, animaciones 3D y proyectos innovadores. ¡Construyamos algo increíble juntos!",
    short:
      "Descubre el portafolio de Jamil Williams, estudiante de desarrollo de software creando experiencias web interactivas y proyectos innovadores.",
  },
  keywords: [
    "Jamil Williams",
    "portfolio",
    "estudiante de desarrollo de software",
    "desarrollo web",
    "animaciones 3D",
    "sitios web interactivos",
    "diseño web",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Jamil Williams",
  email: "jamilwilliams054@gmail.com",
  site: "https://jamilwilliams.dev",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/jamil-williams-ba22b1161",
    instagram: "",
    facebook: "",
    github: "",
  },
};
export { config };
