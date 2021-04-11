<template>
  <div>
    <tab-bar>
      <!-- 给组件tabbaritem添加传递一个属性（父传子）传递的是对象了用v-bind，一个简单的数据，就不需要了 -->
      <tab-bar-item path='/home' colorStyle='gold'>
        <template #img>
          <img src='~assets/img/index/index.svg' alt='' />
        </template>
        <template #img2
          ><img src='~assets/img/index/index-active.svg' alt=''
        /></template>
        <template v-slot:title><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path='/store' colorStyle='violet'>
        <template v-slot:img>
          <img src='~assets/img/store/store-active.svg' alt='' />
        </template>
        <template v-slot:img2
          ><img src='~assets/img/store/store.svg' alt=''
        /></template>
        <template v-slot:title><div>商店</div></template>
      </tab-bar-item>
      <tab-bar-item path='/me' colorStyle='orange'>
        <template v-slot:img>
          <img src='~assets/img/me/me-active.svg' alt='' />
        </template>
        <template v-slot:img2
          ><img src='~assets/img/me/me.svg' alt=''
        /></template>
        <template v-slot:title><div>我</div></template>
      </tab-bar-item>
      <tab-bar-item path='/config' colorStyle='deeppink'>
        <template v-slot:img>
          <img src='~assets/img/config/config-active.svg' alt='' />
        </template>
        <template v-slot:img2
          ><img src='~assets/img/config/config.svg' alt=''
        /></template>
        <template v-slot:title><div>设置</div></template>
      </tab-bar-item>
      <tab-bar-item path='/video'>
        <template v-slot:img>
          <img src='~assets/img/video/video-active.svg' alt='' />
        </template>
        <template v-slot:img2
          ><img src='~assets/img/video/video.svg' alt=''
        /></template>
        <template v-slot:title><div>直播</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from 'components/common/tabbar/TabBarItem'
import TabBar from 'components/common/tabbar/TabBar'
export default {
  name: 'TabBarOver',
  components: { TabBarItem, TabBar },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
</style>
