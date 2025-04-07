# Configuración Inicial del Proyecto Next.js

## Contenido:

- Creación del proyecto Next.js
- Configuración inicial y dependencias
- Estructura de archivos y limpieza inicial
- Descarga e implementación de recursos del kit de diseño
- Configuración del CSS global

## Creación del Proyecto

Para iniciar el proyecto, se debe:

1. Crear una carpeta para el proyecto (ej: "JSM mock interview platform")
2. Abrir la carpeta en el editor de código preferido
3. Ejecutar desde la terminal: `npx create-next-app@latest ./`
4. Seleccionar las siguientes opciones:
   - TypeScript: Sí
   - ESLint: Sí
   - Tailwind CSS: Sí
   - No usar directorio `/src`
   - Usar App Router: Sí
   - Usar Turbo pack: Sí
   - No personalizar alias de importación

## Limpieza Inicial

Una vez creado el proyecto, se realizan las siguientes limpiezas:

1. Eliminar el favicon
2. Simplificar `global.css` dejando solo la importación de Tailwind
3. Reemplazar el archivo page.tsx con un componente básico usando `rafc` (React Arrow Function Component)
4. Modificar el layout principal:
   - Cambiar las fuentes por Mona Sans (desde next/font/google)
   - Actualizar los metadatos (título "Prep Wise" y descripción)
   - Establecer el tema permanentemente en modo oscuro con `className="dark"`
   - Configurar la fuente Mona Sans como global

## Instalación de Shadcn

Para agregar componentes reutilizables:

1. Ejecutar: `npx shadcn-ui@latest init`
2. Seleccionar color base: neutral
3. Para problemas de dependencias con React 19, usar "Legacy peer deps"

## Descarga de Recursos

Del kit de video proporcionado:

1. Descargar y extraer los recursos
2. Crear una carpeta `/public` en la raíz
3. Copiar los iconos y recursos visuales desde el kit
4. Añadir carpetas `/constants` y `/types` a la raíz
5. Comentar temporalmente el archivo de constantes para evitar errores

Una vez completada esta configuración inicial, el proyecto está listo para comenzar a desarrollar las rutas y componentes específicos de la aplicación.
