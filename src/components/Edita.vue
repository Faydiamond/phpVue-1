<template>
    <div class="container mt-4">
      <div class="card">
          <div class="card-header">
              Editar
          </div>
          <div class="card-body">
              <form v-on:submit.prevent="update_employ">
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
                      <button type="submit" class="btn btn-success "> Modificar </button>
                      <button type="button" class="btn btn-warning" @click="cancel"> Cancelar </button>
                  </div>
              </form>
          </div>
         
      </div>
  </div>
</template>

<script>
//import router from '../router/index'
export default {
    data(){
        return{
            empleado : {}
        }
    },
    methods:{
   
        cancel(){
              window.location.href = '../listar'
        },
        empleadosById(){
          fetch ('http://localhost/empleados/?consultar='+this.$route.params.id).then(r=>r.json())
          .then((data)=>  {
              console.log(data);
              this.empleado=data[0]
          })

        },
        update_employ(){
            console.log(this.$route.params.id);
            
            var enviarDatos = { id: this.$route.params.id ,nombre : this.empleado.nombre, correo: this.empleado.correo }
             fetch ('http://localhost/empleados/?actualizar='+this.$route.params.id,{
                 method: 'Post',
                 body:JSON.stringify(enviarDatos)
             })
             .then(r=>r.json())
             .then((res)=>{
                 console.log(res);
                 //router.push("Listar")
                 window.location.href = '../listar'
             })
        }
    },
    created: function(){

    }
}
</script>

<style>

</style>