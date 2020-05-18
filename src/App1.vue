<template>
  <div id="app1">
    <div class="sidebar">
      <!-- sidebar component -->
      <div
        class="sub-menu"
        @click="setActive(index)"
        :class="{'sub-menu-active':items.active}"
        v-for="(items,index) in menu"
        :key="index"
      >
        <p>{{items.name}}</p>
      </div>
    </div>
    <div class="topbar">
      <p class="brand1">LOGO</p>
      <p class="brand">logout</p>
      
    </div>
    <!-- doing some change -->
    <div class="inner-content">
      <order v-if="this.menu[0].active" />
      <technician v-if="this.menu[1].active" />
      <analytics v-if="this.menu[2].active" />
      <addtonewsite v-if="this.menu[3].active" />
      <profile v-if="this.menu[4].active" />
    </div>
  </div>
</template>

<script>
import order from "@/components/pages/order";
import technician from "@/components/pages/technician";
import analytics from "@/components/pages/analytics";
import addtonewsite from "@/components/pages/addtonewsite";
import profile from "@/components/pages/profile";

export default {
  name: "App",
  data() {
    return {
      menu: [
        { name: "ORDER", active: true },
        { name: "TECHNICIAN", active: false },
        { name: "ANALYTICS", active: false },
        { name: "ADD TO NEW SITE", active: false },
        { name: "PROFILE", active: false }
      ]
    };
  },
  components: {
    order,
    technician,
    analytics,
    addtonewsite,
    profile
  },
  methods: {
    setActive(index) {
      for (var a = 0; a < this.menu.length; a++) {
        this.menu[a].active = false;
      }
      this.menu[index].active = true;
    }
  }
};
</script>
<style scoped>
.inner-content {
  position: absolute;
  height: calc(100vh - 71px);
  width: calc(100vw - 303px);
  top: 71px;
  left: 303px;
  z-index: 5;
}
.brand1 {
  float: left;
  font-size: 1.3rem;
  padding-left: 2rem;
}
.brand{
  float: right;
  font-size:1.3rem;
  padding-right: 2rem;
}
.sidebar {
  padding-top: 8rem;
  height: calc(100vh - 75px - 8rem);
  position: absolute;
  left: 0;
  top: calc(71px);
  width: 303px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000069;
  border: 1px solid #e4e4e4;
  z-index: 1;
}
.topbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #bbecff;
  height: 71px;
  z-index: 2;
}
.sub-menu-active {
  width: calc(302px - 12px) !important;
  border: 0 !important;
  background: transparent linear-gradient(270deg, #fefefe 0%, #b9ecff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #80808057;
  border-left: 12px solid black !important;
  transition: 0.4s all ease-out;
}
.sub-menu {
  width: 302px;
  height: 72px;
  box-shadow: 0px 3px 6px #80808057;
  border: 1px solid #f1f1f1;
  text-align: left;
  margin-top: 10px;
  position: relative;
  cursor: pointer;
}
.sub-menu:hover {
  background-color: #bee5ec;
  font-weight: 900 !important;
  border: 0;
}
.sub-menu > p {
  padding-left: 1rem;
  position: absolute;
  top: 32%;
  transform: translate(0, -50%);
  font-weight: 600;
}
</style>
<style>
#app1 {
  position: absolute;
  top: 0 !important;
  left: 0 !important;
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
</style>
