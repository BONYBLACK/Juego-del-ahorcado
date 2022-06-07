function cargarPalabras(){

    console.log("iniciando cargarPalabras");
    
    $.get('http://localhost/Ahorcado/php/leerDatos.php',
    ("token=123456789"), function(data){
    
    var info= JSON.parse(data);
    
    var palabras=info.palabras;
    if (palabras.length>0) {
    
    palabras.forEach(agregarArreglo);
    }
    
    });
    };
    function agregarArreglo(item) { 
         palabras_array.push(item.palabra);
         pistas_array.push(item.pista);
         console.log(item.palabra);
         console.log(item.pista);
    }