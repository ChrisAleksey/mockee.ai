# Página Principal y Tarjetas de Entrevista

## Contenido:

- Desarrollo de la estructura de la página principal
- Implementación del componente InterviewCard
- Creación de componentes de iconos tecnológicos
- Formateo de fechas con Day.js
- Integración de datos simulados para desarrollo

## Estructura de la Página Principal

La página principal del proyecto contiene:

1. **Sección de llamada a la acción (CTA)**:

   - Título principal y descripción
   - Botón "Start an Interview" que enlaza a la página de creación
   - Imagen robot en dispositivos grandes

2. **Sección "Your Interviews"**:

   - Muestra entrevistas que el usuario ha creado/tomado
   - Estado vacío para nuevos usuarios

3. **Sección "Take an Interview"**:
   - Muestra entrevistas creadas por otros usuarios
   - Acceso rápido a entrevistas disponibles

## Componente InterviewCard

Cada entrevista se muestra mediante un componente `InterviewCard.tsx` que incluye:

- **Badge** de tipo (Técnica/Mixta/Comportamental)
- **Imagen** de perfil de empresa (generada aleatoriamente)
- **Título** con el rol y tipo de entrevista
- **Metadatos**:
  - Fecha de creación (formateada con Day.js)
  - Puntuación (si la entrevista ya ha sido realizada)
- **Descripción** breve o feedback
- **Iconos** de tecnologías relevantes
- **Botón** para ver la entrevista o su feedback

## Implementación de Iconos Tecnológicos

Se crea un componente `DisplayTechIcons.tsx` que:

- Recibe un array de tecnologías desde las props
- Normaliza los nombres (elimina espacios, caracteres especiales)
- Busca los iconos correspondientes en DevIcon
- Muestra tooltip con el nombre al pasar el cursor
- Aplica estilo de superposición para múltiples iconos

## Integración de Datos de Prueba

Para el desarrollo inicial, se utilizan:

- Array de entrevistas simuladas desde `constants/index.ts`
- Función `getRandomInterviewCover()` para imágenes de compañía
- Mapeo de tecnologías a iconos desde la biblioteca DevIcon
- Formato de fechas con Day.js para presentación más amigable

Esta implementación de la página principal establece el punto central de la aplicación, desde donde los usuarios pueden ver sus entrevistas existentes, tomar nuevas entrevistas, o crear entrevistas personalizadas.
