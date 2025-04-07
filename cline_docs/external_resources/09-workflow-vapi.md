# Configuración del Workflow VAPI para Entrevistas

## Contenido:

- Diseño del workflow de conversación en VAPI
- Configuración de nodos para recopilación de datos
- Integración con API para generación de entrevistas
- Personalización de la voz del asistente
- Implementación del workflow en la aplicación

## Diseño del Workflow

VAPI utiliza workflows para estructurar conversaciones como una serie de pasos o nodos. Para la aplicación de entrevistas, se diseña un workflow que:

1. Saluda al usuario
2. Recopila información sobre la entrevista deseada
3. Realiza una llamada a la API para generar la entrevista
4. Confirma la creación exitosa

## Nodos del Workflow

El workflow se construye con varios tipos de nodos:

### 1. Nodo Inicial (Say)

- Texto: "Hello {{username}}, let's prepare your interview. I'll ask you a few questions and generate a perfect interview just for you. Are you ready?"
- Tipo: Prompt (permite variaciones naturales)
- Función: Establecer contexto y comenzar la conversación

### 2. Nodo de Recopilación (Gather)

Se configura para recopilar cinco variables clave:

- `role`: "What role would you like to train for?"
- `type`: "Are you aiming for a technical, behavioral, or mixed interview?"
- `level`: "What job experience level are you targeting?"
- `techstack`: "List of technologies to cover during the interview"
- `amount`: "How many questions would you like me to prepare for you?"

Cada variable se marca como requerida y se añade una descripción para ayudar al asistente a formular preguntas naturales.

### 3. Nodo de API Request

- Método: POST
- URL: [URL de la aplicación desplegada]/api/vapi/generate
- Body: JSON con todas las variables recopiladas
- Variables enviadas:
  - role, type, level, techstack, amount, userId

### 4. Nodo Final (Say)

- Texto: "The interview has been generated. Thank you for using our service."
- Tipo: Prompt
- Acción final: Hang Up (terminar la llamada)

## Personalización del Asistente

En el dashboard de VAPI, se puede personalizar:

- Voz del asistente (se elige "Lily" por su tono amigable y energético)
- Back channeling (activado para que el bot use muletillas como "mm-hmm", "I see")
- Sonido de fondo (opcional, se puede activar ambiente de oficina)
- Parámetros de voz (velocidad, positivity, temperatura)

## Integración con la Aplicación

Para usar el workflow desde la aplicación:

1. Copiar el ID del asistente configurado
2. Añadirlo al `.env.local` como `NEXT_PUBLIC_VAPI_WORKFLOW_ID`
3. Añadir `NEXT_PUBLIC_BASE_URL` con la URL de la aplicación desplegada
4. Actualizar las variables de entorno en Vercel y redesplegar

El componente `Agent.tsx` utiliza estas variables para iniciar la conversación con el workflow configurado cuando el usuario hace clic en "Call".

Este workflow permite una experiencia de usuario natural donde puede describir sus necesidades en lenguaje conversacional en lugar de rellenar formularios, creando una experiencia más inmersiva y eficiente.
