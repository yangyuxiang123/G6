<template>
  <div class="contentsBackground">
    <div class="top">
      <Top></Top>
    </div>
    <div class="contents">
      <div class="menuBar">
        <Menu />
      </div>
      <div class="viewRouter">
        <div class="viewContent">
          <router-view/>
        </div>
      </div>
    </div>
    <!-- <div class="page-content fl">
      <div class="m-scrollbar-box">
        <el-scrollbar :native="false">
          <transition name="el-fade-in-linear" mode="out-in">
            <keep-alive>
              
            </keep-alive>
          </transition>
        </el-scrollbar>
      </div>
    </div> -->
  </div>
</template>

<script>
import Top from './module/top'
import Menu from './module/menu'
export default {
  data() {
    return {

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
    width: calc(100vw - 245px);
    margin-left: 5px;
    .viewContent{
      padding-right: 15px;
    }
  }
}

</style>

