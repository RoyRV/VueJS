<template>
  <div class="main-container">
    <div class="menu-container">
      <vs-sidebar
        v-bind:static-position="!isMobile()"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
        v-bind:reduce="onlyIcons"
      >
        <div class="header-sidebar">
          <span v-if="!onlyIcons">Cloudbox</span>
          <vs-button
            class="fix-menu-button"
            @click="onlyIcons=!onlyIcons"
            v-bind:icon="!onlyIcons ? 'chevron_left' : 'chevron_right'"
            v-if="!isMobile()"
          />
        </div>

        <vs-sidebar-item
          v-for="(menuItem, index) in MenuList"
          v-bind:key="index"
          v-bind:index="index + 1"
          v-bind:icon="menuItem.icon"
        >
          <router-link :to="{name:menuItem.routeName}">
            <span>{{menuItem.menuTtitle}}</span>
          </router-link>
        </vs-sidebar-item>

        <div
          class="footer-sidebar"
          slot="footer"
        >
        </div>
      </vs-sidebar>
    </div>
    <div class="body-container">
      <div class="top-bar">
        <div class="left-side">
          <vs-button
            @click="active=!active"
            class="hamburger-button"
            type="filled"
            v-if="isMobile()"
            icon="menu"
          />
        </div>
        <div class="right-side">
          <vs-button icon="settings" />
          <vs-button
            icon="reply"
            id="logout-button"
          />
        </div>
      </div>
      <div class="main-content">
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuList } from "./utils/menuList";

export default {
  name: "app",
  data: () => ({
    active: false,
    windowWidth: window.innerWidth,
    onlyIcons: false,
    MenuList: MenuList
  }),
  methods: {
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
    },
    isMobile() {
      return this.windowWidth < 993;
    }
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  }
};
</script>

<style src="./App.css"></style>
