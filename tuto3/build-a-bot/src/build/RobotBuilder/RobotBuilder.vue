<template src="./RobotBuilder.template.html"></template>
<style lang="scss" src="./RobotBuilder.scss"></style>

<script>
import PartSelector from "../components/PartSelector/PartSelector.vue";
import CollapsibleSection from '../../shared/CollapsibleSection/CollapsibleSection.vue';
import  { mapActions } from 'vuex';
export default {
  name: "RobotBuilder",
  // props : {};
  components: {
    PartSelector,
    CollapsibleSection
  },
  data() {
    return {
      addedToCart : false,
      cart: [],
      selectedRobot: {
        head: {},
        leftArm: {},
        rightArm: {},
        torso: {},
        base: {}
      }
    };
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid blue"
      };
    },
    availableParts(){
      // console.log("robot-builder-available");
      let parts = this.$store.state.robots.parts;
      // console.log("parts",parts);
      return parts;
    }
  },
  methods: {
    ...mapActions('robots',['getParts','addRobotToCart']),
    addToCart() {
      this.addedToCart=true;
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      let _robot = Object.assign({}, robot, { cost });
      // this.cart.push(_robot);

      // this.$store.dispatch('robots/addRobotToCart',_robot)
      this.addRobotToCart(_robot)
        .then(()=>{
          this.$router.push('/cart');
        });
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart)
      next(true);
    else {
      /* eslint no-alert: 0*/
      /* eslint no-restricted-global: 0*/
      let response = confirm('Quiere irse?');
      if (response)
        next(true);
    }
  }, 
  mounted() {
    // console.log("component mounted");
  },
  created() {
    // console.log("component created");
    // this.$store.dispatch('robots/getParts');
    this.getParts();
  },
};
</script>