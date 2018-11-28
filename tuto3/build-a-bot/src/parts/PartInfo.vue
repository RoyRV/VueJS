<template>
  <div>
    <div v-if="part">
      <h1>{{part.title}}</h1>
      <div>{{part.description}}</div>
    </div>
    <div v-if="!part">
      <h1>No Part available</h1>
    </div>
  </div>
</template>

<script>
import parts from "../data/parts";
export default {
  name: "PartInfo",
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      }
    }
  },
  computed: {
    part() {
      let partType = this.$route.params.partType;
      let id = this.$route.params.id;
      let listOfParts  = parts[partType];
      if(listOfParts)
        return listOfParts.find(part => part.id == Number(id));
      return null;
    }
  }
};
</script>

<style>
</style>
