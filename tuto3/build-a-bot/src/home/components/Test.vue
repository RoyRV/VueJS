<template>
  <div>
    <ul>
      <li v-for="obj in arreglo" :key="obj">{{obj}}</li>
    </ul>
    <span>{{valor}}</span>
    <div class="get-started">
      <router-link to="/build">
      Vamos a buildear
      </router-link>
    </div>
  </div>
</template>

<script src="./Test.js"></script>
<style src="./Test.css" scoped></style>
