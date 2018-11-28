import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// const baseURL = "/api/";
const baseURL = "/api/";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        parts: null,
    },
    mutations: {
        addRobotToCart(state, robot) {
            state.cart.push(robot);
        },
        updateParts(state, parts) {
            state.parts = parts;
        }
    },
    actions: {
        getParts({ commit }) {
            let url = baseURL + "parts";
            axios.get(url)
                .then(result => commit('updateParts', result.data))
                .catch(console.error);
        },
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(item => item.head.onSale);
        }
    }
});