import Vue from 'vue';
import Router from 'vue-router';
//pages
import HomePage from '../pages/Dashboard/DashboardPage.vue';
import HardwarePage from '../pages/Hardware/HardwarePage.vue';
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
    // {
    //   path: '/test', name: 'Test', component: Page2
    // },
    // {
    //   path: '/help', name: 'Help', component: HelpPage,
    //   children :[
    //     {
    //       path: '/help/checkbox', name: 'helpCheckbox', component: CheckboxPage
    //     },
    //     {
    //       path: '/help/dropdown', name: 'helpDropdown', component: DropdownPage
    //     }
    //   ]
    // },
    {
      path: '*', component: NotFoundPage
    }
  ]
})
