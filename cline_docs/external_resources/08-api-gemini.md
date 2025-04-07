# API y Generación de Entrevistas con Gemini AI

## Contenido:

- Configuración de Gemini AI de Google
- Desarrollo de API route handlers en Next.js
- Integración de IA para generar preguntas de entrevista
- Almacenamiento de entrevistas en Firebase
- Despliegue de la aplicación en Vercel

## Configuración de Gemini AI

Para generar preguntas de entrevista personalizadas:

1. Crear una cuenta en [AI Studio](https://aistudio.google.com)
2. Obtener API key de Gemini
3. Guardar la key en `.env.local` como `GOOGLE_GENERATIVE_AI_API_KEY`
4. Instalar el SDK de AI de Vercel y Google:
   ```bash
   npm install ai @ai-sdk/google
   ```

## Desarrollo de API Routes

Se crea un API endpoint en `app/api/vapi/generate/route.ts` con dos funciones:

1. **GET**: Simple respuesta para verificar que la API está funcionando
2. **POST**: Endpoint principal que:
   - Recibe datos del workflow de VAPI (tipo, rol, nivel, stack, userId)
   - Genera preguntas personalizadas usando Gemini AI
   - Almacena la entrevista en Firestore
   - Devuelve confirmación de éxito

## Generación de Preguntas con Gemini

El endpoint POST utiliza el SDK de AI para:

1. Llamar a `generateText` con modelo `gemini-1.0-pro`
2. Pasar un prompt detallado con instrucciones específicas:
   - Rol y nivel de experiencia objetivo
   - Stack tecnológico a cubrir
   - Balance entre preguntas técnicas y de comportamiento
   - Número de preguntas requeridas
   - Formato específico para facilitar la lectura por el asistente de voz

El prompt incluye instrucciones para evitar caracteres problemáticos y seguir un formato específico para que VAPI pueda procesar la respuesta correctamente.

## Almacenamiento en Firebase

Una vez generadas las preguntas:

1. Se parsea la respuesta JSON del modelo
2. Se crea un objeto de entrevista estructurado:
   - ID de usuario
   - Rol, tipo, nivel
   - Stack tecnológico (normalizado como array)
   - Preguntas generadas
   - Estado de finalización
   - Fecha de creación
3. Se almacena en la colección `interviews` de Firestore

## Despliegue en Vercel

Para permitir que VAPI llame al endpoint desde su workflow:

1. Configurar el proyecto en Vercel
2. Transferir todas las variables de entorno
3. Modificar `next.config.js` para ignorar errores de ESLint/TypeScript durante el build
4. Desplegar la aplicación

Este flujo permite que el asistente de voz recopile información del usuario, la envíe a la API, que a su vez utiliza Gemini para generar preguntas personalizadas que se almacenan en Firestore, listas para ser utilizadas en una sesión de entrevista simulada.
