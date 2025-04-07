# Generación y Visualización de Feedback de Entrevistas

## Contenido:

- Implementación del sistema de feedback con Gemini AI
- Desarrollo de la página de visualización de feedback
- Estructura del esquema de evaluación
- Almacenamiento de evaluaciones en Firestore
- Actualización de las tarjetas para mostrar resultados

## Generación de Feedback

Al finalizar una entrevista, el sistema genera automáticamente una evaluación mediante:

1. **Creación de la acción del servidor**: `createFeedback`

   - Recibe: ID de entrevista, ID de usuario, transcripción completa
   - Formatea la transcripción para análisis
   - Envía a Gemini AI para evaluación estructurada

2. **Análisis con Gemini AI**:
   - Utiliza `generateObject` en lugar de `generateText`
   - Proporciona un esquema estructurado (definido en constants)
   - Pasa un prompt especializado para análisis de entrevistas
   - Recibe respuesta estructurada según el esquema definido

## Esquema de Evaluación

El feedback incluye múltiples componentes:

```typescript
{
  totalScore: number;  // 0-100
  categoryScores: {
    communicationSkills: { score: number, comment: string },
    technicalKnowledge: { score: number, comment: string },
    problemSolving: { score: number, comment: string },
    culturalFit: { score: number, comment: string },
    confidenceAndClarity: { score: number, comment: string }
  },
  strengths: string[];
  areasForImprovement: string[];
  finalAssessment: string;
}
```

## Almacenamiento del Feedback

La evaluación generada se almacena en Firestore:

1. Colección `feedback` con documentos que incluyen:

   - ID de entrevista (para referencia cruzada)
   - ID de usuario (para identificar al candidato)
   - Todos los componentes del esquema de evaluación
   - Fecha de creación

2. Función `getFeedbackByInterviewId`:
   - Recupera feedback específico para una entrevista y usuario
   - Utilizada en la página de detalles y en las tarjetas

## Página de Visualización de Feedback

La página (`[id]/feedback/page.tsx`) muestra:

1. **Encabezado**:

   - Rol de la entrevista
   - Puntuación total
   - Fecha de la entrevista

2. **Evaluación General**:

   - Texto completo del análisis final
   - Fortalezas identificadas
   - Áreas de mejora

3. **Categorías Detalladas**:

   - Puntuación por categoría (0-100)
   - Comentarios específicos para cada área
   - Visualización gráfica del rendimiento

4. **Acciones**:
   - Botón para volver a realizar la entrevista
   - Botón para regresar al dashboard

## Actualización de Tarjetas de Entrevista

Las tarjetas en la página principal (`InterviewCard.tsx`) se actualizan para:

- Mostrar la puntuación si hay feedback disponible
- Cambiar el botón de "Ver entrevista" a "Ver feedback"
- Mostrar un extracto de la evaluación final
- Enlazar a la página de feedback correspondiente

Esta implementación proporciona un ciclo completo de preparación para entrevistas:

1. Generar entrevista personalizada
2. Realizar la entrevista con el asistente de voz IA
3. Recibir feedback detallado
4. Identificar áreas de mejora
5. Volver a practicar para mejorar las habilidades
