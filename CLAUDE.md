# EcoPlato — Contexto del proyecto

Este archivo define el estándar técnico y las reglas de trabajo del
repositorio. Se lee al inicio de cada sesión.

---

## Qué es este proyecto

EcoPlato es una plataforma web que **anticipa y asigna** excedentes
alimentarios de restaurantes hacia comedores comunitarios.

Posicionamiento: *EcoPlato no publica excedentes: los anticipa y los asigna.*

Se diferencia de las alternativas existentes (Too Good To Go, Olio, EatCloud)
en tres puntos: pronóstico del excedente antes de que ocurra, asignación con
restricciones en lugar de orden de llegada, y publicación de la tasa de
donaciones no recogidas como compromiso de transparencia.

La formulación completa está en `docs/EcoPlato-formulacion.md`.
La especificación de contenido está en `docs/EcoPlato-lienzo-maquetacion.md`.

## Contexto académico

Proyecto Integrador del Técnico Laboral como Asistente en Desarrollo de
Software — Cesde, Medellín. Se desarrolla a lo largo de tres niveles.

**Nivel actual: 1 · Periodo 2026-2**

| Semanas | Submódulo | Capa del proyecto |
|---|---|---|
| 1–6 | Introducción a la Programación (HTML5, CSS3, Git) | Interfaz |
| 7–12 | Lógica de Programación | Algoritmos de pronóstico y asignación |
| 13–18 | Gestión de Bases de Datos | Modelo de datos e indicadores |

## RESTRICCIÓN TECNOLÓGICA — regla central

El proyecto se construye **solo con lo que el programa ya enseñó**.

| Nivel | Disponible |
|---|---|
| **1 · Actual** | HTML5, CSS3, Git |
| 2 | JavaScript, backend, base de datos |
| 3 | Frameworks de frontend y backend |

**Nunca introducir tecnología de un nivel superior sin marcarla como
`[NIVEL 2]` o `[NIVEL 3]`.** Si una solución requiere JavaScript, framework
o servidor, decirlo y ofrecer la alternativa viable en el nivel actual.

Esto incluye: no agregar `<script>`, no usar preprocesadores, no usar
frameworks CSS, no proponer librerías externas.

## Estándar de código

**HTML**
- `lang="es"`, `<meta charset>`, `<meta name="viewport">` y
  `<meta name="description">` propia de cada pantalla.
- Un solo `<h1>` por página. Jerarquía de encabezados sin saltos.
- Etiquetas semánticas antes que `<div>`: `<header>`, `<nav>`, `<main>`,
  `<section>`, `<footer>`.
- Formularios: `<label for>` asociado a cada campo, `<fieldset>` con
  `<legend>`, atributo `value` en cada `<option>`.
- Tablas: `<caption>`, `<thead>`, `<tbody>`, `scope` en todos los `<th>`.
- `aria-current="page"` en el enlace de navegación de la página actual.
- Contenido real. Nunca texto de relleno.

**CSS**
- Paleta corporativa declarada como variables en `:root`:
  Verde Eco `#2E7D32` · Naranja Alerta `#EF6C00` · Blanco `#FFFFFF`
- Unidades relativas (`rem`, `%`) antes que `px` para tipografía y espaciado.

**Antes de dar por terminada una pantalla:** validar en validator.w3.org y
verificar que el contador de problemas de VS Code esté en cero.

## Estructura

```
index.html          Presentación del proyecto
publicar.html       Formulario de registro de excedente
impacto.html        Panel de indicadores
css/styles.css      Hoja de estilos común a las tres pantallas
docs/               Formulación y lienzo de maquetación
```

Encabezado, pie y hoja de estilos son idénticos en las tres pantallas.

## Equipo y propiedad de archivos

| Integrante | Componente |
|---|---|
| Juan Sebastián Venegas | `publicar.html` |
| Santiago Agudelo Ceballos | `impacto.html` · revisión cruzada |
| Andrés Mauricio Jiménez | `index.html` · `css/styles.css` · `docs/` |

**Un archivo, una persona.** Nadie edita el archivo de otro; los hallazgos se
reportan a su responsable.

**Excepción:** `css/styles.css` afecta a las tres pantallas. Los cambios ahí
se solicitan, no se hacen directamente.

El equipo trabaja sin jerarquía formal. **No usar la palabra "líder" ni
asignar roles jerárquicos** en documentos o entregables.

## Convención de commits

Formato: `prefijo: descripción en español`

| Prefijo | Cuándo |
|---|---|
| `feat:` | Se agrega algo nuevo |
| `fix:` | Se corrige algo roto |
| `docs:` | Documentación |
| `chore:` | Configuración o mantenimiento |

Descripción en presente, minúscula inicial, sin punto final.
Ejemplo: `feat: agrega tabla de indicadores`

**Ciclo:** `git pull` → trabajar → `git status` → `git add .` →
`git commit -m "..."` → `git pull` → `git push`

## Reglas de trabajo

1. Pedir la información faltante **antes** de producir, no después.
2. Toda decisión de producto se justifica; registrar el porqué, no solo el qué.
3. Al revisar código, reportar por severidad: crítico, importante, mejora.
4. Si una propuesta contradice el documento de formulación, señalarlo antes
   de desarrollarla.
5. No inventar datos, etiquetas ni comportamientos. Ante duda, verificar.

## Idioma

- Explicaciones y conversación en **español**.
- Términos técnicos en inglés, con traducción la primera vez.
- Código: identificadores, clases y nombres de archivo en inglés.
- Mensajes de error: **nunca traducirlos**; citarlos textualmente y
  explicarlos en español.

---

**Última actualización:** 22 de agosto de 2026
