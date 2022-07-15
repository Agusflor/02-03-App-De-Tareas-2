const process = require ('process');

const {listarTareas, escribirJSON, guardarTarea, filtrar} = require('./funcionesDeTareas');

let operacion ;// declararla sola 

let validacion = (variable, posicion = 2)=> {if (process.argv[posicion] !== undefined) { return variable = process.argv[posicion].toLocaleLowerCase()
}else{
    return variable = process.argv[posicion]
} }//le pongo una condicion para que sea distinto de undefined


switch (validacion(operacion,2)) {
    case "listar":
        console.log("listando Tareas");
        listarTareas();
        break;
    case "crear":
        let parametro
        if(validacion(parametro,3) !== undefined){
            guardarTarea(validacion(parametro,3))
        }else{
        console.log("debes pasar un parametro a la función");
        }
        break;
    case "actualizar":
        let parametros
        if(validacion(parametros,3) !== undefined){
            actualizar(validacion(parametros,3))
           
        }else{
        console.log("debes pasar un parametros a la función");
        }
        break;
    case "filtrar": 
    let parameto
    if(validacion(parameto,3) !== undefined){
        if(validacion(parameto,3) !== "pendiente" || validacion(parameto,3) !== "en curso" || validacion(parameto,3) !== "terminada")
        {
        return console.log('Tienes que pasar >>>Pendiente o En curso o Terminada<<<')
    }
    filtrar(validacion(parameto,3))
    }else{
    console.log("debes pasar un parametros a la función")
    };
    break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción\nTenemos las siguientes tareas si llegamos a terminar,\nintenta escribiendo una de las siguientes: \n-Listar \n-Crear")
        break;
    default:
        console.log("No entiendo que quieres hacer\nNo tenemos tareas asociadas a esa operación intenta una de las siguientes:\n-Listar\n-Crear");
        break;
}