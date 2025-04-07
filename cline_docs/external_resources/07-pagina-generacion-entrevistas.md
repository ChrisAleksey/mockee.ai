# Página de Generación de Entrevistas

## Contenido:

- Estructura de la página de generación de entrevistas
- Desarrollo del componente Agent para interacción por voz
- Gestión de estados para el flujo de conversación
- Diseño de la interfaz de llamada con IA
- Visualización de transcripciones en tiempo real

## Estructura de la Página

La página de generación de entrevistas (`interview/page.tsx`) es donde el usuario interactúa con el agente IA por voz para crear una entrevista personalizada. Incluye:

- Título principal "Interview Generation"
- Componente `Agent` con su configuración inicial
- Gestión del usuario actual mediante `getCurrentUser()`

## Componente Agent

El componente `Agent.tsx` es reutilizable y maneja toda la interacción con VAPI. Contiene:

1. **Interfaz visual**:

   - Tarjeta del entrevistador IA
   - Tarjeta del usuario
   - Indicador de "hablando" (pulsante)
   - Botones para iniciar/finalizar llamada
   - Área de transcripción en tiempo real

2. **Estados principales**:

   - `isSpeaking`: Indica si el agente está hablando actualmente
   - `callStatus`: Estado actual de la llamada (inactive, connecting, active, finished)
   - `messages`: Array de mensajes intercambiados durante la conversación

3. **Gestión de eventos VAPI**:
   - `onCallStart`: Configura el estado cuando inicia la llamada
   - `onCallEnd`: Maneja el final de la llamada
   - `onMessage`: Captura y almacena transcripciones
   - `onSpeechStart/End`: Controla la animación de "hablando"
   - `onError`: Manejo de errores durante la llamada

## Funciones Principales

1. **handleCall**:

   - Establece el estado en "connecting"
   - Inicia la llamada con VAPI usando el workflow ID configurado
   - Pasa variables de contexto (nombre de usuario, ID)

2. **handleDisconnect**:
   - Finaliza la llamada activa
   - Cambia el estado a "finished"

El componente está diseñado para utilizarse en dos modos diferentes:

- Modo "generate": Para la creación inicial de entrevistas
- Modo "interview": Para realizar la entrevista (se implementará después)

## Visualización de la Transcripción

El componente incluye un área que muestra en tiempo real:

- El último mensaje de la conversación
- Animación de fade-in para nueva transcripción
- Procesamiento del texto capturado por el sistema de voz

Esta implementación permite al usuario interactuar naturalmente con el asistente de voz, expresando sus preferencias sobre tipo de entrevista, rol, nivel de experiencia, tecnologías y cantidad de preguntas, todo sin necesidad de formularios tradicionales.
