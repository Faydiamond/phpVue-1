<template>
<div class="card container">
    <div class="card-header">
        Empleados
    </div>
    <div class="card-body">
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
            <th scope="row">{{ empleado.id }}</th>
            <td>{{empleado.nombre}}</td>
            <td>{{ empleado.correo }}</td>
            <td>
                <!--<button class="btn btn-info mr-4"> Editar </button>-->
                <router-link :to="{name:'Editar',params:{id:empleado.id}}" class="btn btn-info ">Editar</router-link>
                <button class="btn btn-danger" v-on:click="delete_employ(empleado.id)"> Eliminar </button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
</div>



</template>

<script>
//import router from '../router/index'
export default {
    data(){
        return{
            empleados : []
        }
    },
  // cuando se cree el componente
  created: function (){
      this.consultarEmpleados()
  },
  methods:{
      consultarEmpleados(){
          fetch ('http://localhost/empleados/').then(r=>r.json())
          .then((data)=>  {
               ///console.log(data); 
               //this.empleados = data;
               //console.log('Empleados', this.empleados);
                if(data.length > 0){
                   //console.log('Si hay datos');
                   this.empleados = data;
                   console.log('Empleados', this.empleados);
               }
          })
          

      },
      delete_employ(id){
          //console.log('El id a borrar es:',id);
          fetch ('http://localhost/empleados/?borrar='+id).then(r=>{
              console.log(r.ok);
              if(r.ok ){
                  window.location.href = '/listar'
              }
          })
          
      }
  }

}
</script>

<style>

</style>