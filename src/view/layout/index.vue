<template>
  <div class="contentsBackground">
    <div class="top">
      <Top></Top>
    </div>
    <div class="contents">
      <div class="menuBar">
        <Menu></Menu>
      </div>
      <div class="viewRouter">
        <el-scrollbar wrap-class="layout-scroll">
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Top from './module/top'
import Menu from './module/menu'
export default {
  data() {
    return {
      seachList: {
        
      }
    }
  },
  components: {
    Top,
    Menu
  }
}
</script>

<style lang="less" scoped>
.contentsBackground{
  background: #F1F2F7;
}
.top{
  min-width: 1200px;
}
.contents{
  display: flex;
  .menuBar {
    width: 12.5%;
    min-width: 240px;
    height: calc(100vh - 49px);
    background: #373B46;
  }
  .viewRouter{
    box-sizing: border-box;
    position: absolute;
    top: 39px;
    right: 0;
    bottom: 0;
    left: 250px;
    transition: all .3s linear;
    .layout-scroll {
      height: calc(100vh + 16px - 60px);
      background-color: #F6F9FB;
      box-sizing: border-box;
    }
  }
}

</style>

