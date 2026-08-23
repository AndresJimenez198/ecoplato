# EcoPlato · Documento de Formulación

*"Comida que conecta, acciones que alimentan"*

**Proyecto Integrador**

| Campo | Detalle |
|---|---|
| Programa | Técnico Laboral como Asistente en Desarrollo de Software |
| Institución | Cesde — Escuela de Nuevas Tecnologías, Medellín |
| Submódulo | Introducción a la Programación |
| Nivel | Nivel 1 |
| Periodo académico | 2026-2 |
| Docente | Yarleyda Borja Borja |
| Fecha de actualización | 22 de agosto de 2026 |
| Momento de evidencia | Primer Momento |

---

## Integrantes del equipo

| # | Nombre completo | Documento de identidad |
|---|---|---|
| 1 | Juan Sebastián Venegas | 1.037.608.335 |
| 2 | Santiago Agudelo Ceballos | 1.001.032.321 |
| 3 | Andrés Mauricio Jiménez Rodríguez | 15.371.198 |

El equipo trabaja de forma colaborativa, con distribución del desarrollo por
componentes y apoyo mutuo en el aprendizaje de las herramientas.

---

## 1. Planteamiento del problema

Los restaurantes generan excedentes de alimentos aptos para el consumo humano
de forma recurrente y predecible. Sin embargo, los gestionan de manera
reactiva y tardía: cuando el excedente ya existe, la ventana de
aprovechamiento se reduce a pocas horas y la coordinación con comedores
comunitarios depende de llamadas, mensajes informales y disponibilidad
fortuita.

El resultado es doble. Por un lado, alimento en buen estado que termina en la
basura. Por el otro, comedores comunitarios que no pueden planear su menú
porque desconocen qué recibirán y cuándo.

**El problema no es la ausencia de un canal de comunicación. Los canales
existen. El problema es que todos operan después de que el excedente ya
ocurrió.**

---

## 2. Objetivos

### Objetivo general

Desarrollar una plataforma web que anticipe y asigne excedentes alimentarios
de restaurantes hacia comedores comunitarios, reduciendo el desperdicio de
alimentos y permitiendo a los receptores planear su operación con antelación.

### Objetivos específicos

1. Diseñar una interfaz que permita a un restaurante registrar excedentes
   disponibles junto con su ventana de perecibilidad.
2. Diseñar un panel que permita a un comedor comunitario consultar la
   disponibilidad prevista y confirmar la recogida.
3. Construir un panel de indicadores que mida el impacto real de la
   operación, incluyendo sus fallos.
4. Aplicar control de versiones con Git durante todo el desarrollo del
   proyecto.
5. Escalar el prototipo hacia una aplicación funcional conforme avance el
   programa académico.

---

## 3. Análisis de soluciones existentes

Se realizó una revisión de plataformas que abordan el desperdicio
alimentario, tanto a nivel internacional como en el mercado colombiano.

| Plataforma | Origen | Modelo de operación | Limitación frente a la propuesta |
|---|---|---|---|
| **Too Good To Go** | Dinamarca | Venta de paquetes sorpresa de excedente a consumidores finales a precio reducido | Es comercio, no donación. El beneficiario es un cliente que paga, no población vulnerable |
| **Olio** | Reino Unido | Intercambio comunitario de alimentos entre vecinos | Opera persona a persona, sin estructura institucional ni trazabilidad |
| **EatCloud** | Colombia | Anuncio de donaciones canalizadas a través de ABACO y su red de bancos de alimentos, con certificado de donación tributario | Competidor directo en el mercado objetivo. Modelo reactivo: opera cuando el excedente ya existe |
| **Red ABACO** | Colombia | Red logística nacional de bancos de alimentos presente en 26 territorios | Infraestructura consolidada que opera por volumen y programación, no por excedente diario de restaurante |

### Hallazgo central

**El espacio de "conectar restaurantes con fundaciones" ya se encuentra
ocupado en Colombia por EatCloud, respaldado por la red nacional de bancos de
alimentos ABACO. Plantear EcoPlato únicamente como un canal de comunicación
no constituiría un aporte diferencial.**

Reconocer este hallazgo no debilita el proyecto: lo obliga a competir donde
efectivamente existe un vacío.

### El vacío identificado

Todas las soluciones revisadas son reactivas. El excedente se publica cuando
ya ocurrió, y a partir de ese momento corre un reloj de perecibilidad que
nadie controla. Ninguna anticipa el excedente, ninguna optimiza su asignación
bajo restricciones, y ninguna publica su tasa de fracaso.

---

## 4. Aporte diferencial de EcoPlato

EcoPlato se posiciona como un motor de anticipación y asignación, no como un
tablón de anuncios de excedentes.

### 4.1 Pronóstico de excedente

El excedente de un restaurante no es aleatorio: responde a patrones de día de
la semana, quincena, condiciones climáticas y eventos locales. Con histórico
suficiente puede estimarse antes de que ocurra.

**Valor:** el comedor comunitario planea su menú con antelación en lugar de
improvisar sobre lo que aparezca.

### 4.2 Emparejamiento con restricciones

La asignación no se realiza por orden de llegada, sino considerando la
capacidad del comedor, la distancia, la ventana de perecibilidad y el tipo de
alimento.

**Valor:** menos alimento perdido en tránsito y menos donaciones que el
receptor no puede procesar.

### 4.3 Panel de impacto con métricas de fracaso

| Indicador | Qué mide |
|---|---|
| Kilogramos rescatados | Volumen total de alimento gestionado |
| Porciones equivalentes | Traducción del volumen a impacto humano |
| Tasa de emparejamiento | Porcentaje de excedentes que encontraron destino |
| Tiempo medio de recogida | Eficiencia logística de la operación |
| **Donaciones no recogidas** | **Porcentaje de excedentes publicados que nadie reclamó** |

El último indicador es deliberado. Ninguna de las plataformas revisadas
expone su tasa de fracaso. Medirla es condición necesaria para reducirla, y
constituye un compromiso de transparencia que ninguna alternativa asume
actualmente.

### Posicionamiento

> **EcoPlato no publica excedentes: los anticipa y los asigna.**

---

## 5. Alcance por nivel académico

El proyecto se construye con las tecnologías que el programa enseña, en el
orden en que las enseña. Esta restricción es deliberada y garantiza la
viabilidad de cada entrega.

| Nivel | Tecnologías disponibles | Entregable |
|---|---|---|
| **Nivel 1** | HTML5 y CSS3 | Prototipo navegable con estilos: registro de excedente, panel de comedor y panel de impacto con datos de ejemplo |
| **Nivel 2** | JavaScript, backend y base de datos | Aplicación funcional con registro real, emparejamiento operativo e indicadores calculados |
| **Nivel 3** | Frameworks de frontend y backend | Módulo de pronóstico, optimización de la asignación y despliegue en producción |

**Criterio de viabilidad:** el prototipo del Nivel 1 debe comunicar la
propuesta completa sin necesidad de servidor. Las pantallas estáticas cuentan
la historia; los niveles siguientes la hacen funcionar.

---

## 6. Identidad de marca

| Color | Código | Significado |
|---|---|---|
| Verde Eco | `#2E7D32` | Sustentabilidad, frescura y compromiso ecológico |
| Naranja Alerta | `#EF6C00` | Dinamismo, apetito y urgencia de actuar |
| Blanco Puro | `#FFFFFF` | Transparencia, higiene y claridad institucional |

**Misión:** conectar la industria gastronómica con comunidades vulnerables
mediante herramientas tecnológicas que optimicen la redistribución de
excedentes alimentarios, reduciendo el hambre y el impacto ambiental.

**Visión:** ser la plataforma de referencia en gestión anticipada de
redistribución de alimentos en Colombia hacia el año 2030.

**Valores:** solidaridad social, sostenibilidad ambiental, responsabilidad
logística y transparencia de impacto, incluida la transparencia sobre los
propios fallos del sistema.

---

## 7. Metodología de trabajo del equipo

El equipo adopta un esquema de trabajo colaborativo, con el desarrollo
distribuido por componentes y control de versiones centralizado en un
repositorio público de GitHub. Cada integrante asume un componente completo y
trabaja sobre archivos independientes, lo que minimiza los conflictos de
integración y permite que todos registren avances de forma paralela.

| Componente | Alcance |
|---|---|
| Pantalla de presentación | Estructura semántica del sitio, navegación entre pantallas y exposición de la propuesta de valor |
| Pantalla de registro de excedente | Construcción del formulario con sus campos, etiquetas asociadas y atributos correspondientes |
| Pantalla de panel de impacto | Construcción de la tabla de indicadores con encabezados, cuerpo y datos de ejemplo |
| Hoja de estilos y elementos comunes | Definición de la paleta corporativa, encabezado y pie compartidos entre pantallas |
| Documentación | Elaboración y actualización de los documentos de formulación y evidencias |

### Acuerdos de trabajo

- Las tres pantallas comparten el mismo encabezado, el mismo pie y la misma
  hoja de estilos, para garantizar consistencia visual y estructural.
- Cada integrante trabaja sobre su propio archivo, evitando modificaciones
  simultáneas sobre el mismo documento.
- El estándar de estructura semántica se acuerda antes de empezar a construir
  y se aplica de forma uniforme.
- El trabajo se revisa de forma cruzada entre integrantes antes de consolidar
  la entrega.
- El equipo comparte el aprendizaje de las herramientas: quien avanza primero
  en un tema apoya a los demás.

### Convención de control de versiones

Cada integrante clona el repositorio, trabaja sobre su componente asignado y
registra sus avances mediante el ciclo `pull`, `status`, `add`, `commit` y
`push`. Los mensajes de commit siguen el estándar Conventional Commits, con
el prefijo técnico en inglés y la descripción en español:

- `feat:` incorporación de una funcionalidad nueva
- `fix:` corrección de un error existente
- `docs:` cambios en la documentación del proyecto
- `chore:` tareas de configuración o mantenimiento

---

## 8. Repositorio del proyecto

| Campo | Valor |
|---|---|
| Visibilidad | Público |
| Plataforma | GitHub |
| URL | https://github.com/AndresJimenez198/ecoplato |
| Número de integrantes | 3 |

---

## 9. Fuentes consultadas

- Too Good To Go — toogoodtogo.com
- Olio — referenciada en BBVA, *"Las 7 mejores apps para reducir el
  desperdicio alimentario"* (2025)
- EatCloud — eatcloud.com, términos de uso y aviso de privacidad
- Asociación de Bancos de Alimentos de Colombia, ABACO — abaco.org.co
- Banco de Alimentos de Bogotá — bancodealimentos.org.co

**Fecha de consulta:** 8 de agosto de 2026

---

## 10. Decisiones tomadas

| Decisión | Justificación |
|---|---|
| Mantener la idea original de EcoPlato | Cumple los cinco criterios de viabilidad definidos para el proyecto |
| Reposicionar de "canal de comunicación" a "motor de anticipación y asignación" | EatCloud ya ocupa el espacio del canal en el mercado colombiano |
| Incluir la tasa de donaciones no recogidas como indicador visible | Diferenciación por transparencia; ninguna alternativa la expone |
| Construir el Nivel 1 sin dependencia de servidor | El primer entregable debe poder demostrarse con pantallas estáticas |
| Distribuir el trabajo por componentes y no por roles jerárquicos | Favorece el aprendizaje compartido y el avance paralelo del equipo |
| Adoptar Conventional Commits con descripción en español | Mantiene el estándar técnico y asegura la comprensión del equipo |

---

**Versión:** 3.0
**Fecha:** 22 de agosto de 2026

### Historial de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-08-08 | Formulación inicial con benchmarking |
| 2.0 | 2026-08-08 | Integrantes, metodología por componentes |
| 3.0 | 2026-08-22 | Actualización del equipo a 3 integrantes, incorporación de CSS3 al Nivel 1, URL del repositorio y convención de commits |
