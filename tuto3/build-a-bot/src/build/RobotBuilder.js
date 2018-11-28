import availableParts from "../data/parts.js";
function getPreviousValidIndex(index, length) {
  let deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}
function getNextValidIndex(index, length) {
  let incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}
export default {
  name: "RobotBuilder",
  mounted(){
      console.log("component mounted");
  },
  created(){
      console.log("component created")
  },
  data() {
    return {
      availableParts,
      selectedHeadIndex: 0,
      selectedLeftArmIndex: 0,
      selectedRightArmIndex: 0,
      selectedTorsoIndex: 0,
      selectedBaseIndex: 0,
      cart: []
    };
  },
  methods: {
    selectNextHead() {
      this.selectedHeadIndex = getNextValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length
      );
    },
    selectPreviousHead() {
      this.selectedHeadIndex = getPreviousValidIndex(
        this.selectedHeadIndex,
        availableParts.heads.length
      );
    },
    selectNextLeftArm() {
      this.selectedLeftArmIndex = getNextValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length
      );
    },
    selectPreviousLeftArm() {
      this.selectedLeftArmIndex = getPreviousValidIndex(
        this.selectedLeftArmIndex,
        availableParts.arms.length
      );
    },
    selectNextRightArm() {
      this.selectedRightArmIndex = getNextValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length
      );
    },
    selectPreviousRightArm() {
      this.selectedRightArmIndex = getPreviousValidIndex(
        this.selectedRightArmIndex,
        availableParts.arms.length
      );
    },
    selectNextTorso() {
      this.selectedTorsoIndex = getNextValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length
      );
    },
    selectPreviousTorso() {
      this.selectedTorsoIndex = getPreviousValidIndex(
        this.selectedTorsoIndex,
        availableParts.torsos.length
      );
    },
    selectNextBase() {
      this.selectedBaseIndex = getNextValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length
      );
    },
    selectPreviousBase() {
      this.selectedBaseIndex = getPreviousValidIndex(
        this.selectedBaseIndex,
        availableParts.bases.length
      );
    },
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
    }
  },
  computed: {
    headBorderStyle() {
      return {
        border: this.selectedRobot.head.onSale
          ? "3px solid red"
          : "3px solid blue"
      };
    },
    selectedRobot() {
      return {
        head: availableParts.heads[this.selectedHeadIndex],
        leftArm: availableParts.arms[this.selectedLeftArmIndex],
        rightArm: availableParts.arms[this.selectedRightArmIndex],
        torso: availableParts.torsos[this.selectedTorsoIndex],
        base: availableParts.bases[this.selectedBaseIndex]
      };
    }
  }
};