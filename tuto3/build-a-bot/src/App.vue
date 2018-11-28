<template>
  <div id="app">
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
            <router-link exact class="nav-link" :to="{name:'Build'}">
            build
            </router-link>
          </li> 
        </ul>
      </nav>
    </header>
    <main>
      <!-- <dashboard></dashboard> -->
      <!-- <Test /> -->
      <!-- <RobotBuilder /> -->
      <router-view/>
    </main>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
export default {
  name: "app"
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
  margin: 0, auto;
  padding: 30px;
}
header {
  background-color: #999;
  width: 1084px;
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
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color:inherit;
}
.router-link-active{
  color:white;
}
</style>
