<template>
  <div id="app">
    <div>
      <h1>Root foo : {{rootFoo}}</h1>
      <h2>Robot foo : {{robotsFoo}}</h2>
      <h3>Users foo : {{usersFoo}}</h3>
      <br/>
      <h1>Root Getter foo : {{rootGetterFoo}}</h1>
      <h2>Robot Getter foo : {{robotsGetterFoo}}</h2>
      <h3>Users Getter foo : {{usersGetterFoo}}</h3>
    </div>
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link exact class="nav-link" :to="{name:'Home'}">
              <img class="logo" src="./assets/build-a-bot-logo.png">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link exact class="nav-link" :to="{name:'Build'}">build</router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" :to="{name:'Cart'}">Cart</router-link>
            <div class="cart-items">{{cart.length}}</div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <!-- <dashboard></dashboard> -->
        <!-- <Test /> -->
        <!-- <RobotBuilder /> -->
        <router-view/>
      </main>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    rootFoo(){
      return this.$store.state.foo;
    },
    robotsFoo(){
      return this.$store.state.robots.foo;
    },
    usersFoo(){
      return this.$store.state.users.foo;
    },
    rootGetterFoo(){
      return this.$store.getters.foo;
    },
    robotsGetterFoo(){
      return this.$store.getters['robots/foo'];
    },
    usersGetterFoo(){
      return this.$store.getters['users/foo'];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
main {
  background-color: white;
  width: 964px;
  padding: 30px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  /* display: flex; */
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.cart {
  position: absolute;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}
</style>
 