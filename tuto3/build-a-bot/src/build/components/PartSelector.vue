<template>
    <div class="part" :class="position">
    <img :src="selectedPart.src" title="arm"/>
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

 <script src="./PartSelector.js"></script> 
<!--
<script>
import availableParts from '../data/parts';
const parts = availableParts.heads;
function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}
export default {
  data() {
    return { selectedPartIndex: 0 };
  },
  computed: {
    selectedPart() {
      return parts[this.selectedPartIndex];
    },
  },
  methods: {
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        parts.length,
      );
    },
    selectPreviousPart() {
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
        parts.length,
      );
    },
  },
};
</script>
-->

<style src="./PartSelector.css"></style>