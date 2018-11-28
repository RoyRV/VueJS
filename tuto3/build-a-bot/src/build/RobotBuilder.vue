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

<script src="./RobotBuilder.js"></script>

<style lang="scss" src="./RobotBuilder.scss"></style>
