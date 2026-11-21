# Bitacora de JavaScript interactivo
 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)
 
## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|-------------|---------------------------|---------------------------------|
| textContent desde app.js |Cambio el contenido del titulo de "Mi primera pagina interactiva" a "Hola TECSUP"|Si |
| style.color |Cambio el color del titulo y se resalto el parrafo de la seccion Ejercicio 2|Si|

 
## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un click |1|
| dblclick |Doble click |1|
| mouseover |Pasar el mouse|1|

```text 
En la consola se muestra que, el evento.type imprimio el tipo de evento ejecutado, por ejemplo "mouseover" y el evento.target imprimió el siguiente código HTML "<button id="btnSumar">Sumar 1</button>"
```
 
## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|--------|-------------------------|------------------------------|
| Escribir en el campo nombre | Se escribe el nombre en la pantalla|No |
| Enviar sin preventDefault |Se envia y se limpia automaticamente |Si |
| Enviar con preventDefault, correo sin @ |Indica que el correo no cuenta que el simbolo @|No|
| Enviar con preventDefault, correo con @ |Indica que el correo se envio |No|

 
## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | conDescuento(0.25) |
|---------|---------|--------|--------------------|
| laptop  | Laptop  | 2500   | 1875               |
| mouse   | Mouse   | 45     | 33.75              |
| teclado | Teclado | 120    | 90                 |

```text 
Usar una clase permite reutilizar una misma plantilla para crear múltiples productos con sus propias propiedades y métodos (como el cálculo de descuentos) sin repetir código. Además, al generarlos dinámicamente desde JavaScript, se evita escribir etiquetas HTML repetitivas a mano y facilita mantener o actualizar la lista de productos.
```

