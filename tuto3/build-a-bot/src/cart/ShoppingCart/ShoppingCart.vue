<template src='./ShoppingCart.html'></template>
<style scoped src='./ShoppingCart.css'></style>

<script>
export default {
  name: "Cart",
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