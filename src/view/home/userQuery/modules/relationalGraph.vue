<template>
  <div>
    <el-dialog :visible.sync="mapShow" title="英雄详情" width="1000px" @close="close">
      <section class="heroDetail">
        <div class="detailContent">
          <div style="display: flex">
            <span class="head"><img :src="obj.head" alt=""></span>
            <span class="name">
              {{obj.resone}}: {{obj.pepole}}
              <span class="location">定位: {{obj.location}}</span>
            </span>
          </div>
          <ul class="attribute">
            <li v-for="(i,k) in obj.attributeList" :key="k">
              <div 
              :class="{'lifeValue': i.key == '生命','attack': i.key == '攻击','defense': i.key == '防御','toughness': i.key == '韧性'}">
                <span>{{i.key}}：</span> 
                <span :style="{width: i.value + 'px'}"></span>
                <span>{{i.value}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="echarts">
          <div id="myChart" :style="{width: '350px', height: '300px'}"></div>
        </div>
      </section>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapShow: false,
      obj: {}
    }
  },
  methods: {
    open(row) {
      this.obj = row
      this.mapShow = true
      this.$nextTick(_ =>{
        this.drawLine()
      })
    },
    drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
            title: { text: `${this.obj.resone}：${this.obj.pepole} 各期表现` },
            tooltip: {},
            xAxis: {
                data: ["前期","前中期","中期","中后期","后期"]
            },
            yAxis: {},
            series: [{
                type: 'line',
                data: this.obj.performance,
                smooth: true
            }]
        });
    },
    close() {
      this.obj = {}
      this.mapShow = false
    } 
  },
}
</script>

<style lang="less" scoped>
.heroDetail {
  display: flex;
  text-align: left;
  .detailContent {
    width: 50%;
    padding-left: 40px;
    .head {
      margin-right: 20px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
    .name {
      margin-top: 20px;
      font-size: 17px;
      color: #333333;
      font-weight: bold;
      background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(230, 100, 100, 1)), to(rgba(0, 0, 0, 1)));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 5px 5px 5px rgba(230, 100, 100, 1);
      .location {
        display: block;
        margin-top: 20px;
        color: #000000;
        font-weight: bold;
      }
    }
    .attribute {
      font-size: 15px;
      padding: 10px;
      li{
        margin: 7px;
        .lifeValue {
          color: rgba(154, 226, 46, 1);
          span:nth-last-of-type(2){
            display: inline-block;
            height: 7px;
            background: rgba(154, 226, 46, 1);
            /* animation: lifeValues 2s forwards; */
          }
          @keyframes lifeValues {
            from {width: 0px;}
            to {width: 200px;}
          }
        }
        .attack {
          color: rgba(230, 100, 100, 1);
          span:nth-last-of-type(2){
            display: inline-block;
            height: 7px;
            background: rgba(230, 100, 100, 1);
            /* animation: attacks 2s forwards; */
          }
          @keyframes attacks {
            from {width: 0px;}
            to {width: 180px;}
          }
        }
        .defense {
          color: rgba(167, 40, 34, 1);
          span:nth-last-of-type(2){
            display: inline-block;
            height: 7px;
            background: rgba(167, 40, 34, 1);
            /* animation: defenses 2s forwards; */
          }
          @keyframes defenses {
            from {width: 0px;}
            to {width: 300px;}
          }
        }
        .toughness {
          color: rgba(39, 105, 186, 1);
          span:nth-last-of-type(2){
            display: inline-block;
            height: 7px;
            background: rgba(39, 105, 186, 1);
            /* animation: toughnesses 2s forwards; */
          }
          @keyframes toughnesses {
            from {width: 0px;}
            to {width: 280px;}
          }
        }
      }
    }
  }
}
</style>