# EcoPlato · Lienzo de maquetación

Especificación de estructura y contenido para las tres pantallas del
prototipo. Nivel 1 — HTML5 y CSS3.

**Cómo se usa:** cada integrante toma su componente, respeta la estructura
semántica indicada y escribe el código. El contenido de texto ya está
definido para que nadie invente copia sobre la marcha.

**Estado:** las tres pantallas están construidas y la hoja de estilos está
vinculada. Este documento pasa de ser guía de construcción a ser el
**estándar de referencia** para mantenimiento, ajustes y sustentación.

---

## Asignación de componentes

| Integrante | Componente | Alcance |
|---|---|---|
| Juan Sebastián Venegas | `publicar.html` | Formulario, campos, validaciones y sustentación de la pantalla |
| Santiago Agudelo Ceballos | `impacto.html` | Tabla de indicadores, datos, sustentación y revisión cruzada de las tres pantallas |
| Andrés Mauricio Jiménez | `index.html` · `css/styles.css` · `docs/` | Pantalla de presentación, hoja de estilos común y documentación del proyecto |

**Regla no negociable:** un archivo, una persona. Nadie edita el archivo de
otro. Si algo hay que corregir en una pantalla ajena, se reporta a su
responsable.

**Excepción:** `css/styles.css` afecta a las tres pantallas. Cualquier cambio
que se necesite ahí se solicita, no se hace directamente.

---

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

**Ciclo de trabajo:** `git pull` al empezar → trabajar → `git status` →
`git add .` → `git commit -m "..."` → `git pull` → `git push`

---

## Estándar común (obligatorio en las tres pantallas)

### Cabecera del documento

```
lang="es"
<meta charset="UTF-8">
<meta name="viewport">
<meta name="description">   -> una frase distinta por pantalla
<title>                     -> "Nombre de la pantalla | EcoPlato"
<link rel="stylesheet" href="css/styles.css">
```

La ruta de la hoja de estilos es idéntica en las tres pantallas. Si una
pantalla se ve sin formato, lo primero que se revisa es esta línea.

### Encabezado `<header>` — idéntico en las tres

| Elemento | Etiqueta | Contenido |
|---|---|---|
| Nombre | `<h1>` | EcoPlato |
| Eslogan | `<p>` | Comida que conecta, acciones que alimentan |
| Navegación | `<nav>` con `<ul>` y tres `<li>` | Inicio · Publicar excedente · Panel de impacto |

**Regla:** el `<h1>` va una sola vez por página y es el nombre del proyecto.

El `<nav>` lleva `aria-label="Navegación principal"`, y el enlace que apunta
a la página actual lleva `aria-current="page"`. Cada archivo marca el suyo.

### Pie `<footer>` — idéntico en las tres

```
EcoPlato · Proyecto Integrador 2026-2
Cesde — Técnico Laboral como Asistente en Desarrollo de Software
Juan Sebastián Venegas · Santiago Agudelo · Andrés Mauricio Jiménez
```

---

# Pantalla 1 · index.html

**Título:** `Inicio | EcoPlato`
**Descripción:** Plataforma que anticipa y asigna excedentes alimentarios de
restaurantes hacia comedores comunitarios.

## Sección 1 — El problema

`<section>` con `<h2>`: **El problema**

Párrafo 1:
> Los restaurantes generan excedentes de alimentos aptos para el consumo
> humano todos los días. No son un accidente: son un patrón. Sin embargo, se
> gestionan cuando ya ocurrieron, y para entonces quedan pocas horas antes de
> que el alimento deje de ser aprovechable.

Párrafo 2:
> Del otro lado, los comedores comunitarios no pueden planear su menú porque
> no saben qué van a recibir ni cuándo. La consecuencia es doble: alimento en
> buen estado que termina en la basura, y operaciones sociales que improvisan.

Cierre en `<p>` con `<strong>`:
> El problema no es la falta de un canal. Los canales existen. El problema es
> que todos operan después de que el excedente ya ocurrió.

## Sección 2 — Qué es EcoPlato

`<section>` con `<h2>`: **Qué es EcoPlato**

Párrafo:
> EcoPlato es una plataforma que anticipa el excedente antes de que ocurra y
> lo asigna al comedor comunitario que mejor puede aprovecharlo.

Tres bloques con `<h3>` y un `<p>` cada uno:

| `<h3>` | Párrafo |
|---|---|
| Anticipa | El excedente de un restaurante responde a patrones de día de la semana, quincena y eventos locales. Con histórico suficiente puede estimarse antes de que exista. |
| Asigna | La distribución no se hace por orden de llegada, sino considerando capacidad del comedor, distancia y ventana de perecibilidad. |
| Mide | Cada operación queda registrada en indicadores públicos, incluidos los que muestran cuándo el sistema falla. |

## Sección 3 — Cómo funciona

`<section>` con `<h2>`: **Cómo funciona**

Lista **ordenada** `<ol>` — el orden importa, por eso no es `<ul>`:

1. El restaurante registra el excedente disponible y hasta qué hora puede recogerse.
2. La plataforma estima la demanda de los comedores cercanos y propone una asignación.
3. El comedor confirma la recogida y coordina el horario.
4. La operación se registra y alimenta los indicadores de impacto.

## Sección 4 — Qué nos hace distintos

`<section>` con `<h2>`: **Qué nos hace distintos**

Párrafo introductorio:
> Existen plataformas que conectan excedentes con receptores. Todas operan
> después de que el excedente ocurrió. EcoPlato se diferencia en tres puntos.

Lista `<ul>` con tres `<li>`, cada uno con `<strong>` al inicio:

- **Anticipación.** Estimamos el excedente antes de que exista, para que el receptor planee en lugar de improvisar.
- **Asignación con restricciones.** Consideramos capacidad, distancia y perecibilidad, no el orden de llegada.
- **Transparencia sobre el fracaso.** Publicamos el porcentaje de excedentes que nadie recogió. Ninguna alternativa lo hace.

---

# Pantalla 2 · publicar.html

**Título:** `Publicar excedente | EcoPlato`
**Descripción:** Formulario para que un restaurante registre alimentos
disponibles para donación.

`<h2>`: **Publicar un excedente**

Párrafo guía:
> Registra los alimentos disponibles hoy. Entre más precisa sea la ventana de
> disponibilidad, mayor es la probabilidad de que el excedente encuentre
> destino a tiempo.

## Estructura del formulario

**Regla no negociable:** cada campo lleva `<label for="X">` e `<input id="X">`
con el mismo valor. Si no coinciden, la asociación no existe.

| Etiqueta visible | Tipo de campo | id / name | Atributos |
|---|---|---|---|
| Nombre del restaurante | `<input type="text">` | `restaurante` | `required` |
| Tipo de alimento | `<select>` | `tipoAlimento` | opciones abajo |
| Cantidad en kilogramos | `<input type="number">` | `cantidad` | `min="1"` `max="500"` `step="0.5"` |
| Disponible hasta | `<input type="datetime-local">` | `disponibleHasta` | `required` |
| Requiere refrigeración | `<input type="checkbox">` | `refrigeracion` | — |
| Comedor sugerido | `<select>` | `comedor` | opciones abajo |
| Observaciones | `<textarea>` | `observaciones` | `rows="4"` |

Los campos obligatorios son: restaurante, tipo de alimento, cantidad y
disponible hasta. Cada `<option>` lleva su atributo `value`. El primer
`<option>` del tipo de alimento tiene `value=""` para que `required`
funcione; el de comedor sugerido no lo necesita, porque "Asignación
automática" es una opción válida.

Opciones de **Tipo de alimento**:
Preparado caliente · Preparado frío · Fruta y verdura · Panadería ·
Proteína cruda · Lácteos · Abarrotes

Opciones de **Comedor sugerido**:
Asignación automática · Comedor Santo Domingo · Comedor Manrique ·
Comedor Robledo · Comedor Belén Rincón

Botón de envío:
```
<button type="submit">Publicar excedente</button>
```

**Detalle que eleva el nivel:** agrupa los campos relacionados con
`<fieldset>` y `<legend>`. Dos grupos: "Datos del excedente" y "Destino y
observaciones". Es semántica correcta de formularios y casi nadie la usa.

---

# Pantalla 3 · impacto.html

**Título:** `Panel de impacto | EcoPlato`
**Descripción:** Indicadores de la operación de EcoPlato, incluidas las
donaciones que no fueron recogidas.

`<h2>`: **Panel de impacto**

Párrafo guía:
> Datos de ejemplo correspondientes al mes de julio de 2026. La última fila
> mide los excedentes publicados que nadie recogió: es el indicador que
> muestra dónde falla el sistema.

## Estructura de la tabla

```
<table>
  <caption>Indicadores de operación — julio 2026</caption>
  <thead>
    <tr>
      <th scope="col">Indicador</th>
      <th scope="col">Valor</th>
      <th scope="col">Mes anterior</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nombre del indicador</th>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
```

**Detalle que eleva el nivel:** el nombre del indicador va en `<th
scope="row">`, no en `<td>`. Es un encabezado de fila, no un dato. Y la tabla
lleva `<caption>`, que la mayoría omite.

### Datos

| Indicador | Valor | Mes anterior |
|---|---|---|
| Kilogramos rescatados | 1.847 kg | 1.502 kg |
| Porciones equivalentes | 5.277 | 4.291 |
| Restaurantes activos | 23 | 19 |
| Comedores atendidos | 8 | 7 |
| Tasa de asignación | 87 % | 81 % |
| Tiempo medio de recogida | 3,2 horas | 4,1 horas |
| **Donaciones no recogidas** | **13 %** | **19 %** |

*Porciones calculadas sobre una equivalencia de 0,35 kg por porción.*

## Sección de metodología

`<section>` con `<h2>`: **Cómo se calculan los indicadores**

Lista de definiciones `<dl>` con `<dt>` y `<dd>`:

| `<dt>` | `<dd>` |
|---|---|
| Tasa de asignación | Porcentaje de excedentes publicados que fueron asignados a un comedor dentro de su ventana de disponibilidad. |
| Tiempo medio de recogida | Horas transcurridas entre la publicación del excedente y su recogida efectiva. |
| Donaciones no recogidas | Porcentaje de excedentes publicados que expiraron sin ser recogidos. Se publica de forma deliberada como compromiso de transparencia. |

**Detalle que eleva el nivel:** `<dl>` es la etiqueta para listas de
definiciones. Usar `<ul>` con dos puntos funciona visualmente pero es
semánticamente incorrecto.

---

# Lista de verificación antes de entregar

- [ ] Las tres pantallas tienen `lang="es"` y `<meta name="description">` distinta
- [ ] Un solo `<h1>` por página, y es EcoPlato
- [ ] No se salta de `<h2>` a `<h4>` en ninguna pantalla
- [ ] Todos los `<input>` tienen su `<label for="">` coincidente
- [ ] La tabla tiene `<caption>`, `<thead>`, `<tbody>` y `scope` en los `<th>`
- [ ] Header y footer son idénticos en los tres archivos
- [ ] Los enlaces del `<nav>` funcionan en las tres direcciones
- [ ] No queda ningún `<div>` que pudiera ser una etiqueta semántica
- [ ] No hay texto de relleno: todo el contenido es real
- [ ] Las tres pantallas cargan la hoja de estilos correctamente
- [ ] Los tres archivos validan sin errores en validator.w3.org

---

## Historial de versiones

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0 | 2026-08-08 | Especificación inicial para construir las tres pantallas |
| 2.0 | 2026-08-22 | Equipo de 3 integrantes, incorporación de CSS3, asignación de componentes y convención de commits |

**Última actualización:** 22 de agosto de 2026
