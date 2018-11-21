<template>
    <div class="content">
        <button class="add-to-cart" v-on:click="addToCart()" >
            Agregar
        </button>
    <div class="top-row">
      <div class="top part" :class="{'sale-border':selectedRobot.head.onSale}">
          <div class="robot-name">
                {{selectedRobot.head.title}}
                <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
          </div>
        <img v-bind:src="selectedRobot.head.src" title="head"/>
        <button class="prev-selector"
                v-on:click="selectPreviousHead()">&#9668;
        </button>
        <button class="next-selector"
                v-on:click="selectNextHead()">&#9658;
        </button>
      </div>
    </div>
    <div class="middle-row">
      <div class="left part">
        <img v-bind:src="selectedRobot.leftArm.src" title="left arm"/>
        <button class="prev-selector"
        v-on:click="selectPreviousLeftArm()">&#9650;
        </button>
        <button class="next-selector"
         v-on:click="selectNextLeftArm()">&#9660;
         </button>
      </div>
      <div class="center part">
        <img v-bind:src="selectedRobot.torso.src"  title="left arm"/>
        <button class="prev-selector"  v-on:click="selectPreviousTorso()">&#9668;</button>
        <button class="next-selector"  v-on:click="selectNextTorso()">&#9658;</button>
      </div>
      <div class="right part">
        <img  v-bind:src="selectedRobot.rightArm.src"  title="left arm"/>
        <button class="prev-selector"  v-on:click="selectPreviousRightArm()">&#9650;</button>
        <button class="next-selector"  v-on:click="selectNextRightArm()">&#9660;</button>
      </div>
    </div>
    <div class="bottom-row">
      <div class="bottom part" :style="headBorderStyle">
        <img  v-bind:src="selectedRobot.base.src" title="left arm"/>
        <button class="prev-selector" v-on:click="selectPreviousBase()">&#9668;</button>
        <button class="next-selector" v-on:click="selectNextBase()">&#9658;</button>
      </div>
    </div>
      <div >
          <h1>Cart</h1>
          <div style="text-alingn:center">
          <table>
              <thead>
                  <tr>
                      <th>Robot</th>
                      <th class="cost">Cost</th>
                  </tr>
              </thead>
            <tbody>
                <tr v-for="(robot,index) in cart" :key="index">
                    <td>{{robot.head.title}}</td>
                    <td>{{robot.cost}}</td>
                </tr>
            </tbody>
          </table></div>
      </div>
  </div>
</template>

<script>
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
</script>

<style lang="scss">
.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.part {
  position: relative;
  width: 165px;
  height: 165px;
  border: 3px solid #aaa;
  img {
    width: 165px;
  }
}

.top-row {
  display: flex;
  justify-content: space-around;
}
.middle-row {
  display: flex;
  justify-content: center;
}
.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}
.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 171px;
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 171px;
}
.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}
.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 144px;
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 144px;
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.sale {
  color: red;
}
.content {
  position: relative;
}
.add-to-cart {
  position: absolute;
  right: 30px;
  width: 220px;
  padding: 3px;
  font-size: 16px;
}
.sale-border {
  border: 3px solid red;
}
</style>
