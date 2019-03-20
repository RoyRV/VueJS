import Vue from 'vue';
import Router from 'vue-router';
//pages
import HomePage from '../pages/Dashboard/DashboardPage.vue';
import HardwarePage from '../pages/Hardware/HardwarePage.vue';
import ConsumoPage from '../pages/Consumo/ConsumoPage.vue';
import ClientesPage from '../pages/Clientes/ClientesPage.vue';
import AbrirCasoPage from '../pages/AbrirCaso/AbrirCasoPage.vue';
import ContactanosPage from '../pages/Contactanos/ContactanosPage.vue';
import NotFoundPage from '../pages/NotFound/NotFoundPage.vue';

//helpPages

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/', name: 'Home', component: HomePage
    },
    {
      path: '/hardware', name: 'Hardware', component: HardwarePage
    }, 
    {
      path: '/consumo', name: 'Consumo', component: ConsumoPage
    }, 
    {
      path: '/clientes', name: 'Clientes', component: ClientesPage
    }, 
    {
      path: '/abrirCaso', name: 'AbrirCaso', component: AbrirCasoPage
    }, 
    {
      path: '/contactanos', name: 'Contactanos', component: ContactanosPage
    }, 
    {
      path: '*', component: NotFoundPage
    }
  ]
})
