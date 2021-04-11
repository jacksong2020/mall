<template>
  <div id="tabbar"><slot></slot></div>
</template>

<script>
// import TabBarItem from "./TabBarItem.vue";
export default {
  name: "TabBar",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
#tabbar {
  background-color: aqua;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  font-size: 16px;
  text-align: center;
}
</style>