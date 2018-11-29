import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/components/Test/Test.vue'
import RobotBuilder from '../build/RobotBuilder/RobotBuilder.vue';
import PartInfo from "../parts/PartInfo/PartInfo.vue";
import BrowseParts from '../parts/BrowseParts/BrowseParts.vue';

import RobotHeads from "../parts/RobotHeads/RobotHeads.vue";
import RobotTorsos from "../parts/RobotTorsos/RobotTorsos.vue";
import RobotArms from "../parts/RobotArms/RobotArms.vue";
import RobotBases from "../parts/RobotBases/RobotBases.vue";

import SidebarStandard from "../sidebars/SidebarStandard.vue";
import SidebarBuild from "../sidebars/SidebarBuild.vue";

import ShoppingCart from '../cart/ShoppingCart/ShoppingCart.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            components: {
                default: HomePage,
                sidebar: SidebarStandard
            }
        },
        {
            path: '/build',
            name: 'Build',
            components: {
                default: RobotBuilder,
                sidebar: SidebarBuild
            }
        },
        {
            path: '/parts/browse',
            name: 'BrowseParts',
            component: BrowseParts,

            children: [
                {
                    path: 'heads',
                    name: 'BrowseHeads',
                    component: RobotHeads
                },
                {
                    path: 'torsos',
                    name: 'BrowseTorsos',
                    component: RobotTorsos
                },
                {
                    path: 'bases',
                    name: 'BrowseBases',
                    component: RobotBases
                },
                {
                    path: 'arms',
                    name: 'BrowseArms',
                    component: RobotArms
                },
            ]
        },
        {
            path: '/parts/:partType/:id',
            name: 'Parts',
            component: PartInfo,
            props: true,
            beforeEnter(to, from, next) {
                let isValidId = Number.isInteger(Number(to.params.id));
                next(isValidId);
            }
        },
        {
            path :'/cart',
            name : 'Cart',
            component : ShoppingCart
        }
    ]
})