import Vue from 'vue';
import Router from 'vue-router';
//pages
import HomePage from '../pages/Dashboard/DashboardPage.vue';
import Page2 from '../pages/Test/TestPage.vue';
import NotFoundPage from '../pages/NotFound/NotFoundPage.vue';
import HelpPage from '../pages/HelpSection/HelpPage/HelpPage.vue';
import DropdownPage from '../pages/HelpSection/DropdownPage/DropdownPage.vue';

//helpPages
import CheckboxPage from '../pages/HelpSection/CheckboxPage/CheckboxPage.vue'
Vue.use(Router);

export default new Router({

  routes: [
    {
      path: '/', name: 'Home', component: HomePage
    },
    {
      path: '/test', name: 'Test', component: Page2
    },
    {
      path: '/help', name: 'Help', component: HelpPage,
      children :[
        {
          path: '/help/checkbox', name: 'helpCheckbox', component: CheckboxPage
        },
        {
          path: '/help/dropdown', name: 'helpDropdown', component: DropdownPage
        }
      ]
    },
    {
      path: '*', component: NotFoundPage
    }
  ]
})
