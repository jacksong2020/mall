<template>
  <div>
    <tab-bar-over></tab-bar-over>
    <router-view />
  </div>
</template>
<script>
import TabBarOver from 'components/content/AllTabBar/TabBarOver'
export default {
  components: { TabBarOver }
}
</script>
<style>
</style>
