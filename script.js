
/** Instancia del IndexDBManager */
var IDBM = new IDBManager();

IDBM.open();

/** Variable utilizada para almacenar el valor del radioButton seleccionado por el usuario. */
var selection;

/** Variable utilizada para almacenar el texto escrito por el usuario. */
var userContent;

/** Variable utilizada para almacenar la información que devuelven las consultas hacia la Base de Datos. */
var data = {};
/**
 * Función encargada de capturar el valor del input donde el usuario escribirá el texto a guardar, para posteriormente 
 * asignar el valor a la variable userContent
 * @param tag se refiere ak input donde el usuario ingresará/modificará el texto a guardar.
 * @author lemartinezm@unah.hn
 * @version 1.0.0
 * @date 2020/11/25
 */
var setData = (tag) => {
    userContent = tag.value;
}

/**
 * Función emcargada de capturar la acción que quiere realizar el usuario.
 * @param tag se refiere al radiobutton seleccionado por el usuario.
 * @author lemartinezm@unah.hn 
 * @version 1.0.0
 * @date 2020/11/25
 */
var isSelected = (tag) => {
  selection = tag.id;
}

/**
 * Función encargada de realizar las diferentes acciones que puede elegir el usuario como: agregar, modificar, eliminar, anterior,
 * siguiente, primero y último
 * @author lemartinezm@unah.hn
 * @version 1.0.0
 * @date 2020/11/25  
 */
var accept = () => {
  if(selection == "add"){
    IDBM.addNote(userContent)
    clearInput();
  }else
  if(selection == "delete"){
    IDBM.deleteNote(data)
    data = {};
    clearInput();
  }else
  if(selection == "modify"){
    IDBM.updateNote(data, userContent)
    setTimeout( () =>{
      setInputInfo(data.note)
    },50)
  }else
  if(selection == "first"){
    IDBM.getFirst(data)
    setTimeout( () =>{
      setInputInfo(data.note)
    },50)
  }else
  if(selection == "last"){
    IDBM.getLast(data)
    setTimeout( () =>{
      setInputInfo(data.note)
    },50)
  }else
  if(selection == "next"){
    IDBM.getNext(data)
    setTimeout( () =>{
      setInputInfo(data.note)
    },50)
  }else
  if(selection == "previous"){
    IDBM.getPrevious(data)
    setTimeout( () =>{
      setInputInfo(data.note)
    },50)
  }
  return false;
}

/**
 * Funcion encargada de limpiar el input dinde se ingresa el texto a guardar
 * @author lemartinezm@unah.hn 
 * @version 1.0.0
 * @date 2020/11/26
 */
var clearInput = () => {
  document.getElementById("userContent").value = "";
  return false;
}

/**
 * Funcion encargada de establecer el valor del input tipo texo
 * @param name Es el valor a establecer en el input
 * @author lemartinezm@unah.hn
 * @version 1.0.0
 * @date 2020/11/25   
 */
var setInputInfo = (name) => {
  if(name){
    document.getElementById("userContent").value = name;
  }
}