# Página de Entrevista y Sesión Interactiva

## Contenido:

- Implementación de la página dinámica de entrevista
- Reutilización del componente Agent en modo entrevista
- Configuración del entrevistador IA con preguntas generadas
- Integración de rutas dinámicas en Next.js
- Obtención de datos de entrevista desde Firestore

## Estructura de la Página

La página de entrevista (`[id]/page.tsx`) es una ruta dinámica que:

1. Obtiene el ID de entrevista desde los parámetros de la URL
2. Recupera los detalles de la entrevista desde Firestore
3. Muestra información básica de la entrevista (rol, tipo, tecnologías)
4. Presenta el componente Agent configurado para realizar la entrevista

## Obtención de Datos

El flujo de obtención de datos incluye:

```typescript
// Extracción del ID de los parámetros
const { id } = params;

// Obtención de información del usuario actual
const user = await getCurrentUser();

// Recuperación de detalles de la entrevista
const interview = await getInterviewById(id);

// Redirección si la entrevista no existe
if (!interview) {
  redirect("/");
}
```

## Configuración del Componente Agent

El componente Agent se reutiliza pero con diferente configuración:

- `type="interview"` - Para indicar que se está realizando una entrevista, no generándola
- `username={user?.name}` - Nombre del usuario para personalización
- `userId={user?.id}` - ID del usuario para guardar el feedback
- `interviewId={id}` - ID de la entrevista para recuperar preguntas
- `questions={interview.questions}` - Preguntas generadas previamente

## Sistema de Entrevista por Voz

A diferencia del modo de generación, el Agent en modo entrevista:

1. Utiliza un perfil de voz diferente (configurado en `interviewer` desde constants)
2. No usa el workflow de VAPI, sino una configuración directa que incluye:
   - Modelo de lenguaje para respuestas naturales (GPT-4)
   - Voz personalizada con ajustes específicos
   - Transcriptor optimizado para entrevistas
   - Prompt especializado para comportarse como entrevistador profesional

## Formato de Preguntas

Las preguntas son formateadas antes de ser enviadas al entrevistador IA:

```typescript
const formattedQuestions = questions
  .map((question) => `- ${question}`)
  .join("\n");
```

Esta estructura permite al modelo seguir la entrevista de manera ordenada y natural, formulando cada pregunta y respondiendo apropiadamente a las respuestas del usuario.

## Finalización de Entrevista

Al finalizar la entrevista, el componente Agent:

1. Recopila toda la transcripción de la conversación
2. Llama a la función `handleGenerateFeedback`
3. Envía la transcripción a la API para generar feedback detallado
4. Redirecciona al usuario a la página de feedback

Este diseño permite una experiencia de entrevista inmersiva, donde el usuario interactúa de forma natural con un entrevistador IA que formula preguntas específicas para el rol y nivel deseados.
