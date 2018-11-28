
import axios from 'axios';

const baseURL = "/api/";

export default {
    namespaced: true,
    state: {
        cart: [],
        parts: null,
        foo : 'robots-foo',
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
        addRobotToCart({commit,state},robot){
            let url = baseURL + "cart";
            let cart = [...state.cart,robot];
            return axios.post(url,cart)
                .then(()=>{
                    commit('addRobotToCart',robot);
                })
        }
    },
    getters: {
        cartSaleItems(state) {
            return state.cart.filter(item => item.head.onSale);
        },
        foo(state){
            return `robots-getter/${state.foo}`;
          }
    }
}