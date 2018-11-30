let cajaTexto = document.getElementById("cajatexto");
let arrayKeys = document.querySelectorAll("#keyboard div");
let caps = false;
let capsLock = false;

/**
 * Administra todas las funciones del programa del teclado
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function main() {

    window.setInterval(function(){
        showDate(); 
      }, 1000);

    for (let index = 0; index < arrayKeys.length; index++) {
        arrayKeys[index].onclick = function() {
            if (this.className === "letter") {
                cajaTexto.value += this.innerHTML;
                if (caps === true && capsLock === false) {
                    lowerCaps();
                    caps = false;
                } else if (caps === true && capsLock === true) {
                    upperCaps();
                    caps === true;
                }
            } else if (this.className === "delete") {
                deleteLetter();
            } else if (this.className === "enter" || this.className === "char") {
                placeEnter();
            } else if (this.className === "space") {
                placeSpace();
            } else if (this.className === "tab") {
                placeTab();
            } else if (this.className === "capslock") {
                ChangeCapsLock();
            } else if (this.className === "shift") {
                caps = true;
                if (capsLock === true && caps === true) {
                    lowerCaps();
                } else if (capsLock === false && caps === true) {
                    upperCaps();
                }
            }
        } 
    }
}

/**
 * Elimina la ultima letra de la caja de texto
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function deleteLetter() {
    let texto = cajaTexto.value;
    texto = texto.substring(0, texto.length - 1);
    cajaTexto.value = texto;   
}

/**
 * Añade un salto de linea
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function placeEnter() {
    cajaTexto.value += "\n";
}

/**
 * Añade un espacio
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function placeSpace() {
    cajaTexto.value += " ";
}   

/**
 * Añade una tabulacion de texto
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function placeTab() {
    cajaTexto.value += "    ";
}

/**
 * Transforma las letras a mayusculas
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function upperCaps() {
    for (let index = 0; index < arrayKeys.length; index++) {
        if (arrayKeys[index].className === "letter") {
            arrayKeys[index].textContent = arrayKeys[index].textContent.toUpperCase();
        }
    }
}

/**
 * Transforma las letras a minusculas
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function lowerCaps() {
    for (let index = 0; index < arrayKeys.length; index++) {
        if (arrayKeys[index].className === "letter") {
            arrayKeys[index].textContent = arrayKeys[index].textContent.toLowerCase();
        }
    }
}

/**
 * Cambia el estado entre mayusculas y minusculas 
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function ChangeCapsLock() {
    if (capsLock === false) {
        upperCaps();
        capsLock = true;
        caps = true;
        document.getElementById("led").style.backgroundColor = "white";
    } else if (capsLock === true) {
        lowerCaps();
        capsLock = false;
        caps = false;
        document.getElementById("led").style.backgroundColor = "grey";
    }
}

/**
 * Muestra la fecha
 * 
 * @author Guillem Sánchez Román
 * @version 0.0.1
 * @param
 */
function showDate() {
    let actualDate = new Date();
    let arrayDays = new Array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');
    let nameDay = arrayDays[actualDate.getDay()];
    let arrayMonths = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
    let nameMonth = arrayMonths[actualDate.getMonth()];
    let numYear = actualDate.getFullYear();
    let numDay = actualDate.getUTCDate();
    let minutes = actualDate.getMinutes();
    let hours = actualDate.getHours();
    let seconds = actualDate.getSeconds();
  
    if(seconds < 10) {
        seconds = "0" + seconds; 
        console.log(typeof(seconds));
               
    }
    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    let formatedDate = nameDay + " " + numDay + " de " + nameMonth + " de " + numYear + ", " + hours + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = formatedDate;

}

main();