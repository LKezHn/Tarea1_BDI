# Tarea #1 - Tarea de Investigación BDI III PAC - 2020
@author lemartinezm@unah.hn
@version 1.0.0

* Crear un programa de Base de Datos usando IndexDB en Javascript para demostrar los conceptos básicos de inserción, eliminación, actualización y selección de datos. Se adjunta documentación oficial del ejemplo.

    * https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB
    * https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

* Objetivo para el estudiante:

    Desarrolle una página web con 3 controles: una lista de elementos radio de selección (control 1), un campo de texto (control 2), y dos botones (control 3); que administran una lista de elementos en una base de datos, donde es posible agregar elementos, recorrer la lista, modificar elementos o eliminarlos.
    
* Aclaraciones:

    - La tabla de base de datos (comúnmente llamada base de datos dentro de este documento), tiene una estructura de id y texto. Si la tabla está vacía (e.g. como al inicio del programa), el campo 2 se mostrará en blanco.
    
    - El programa se mueve en forma de lista de tipo cola a lo largo de toda la base de datos. La lista no es circular: no se puede desplazar antes del primer elemento ni después del último elemento.
    
    - El estudiante sí debe documentar el código con su información de autoría y con las acciones que hace cada componente o código en su tarea.
    
    - El estudiante sí puede usar archivos javascript que importa en su index, siempre y cuando todo el código es creado por el estudiante. También puede hacer su programa en un único archivo index.html y compreso en 7z según lo solicitado por la tarea.
    
    - No tiene que aplicar estilos de CSS.
    
    - No tiene que usar tecnología AJAX o síncrona, etc, ya que la tarea hace uso únicamente de Javascript (Client Side) y no de server side.

* Sobre los controles (1,2 y 3).

    * El control 1 deben ser 7 opciones:
    
        1. **Agregar**: permite agregar un registro a la base de datos. Se agrega al final de la tabla (i.e. cola).
        
        1. **Eliminar**: permite eliminar el registro sobre el cual se encuentra el apuntador interno controlado por los botones de “anterior” y “siguiente”. Al inicio del programa el apuntador debe ser el primer elemento de la base de datos.
        
        1. **Modificar**: si esta opción está seleccionada y se presiona el botón aceptar, el texto del campo 2 deberá modificar el elemento del apuntador de la base de datos.
        
        1. **Anterior**:  al inicio del programa el apuntador debe ser el primer elemento de la base de datos y el campo 2 mostrará por tanto el texto del primer elemento de la tabla de base de datos. Si esta opción es seleccionada y se presiona el botón aceptar, el apuntador del elemento a la tabla de base de datos se debe mover un paso en dirección al primer elemento, y se debe mostrar ese texto en el campo 2.
        
        1. **Siguiente**: al inicio del programa el apuntador debe ser el primer elemento de la base de datos y el campo 2 mostrará por tanto el texto del primer elemento de la tabla de base de datos. Si esta opción es seleccionada y se presiona el botón aceptar, el apuntador del elemento a la tabla de base de datos se debe mover un paso en dirección al último elemento, y se debe mostrar ese texto en el campo 2.
        
        1. **Primero**: Si esta opción es seleccionada y se presiona el botón aceptar, el apuntador del elemento a la tabla de base de datos se debe mover al primer elemento de la tabla, y se debe mostrar ese texto en el campo 2.
        
        1. **Último**: Si esta opción es seleccionada y se presiona el botón aceptar, el apuntador del elemento a la tabla de base de datos se debe mover al último elemento de la tabla, y se debe mostrar ese texto en el campo 2.

    * El control 2 debe ser:
    
        Un campo de texto donde se muestra, se escribe o se modifica un texto.
        
    * El control 3:
        
        1. **Botón aceptar**: ejecuta sobre la base de datos IndexDB la acción del control 1, tomando el texto del control 2.
        
        1. **Botón limpiar**: limpia la caja de texto del control 2, sin afectar la base de datos.
        
