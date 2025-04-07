# Estructura de Rutas y Páginas de Autenticación

## Contenido:

- Configuración de grupos de rutas en Next.js
- Estructura de carpetas para autenticación
- Implementación de layouts específicos
- Desarrollo del componente AuthForm
- Integración de validación con Zod y React Hook Form

## Configuración de Rutas

En Next.js, la estructura de carpetas define las rutas. El proyecto usa grupos de rutas (route groups) que permiten:

- Organizar las rutas sin afectar la URL
- Implementar layouts específicos para diferentes secciones
- Prevenir colisiones de rutas

Se implementan dos grupos principales:

1. `(auth)` - Para las páginas de autenticación (sin navbar)
2. `(root)` - Para las páginas principales (con navbar)

## Estructura de Carpetas

```
app/
├── (auth)/
│   ├── layout.tsx
│   ├── sign-in/
│   │   └── page.tsx
│   └── sign-up/
│       └── page.tsx
├── (root)/
│   ├── layout.tsx
│   ├── page.tsx
│   └── interview/
│       └── page.tsx
└── globals.css
```

## Implementación de Layouts

Cada grupo de rutas tiene su propio layout:

1. **Auth Layout**:

   - Centrado vertical y horizontal
   - Sin navbar
   - Aplicación del fondo común

2. **Root Layout**:
   - Incluye navbar con logo
   - Mantiene estructura común para todas las páginas principales

## Componente AuthForm

Se crea un componente reutilizable `AuthForm.tsx` que:

- Funciona tanto para registro como para inicio de sesión
- Renderiza campos diferentes según el tipo (sign-in/sign-up)
- Utiliza React Hook Form para gestionar el formulario
- Implementa validación con Zod
- Incluye mensajes de error y éxito con toast notifications (Sonner)

## Implementación de Campos de Formulario

Se crea un componente `FormField.tsx` que:

- Utiliza controller de React Hook Form
- Es genérico para diferentes tipos de inputs (text, email, password)
- Aplica estilos consistentes de Shadcn
- Muestra errores de validación de forma clara

La funcionalidad construida permite navegar entre las páginas de registro e inicio de sesión, con validación de campos y UI consistente en toda la aplicación.
