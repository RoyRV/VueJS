import availableParts from "../data/parts.js";
export default {
  name: "RobotBuilder",
  mounted() {
    console.log("component mounted");
  },
  created() {
    console.log("component created")
  },
  components: {
    PartSelector
  },
  data() {
    return {
      availableParts,
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
  methods: {
    addToCart() {
      const robot = this.selectedRobot;
      const cost =
        robot.head.cost +
        robot.leftArm.cost +
        robot.rightArm.cost +
        robot.torso.cost +
        robot.base.cost;
      let _robot = Object.assign({}, robot, { cost });
      this.cart.push(_robot);
    },
    handlePartSelected(){
      console.log("handlePartSelected");
    }
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid blue"
      };
    }
  }
};