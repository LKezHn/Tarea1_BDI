
/**
 * Clase encargada de manejar las funciones relacionadas con IndexDB como son: creacion, modificación, eliminación y búsquedas.
 * @author lemartinezm@unah.hn
 * @version 1.0.0
 * @date 2020/11/25
 */
function IDBManager() {
  this.request;

  this.db;

  /**
   * Método encargado de abrir la conexion hacia IndexDB, asi como de crear la Base de Datos y el ObjectStore 
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @data 2020/11/25
   */
  this.open = function () {
    this.request = window.indexedDB.open('NotesDB', 1)
    this.request.onsuccess = (result) => {
      this.db = this.request.result;
      console.log("Connected")
    }

    this.request.onupgradeneeded = (result) => {
      this.db = this.request.result;
      let objectStore = this.db.createObjectStore('note', {
        autoIncrement: true
      })
    }

    this.request.onerror = (error) => {
      console.error(error);
    }
  }

  /**
   * Método encargado de agregar una nueva nota a la Base de Datos creada anteriormente.
   * @param  note El contenido que se desea almacenar en la base de datos
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25
   */
  this.addNote = function (note = "") {
    var transaction = this.db.transaction(['note'], "readwrite");
    transaction.oncomplete = (res) => {};
    transaction.onerror = (err) => console.error(err);
    let objectStore = transaction.objectStore("note");

    let request = objectStore.add({ note });
    request.onsuccess = (res) => console.log("added")
    request.onerror = (err) => console.error(err)
  }

  /**
   * Método encargado de actualizar el contenido de una nota ya almacenada en la Base de Datos.
   * @param data Es el objeto que contiene la información de la nota que se quiere modificar 
   * @param content Es el contenido actualizado que se desea guardar.
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25 
   */
  this.updateNote = function (data = {}, content) {
    let request = this.db.transaction(["note"], "readwrite").objectStore("note").openCursor(data.key)
    request.onsuccess = function (event) {
      let cursor = request.result;
      if (cursor) {
        let updatedData = cursor.value
        updatedData.note = content
        let result = cursor.update(updatedData);
        result.onsuccess = function () {
          data.note = cursor.value.note
          data.key = cursor.key
        }
      } else {
        console.log("Error")
      }
    };
  }

  /**
   * Método encargado de eliminar una nota guardada en la Base de Datos.
   * @param data Es el onjeto que contiene la información de la nota a eliminar.
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25
   */
  this.deleteNote = function (data = {}) {
    let request = this.db.transaction(["note"], "readwrite").objectStore("note").openCursor(data.key)
    request.onsuccess = function (event) {
      let cursor = request.result;
      if (cursor) {
        let result = cursor.delete();
        result.onsuccess = function () {
          console.log("Deleted")
        }
      } else {
        console.log("Error")
      }
    };
  }

  /**
   * Método encargado de obtener la primer nota que se almacenó en la Base de Datos.
   * @param data Es el objeto donde se almacenará la información recuperada desde la Base de Datos.
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25 
   */
  this.getFirst = function (data = {}) {
    let request = this.db.transaction("note").objectStore("note").openCursor();
    request.onsuccess = function (event) {
    let cursor = request.result;
      if (cursor) {
        data.note = cursor.value.note
        data.key = cursor.key
      }
    };
  }

  /**
   * Método encargado de obtener la última nota alamcenada en la Base de Datos.
   * @param data Es el objeto donde se almacenará la información recuperada desde la Base de Datos 
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25 
   */
  this.getLast = function (data = {}) {
    let request = this.db.transaction("note").objectStore("note").openCursor(null, 'prev');
    request.onsuccess = function (event) {
      let cursor = request.result;
      if (cursor) {
        data.note = cursor.value.note
        data.key = cursor.key
      }
    };
  }

  /**
   * Método encargado de recuperar la información que refiere a la nota siguiente que fue almacenada en la Base de Datos.
   * @param data Es el objeto que contiene la información de la nota actual, la cual se utiliza para encontrar la siguiente.
   * @return Si no existe una nota siguiente. 
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25  
   */
  this.getNext = function (data = {}) {
    let request = this.db.transaction("note").objectStore("note").openCursor();
    request.onsuccess = function (event) {
      let cursor = request.result;
      try {
        if (cursor.key <= data.key) {
          cursor.continue()
        } else
          if (cursor.key > data.key) {
            data.note = cursor.value.note
            data.key = cursor.key
          }
      } catch (e) {
        return;
      }
      request.onerror = function (err) {
        return;
      }
    };
  }

  /**
   * Método encargado de recuperar la información que refiere a la nota anterior que fue agregada a la Base de Datos.
   * @param data  Es el objeto que contiene la información de la nota actual, la cual se utiliza para encontrar la nota anterior.
   * @return Si no existe una nota anterior.
   * @author lemartinezm@unah.hn
   * @version 1.0.0
   * @date 2020/11/25  
   */
  this.getPrevious = function (data = {}) {
    let request = this.db.transaction("note").objectStore("note").openCursor(null, 'prev');
    request.onsuccess = function (event) {
      let cursor = request.result;
      try {
        if (cursor.key >= data.key) {
          cursor.continue()
        } else
          if (cursor.key < data.key) {
            data.note = cursor.value.note
            data.key = cursor.key
          }
      } catch (e) {
        return;
      }
      request.onerror = function (err) {
        return;
      }
    };
  }

}