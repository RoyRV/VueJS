<template>
  <div>
    <ul>
      <li v-for="obj in arreglo" :key="obj">{{obj}}</li>
    </ul>
    <span>{{valor}}</span>
  </div>
</template>

<script src="./Test.component.js"></script>
<style src="./Test.component.css" scoped></style>
