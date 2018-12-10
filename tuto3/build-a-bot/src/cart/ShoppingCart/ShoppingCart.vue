<template src='./ShoppingCart.html'></template>
<style scoped src='./ShoppingCart.css'></style>

<script>
// import currencyFilter from '../../shared/filters/currency-filter';
export default {
  name: "Cart",
  // filters : {
  //   currency : currencyFilter
  // },
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters["robots/cartSaleItems"];
    }
  }
};
</script>