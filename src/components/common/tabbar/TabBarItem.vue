<template>
  <div id="tabbaritem" @click="clickItem">
    <div v-if="isShow"><slot name="img"></slot></div>
    <!--  v-if='isShow' 加不加引号都可以-->
    <div v-else><slot name="img2"></slot></div>
    <div :style=colors><slot name="title"></slot></div>
    <!-- <span>{{ getPath }}</span> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    show: String,
    path: String,
    colorStyle: { type: String, default: "red" },
  },
  data() {
    return {
      // link: ["/index", "/store", "/activity", "/me"],
      //  show:false
    };
  },
  mounted() {},
  computed: {
    getPath() {
      // console.log(this.path);
      return this.path;
    },
    colors() {
      return this.isShow?{color:this.colorStyle}:{}
    },
    isShow() {
      console.log(this.$route.path);
      console.log(this.path);
      // console.log(this.$route.path === this.path);
      return this.$route.path === this.path;
    },
  },
  methods: {
    clickItem() {
      // this.show=false;
      // console.log(this.path);
      // console.log(this.$route);
      this.$router.push(this.path);
    },
  },
};
</script>
<style  scoped>
#tabbaritem {
  flex: 1;
}
.active {
  color: red;
}
</style>