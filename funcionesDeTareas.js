const tareas = require('./tareas.json');//ya esta parseando el JSON
 let fs = require('fs')

   listarTareas =(tareas)=> {
      tareas.forEach((tarea) => {
            console.log(`La tarea ${tarea.titulo} tiene estado ${tarea.estado}.`)})
            return null;
   },
   escribirJSON=(array) =>{
      fs.writeFileSync('./tareas.json', JSON.stringify(array,null,2), 'utf-8')
   },
   guardarTarea = function(titulo){
      let  tarea ={
            titulo: titulo,
            estado: 'pendiente'
      }
      tareas.push(tarea)

      this.escribirJSON(tareas)
      this.listarTareas()
   }
   actualizar = function (titulo) {
      let tareasActualizadas = tareas.map(tarea => {
         if(tarea.titulo === titulo){
            if( tarea.estado === "pendiente" ){
               tarea.estado = "en curso" 
               return tarea
            }else if(tarea.estado === "en curso"){
               tarea.estado = "terminada"
               return tarea
            }else {
               console.log("no se encontro la tarea")
               return tarea          
         }}
       
         
         return tarea
      })
         escribirJSON(tareasActualizadas)
         


   }
   filtrar = function(estado) {
      arrayFiltrado = tareas.filter(tarea =>{ 
         return tarea.estado.toLowerCase() === estado.toLowerCase()})
      this.listarTareas(arrayFiltrado)
   }
      
   module.exports = {listarTareas, escribirJSON, guardarTarea, actualizar, filtrar}
   