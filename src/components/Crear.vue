<template>
  <div class="container">
      <div class="card">
          <div class="card-header">
              Empleados
          </div>
          <div class="card-body">
              <form v-on:submit.prevent="add_employ">
                  <div class="form-group">
                    <label for="">Nombre</label>
                    <input type="text" v-model="empleado.nombre" name="nombre" id="nombre" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Escribe el nombre del empleado</small>
                  </div>
                  <div class="form-group">
                    <label for="">Correo</label>
                    <input type="text" v-model="empleado.correo" name="correo" id="correo" class="form-control" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">Escribe el nombre del correo</small>
                  </div>
                  <div class="btn-group" role="group" aria-label="">
                      <button type="submit" class="btn btn-success "> Agregar </button>
                      <button type="button" class="btn btn-warning" @click="cancel"> Cancelar </button>
                  </div>
              </form>
          </div>
         
      </div>
  </div>
</template>

<script>
import router from '../router/index'
export default {
    data(){
        return{
            empleado: {}
        }
    },
    methods:{
        add_employ(){
            console.log(this.empleado);
            var enviarDatos = { nombre : this.empleado.nombre, correo: this.empleado.correo }
             fetch ('http://localhost/empleados/?insertar=1',{
                 method: 'Post',
                 body:JSON.stringify(enviarDatos)
             })
             .then(r=>r.json())
             .then((res)=>{
                 console.log(res);
                 router.push("Listar")
             })
        },
        cancel(){
            router.push("Listar")
        }
    }
}
</script>

<style>

</style>