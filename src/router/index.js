import { createRouter, createWebHashHistory } from 'vue-router'
import Crear from '@/components/Crear'
import Listar from '@/components/Listar'
import Edita from '@/components/Edita'
const routes = [

  {
    path: '/crear',
    name: 'Crear',
    component: Crear
  },
  {
    path: '/listar',
    name: 'Listar',
    component: Listar
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Edita
  }
  //{
  //  path: '/crear',
  //  name: 'Crear',
  //  component: () => import(/* webpackChunkName: "crear" */ 'Crear')
  /// }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
