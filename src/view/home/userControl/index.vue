<template>
  <div class="userControl">
    <section>
      <div class="title">今日赛事</div>
      <div class="contents">
        <el-carousel :interval="1000" type="card" height="300px" @change="loop()">
          <el-carousel-item v-for="(item,index) in imgs" :key="index">
            <figure>
              IG对战OMG
            </figure>
            <img :src="item.value" alt="" style="width: 100%;height: 100%" @click="openDetail(item)">
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
      count: 0,
      imgs: [
        {
          value: require('../../../assets/img/德莱文.jpg'),
          name: '德莱文'
        },
        {
          value: require('../../../assets/img/德玛.jpg'),
          name: '盖伦'
        },
        {
          value: require('../../../assets/img/皇子.jpg')
        },
        {
          value: require('../../../assets/img/剑圣.jpg'),
          name: '嘉文四世'
        },
        {
          value: require('../../../assets/img/蛮王.jpg'),
          name: '泰达米尔'
        },
        {
          value: require('../../../assets/img/男刀.jpg'),
          name: '泰隆'
        },
        {
          value: require('../../../assets/img/诺克.jpg'),
          name: '德莱厄斯'
        },
        {
          value: require('../../../assets/img/铁男.jpg'),
          name: '莫德凯撒'
        },
        {
          value: require('../../../assets/img/武器.jpg'),
          name: '贾克斯'
        },
        {
          value: require('../../../assets/img/赵兴.jpg'),
          name: '赵兴'
        },
      ]
    }
  },
  methods: {
    loop() {
      this.count++
      console.log(this.count)
    },
    openDetail(data) {
      console.log(data)
    },
  }
}
</script>

<style lang="less" scoped>
.userControl {
  .title {
    background: #EEF3FF;
    padding: 15px 0 15px 20px;
    text-align: left;
    font-size: 18px;
    color: #409EFF;
  }
  .contents {
    margin-top: 10px;
    background: #fff;
  }
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