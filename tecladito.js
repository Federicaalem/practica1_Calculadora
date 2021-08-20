//evento de una lista
window.addEventListener('load', init); 
window.addEventListener('keypress', desdeTeclado);

function init(){ 
    //creo una variable la cual guarda todos los botones, para su respectiva consulta  
    var botones= document.querySelectorAll('button');
     //creo una variable la cual guarda todos los elemento que encierran en el id 'pantalla', para su respectiva consulta 
    var pantalla = document.getElementById('pantalla');
    
    //i: recorre la cantidad de botones
    for(var i = 0; i< botones.length; i++){  
         
        //recorro el boton(i) que ejecuto el evento Click
        botones[i].addEventListener('click', function(){       
        
            //si el contenedor de texto es '='
        if(this.textContent == '='){

            //evaluo los valores que contiene la pantalla, es decir obtengo el resultado
            //y lo guardo en valor de la pantalla para que muestre directamente el resultado
            pantalla.value = eval(pantalla.value)

            //si el contenedor de texto es 'C'
        }else if ( this.textContent == 'C'){
             //los valores que esten en 'pantalla' se convierten en vacio, es decir desaparece, se borra.
            pantalla.value = ''
        }else{
            // los valores se siguen incrementando en pantalla
            pantalla.value += this.textContent;
        }
            /*
        Si el boton es "=" (this.textContent === '=')
            Calcular el resultado (hacer.eval(pantalla.value) y guardarlo en pantalla.value)
        Si no, si el boton es 'C' (this.textContent === 'C')
            Limpiar la pantalla (pantalla.value = '')
        De otro modo, agregar al valor de pantalla el contenido del boton
        */
        
        });
    }
}

function desdeTeclado(e){
    let pantalla = document.getElementById('pantalla');
    let codigo = e.charCode;
    let caracter = String.fromCharCode(codigo);
    let posibles_caracteres = ["+","/", "-", "*", "1", "2","3","4","5","6","7","8","9","0"];
    console.log(codigo);
    
    if(caracter == '=' || caracter == 13 ){
        pantalla.value = eval(pantalla.value)
       
    }else if ( caracter == 'C' || caracter == 'c'){
        pantalla.value = ''

    }else if(posibles_caracteres.includes(caracter)){
        pantalla.value += caracter;
        
    }
    /*
    Si el caracter es '=' o enter (codigo igual a '13')
        calcular la expresion y mostrarla por pantalla (eval(pantalla.value))
    Si no, si el caracter es 'C' o 'c' 
        borrar el contenido de la pantalla (pantalla.value = '')
    Si no, si el caracter esta dentro de los caracteres posibles... 
  */

}



