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
          <span v-if="!onlyIcons">TEST MENU TITLE</span>
          <vs-button
            class="fix-menu-button"
            @click="onlyIcons=!onlyIcons"
            icon="radio_button_unchecked"
          />
        </div>

        <vs-sidebar-item
          index="1"
          icon="question_answer"
        >
          <router-link :to="{name:'Test'}">
            <span>Dashboard</span>
          </router-link>
        </vs-sidebar-item>

        <vs-sidebar-item
          index="2"
          icon="gavel"
        >
          <router-link :to="{name:'Home'}">
            <span>Attributes</span>
          </router-link>
        </vs-sidebar-item>

        <vs-sidebar-item
          index="3"
          icon="gavel"
        >
          <router-link :to="{name:'Help'}">
            <span>Help</span>
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
export default {
  name: "app",
  data: () => ({
    active: false,
    windowWidth: window.innerWidth,
    onlyIcons: false
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
