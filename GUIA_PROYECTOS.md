# 📚 Guía para Agregar/Modificar Proyectos

## 📍 Ubicación del archivo
Los proyectos se encuentran en: `src/data/projects.tsx`

## 🗑️ Cómo eliminar proyectos existentes

1. Abre el archivo `src/data/projects.tsx`
2. Busca el array `projects` (alrededor de la línea 237)
3. Elimina los objetos de proyecto que no quieras mostrar
4. Cada proyecto está dentro de llaves `{ }` y separado por comas

**Ejemplo:**
```typescript
const projects: Project[] = [
  {
    id: "proyecto-1",
    // ... datos del proyecto
  },
  // ELIMINA ESTE PROYECTO:
  // {
  //   id: "proyecto-viejo",
  //   ...
  // },
  {
    id: "proyecto-2",
    // ... datos del proyecto
  },
];
```

## ➕ Cómo agregar un nuevo proyecto

### Estructura básica de un proyecto:

```typescript
{
  id: "nombre-unico-del-proyecto",  // Sin espacios, usar guiones
  category: "Categoría",            // Ej: "Web App", "API", "Mobile App"
  title: "Nombre del Proyecto",
  src: "/assets/projects-screenshots/tu-proyecto/landing.png",  // Imagen principal
  screenshots: ["1.png", "2.png"],  // Array de screenshots
  live: "https://tu-proyecto.com",   // URL del proyecto en vivo
  github: "https://github.com/tu-usuario/tu-repo",  // Opcional
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next],  // Skills frontend
    backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.postgres], // Skills backend
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          Descripción corta del proyecto
        </TypographyP>
        <TypographyP className="font-mono">
          Descripción más detallada del proyecto...
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        
        {/* Secciones adicionales */}
        <TypographyH3 className="my-4 mt-8">Características</TypographyH3>
        <p className="font-mono mb-2">
          Descripción de las características...
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/tu-proyecto/screenshot1.png`,
            `${BASE_PATH}/tu-proyecto/screenshot2.png`,
          ]}
        />
      </div>
    );
  },
}
```

### Pasos detallados:

1. **Prepara las imágenes:**
   - Crea una carpeta en `public/assets/projects-screenshots/tu-proyecto/`
   - Agrega una imagen principal llamada `landing.png` (o el nombre que prefieras)
   - Agrega screenshots adicionales si los tienes

2. **Agrega el proyecto al array:**
   - Abre `src/data/projects.tsx`
   - Encuentra el array `projects` (línea ~237)
   - Agrega tu nuevo objeto de proyecto al final (antes del `];`)

3. **Skills disponibles:**
   Las skills están definidas en `PROJECT_SKILLS` (línea ~70). Puedes usar:
   - `PROJECT_SKILLS.next` - Next.js
   - `PROJECT_SKILLS.react` - React
   - `PROJECT_SKILLS.node` - Node.js
   - `PROJECT_SKILLS.python` - Python
   - `PROJECT_SKILLS.postgres` - PostgreSQL
   - `PROJECT_SKILLS.mongodb` - MongoDB
   - `PROJECT_SKILLS.express` - Express
   - `PROJECT_SKILLS.typescript` - TypeScript
   - Y más... revisa el archivo para ver todas las opciones

### Ejemplo completo:

```typescript
{
  id: "mi-api-rest",
  category: "Backend API",
  title: "Mi API REST",
  src: "/assets/projects-screenshots/mi-api/landing.png",
  screenshots: ["1.png", "2.png"],
  live: "https://mi-api.vercel.app",
  github: "https://github.com/jamilwilliams/mi-api",
  skills: {
    frontend: [],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.postgres,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono text-2xl text-center">
          API REST construida con Node.js y Express
        </TypographyP>
        <TypographyP className="font-mono">
          Una API robusta que permite gestionar usuarios, productos y pedidos.
          Incluye autenticación JWT, validación de datos y documentación con Swagger.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        
        <TypographyH3 className="my-4 mt-8">Endpoints Principales</TypographyH3>
        <p className="font-mono mb-2">
          La API incluye endpoints para CRUD completo de recursos principales.
        </p>
        <SlideShow
          images={[
            `${BASE_PATH}/mi-api/endpoints.png`,
            `${BASE_PATH}/mi-api/auth.png`,
          ]}
        />
      </div>
    );
  },
}
```

## 📝 Notas importantes:

- **ID único:** Cada proyecto debe tener un `id` único
- **Imágenes:** Las imágenes deben estar en `public/assets/projects-screenshots/`
- **Skills:** Usa las skills definidas en `PROJECT_SKILLS` o agrega nuevas si es necesario
- **Content:** El método `get content()` retorna JSX que se muestra en el modal del proyecto
- **Screenshots:** El array `screenshots` debe contener solo los nombres de archivo, no rutas completas

## 🎨 Componentes disponibles en el content:

- `<TypographyP>` - Párrafo con estilo
- `<TypographyH3>` - Título de sección
- `<ProjectsLinks>` - Botones de "Visit Website" y "Github"
- `<SlideShow>` - Carrusel de imágenes

¡Listo! Ahora puedes personalizar tus proyectos fácilmente. 🚀
