import { createRouter, createWebHistory } from 'vue-router'

import Whitfield_prelim from '@/view/Whitfield_prelim.vue'
import Admission from '@/view/Admission.vue'

const router = createRouter({

history:createWebHistory(),

routes:[

{
    path:'/',
    name:'Whitfield_prelim',
    component:Whitfield_prelim
  },
  {
    path:'/admissions',
    name:'Admissions',
    component:Admission
  }

]

})

export default router



