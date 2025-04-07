# Configuración de Firebase y Autenticación

## Contenido:

- Introducción a Firebase como backend
- Configuración inicial del proyecto Firebase
- Implementación de Firebase Admin SDK y Cliente
- Desarrollo de las acciones del servidor para autenticación
- Protección de rutas basada en estado de autenticación

## Introducción a Firebase

Firebase es una plataforma de backend-as-a-service que proporciona:

- Autenticación de usuarios
- Base de datos en tiempo real
- Almacenamiento
- Funciones en la nube

El proyecto utiliza dos SDKs de Firebase:

- **Admin SDK**: Para operaciones seguras del lado del servidor
- **Cliente SDK**: Para interacciones directas desde la aplicación web

## Configuración Inicial de Firebase

Pasos para configurar Firebase:

1. Crear cuenta en [firebase.com](https://firebase.com)
2. Crear nuevo proyecto ("prep wise")
3. Habilitar Google Analytics (opcional)
4. Configurar autenticación:
   - Activar proveedor de email/contraseña
5. Crear base de datos Firestore en modo producción
6. Registrar la aplicación web y obtener credenciales

## Implementación de Firebase en el Proyecto

### Configuración Cliente

1. Instalar dependencia: `npm install firebase`
2. Crear carpeta `firebase` en la raíz del proyecto
3. Crear archivo `client.ts` con la inicialización:
   - Importar funciones de Firebase
   - Inicializar app solo una vez
   - Exportar funciones de autenticación y firestore

### Configuración Admin SDK

1. Instalar dependencia: `npm install firebase-admin --save`
2. Crear archivo `admin.ts` en la carpeta firebase
3. Implementar inicialización segura con variables de entorno
4. Configurar variables de entorno en `.env.local`:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_PRIVATE_KEY`
   - `FIREBASE_CLIENT_EMAIL`

## Acciones del Servidor para Autenticación

Se implementan tres funciones principales:

1. **signUp**: Registrar nuevos usuarios

   - Crea usuario en Firebase Authentication
   - Almacena datos adicionales en Firestore

2. **signIn**: Autenticar usuarios existentes

   - Verifica credenciales
   - Genera token de sesión
   - Establece cookie segura

3. **setSessionCookie**: Manejar persistencia de sesión
   - Crea cookie HTTP-only segura
   - Configura tiempo de expiración
   - Establece opciones de seguridad

## Protección de Rutas

Para asegurar que solo usuarios autenticados accedan a ciertas partes:

1. Función `getCurrentUser`: Verifica si hay sesión activa
2. Función `isAuthenticated`: Retorna boolean basado en estado de autenticación
3. Middlewares en layouts:
   - Root layout: Redirecciona a login si no hay autenticación
   - Auth layout: Redirecciona a homepage si ya está autenticado

Esta implementación proporciona un sistema de autenticación seguro y completo, protegiendo adecuadamente las rutas de la aplicación.
