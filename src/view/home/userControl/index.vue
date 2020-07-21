<template>
  <div class="userControl">
    <section>
      <div>今日赛事</div>
      <div>
        <!-- <ul>
          <li v-for="(item,index) in imgs" :key="index">
            <img :src="item.value" alt="">
          </li>
        </ul> -->

        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="(item,index) in imgs" :key="index">
            <img :src="item.value" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'userControl',
  data() {
    return {
      imgs: [
        {
          value: require('../../../assets/img/allHeadImg/dazui.png')
        },
        {
          value: require('../../../assets/img/allHeadImg/guangtou.png')
        },
        {
          value: require('../../../assets/img/allHeadImg/juemu.png')
        },
        {
          value: require('../../../assets/img/allHeadImg/laotou.png')
        },
        {
          value: require('../../../assets/img/allHeadImg/luxian.png')
        },
        {
          value: require('../../../assets/img/allHeadImg/maomi.png')
        },
        {
          value: require('../../../assets/img/allHeadImg/meinan.png')
        },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.userControl {

}
.el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>