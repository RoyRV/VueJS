<template src='./PartSelector.html'></template>
<style src="./PartSelector.css"></style>
 
<script> 
function getPreviousValidIndex(index, length) {
    const deprecatedIndex = index - 1;
    return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValidIndex(index, length) {
    const incrementedIndex = index + 1;
    return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}
import pinDirective from '../../../shared/directives/pin-directive'
export default {
    directives : {
        pin : pinDirective
    },
    props: {
        'parts': {
            type: Array,
            required: true
        },
        'position': {
            type: String,
            required: true,
            validator: (value) => {
                return ['left', 'right', 'top', 'center', 'bottom'].includes(value);
            }
        }
    },
    name: "PartSelector",
    data() {
        return { selectedPartIndex: 0 };
    },
    computed: {
        selectedPart() {
            return this.parts[this.selectedPartIndex];
        },
    },
    created(){
        this.emitSelectedPart();
    },
    updated(){
        this.emitSelectedPart();
    },
    methods: {
        emitSelectedPart() {
            this.$emit('partSelected',this.selectedPart);
        },
        selectNextPart() {
            this.selectedPartIndex = getNextValidIndex(
                this.selectedPartIndex,
                this.parts.length,
            );
        },
        selectPreviousPart() {
            this.selectedPartIndex = getPreviousValidIndex(
                this.selectedPartIndex,
                this.parts.length,
            );
        },
        showPartInfo(){
            this.$router.push({
                name: 'Parts',
                params:{
                    id:this.selectedPart.id,
                    partType:this.selectedPart.type
                }
            });
        },
    },
};
</script>

