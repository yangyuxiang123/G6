<template>
  <div class="heroImage">
    <div class="search">
      <el-form :model="searchMode" :inline="true" style="text-align: left;"> 
        <el-form-item label="搜索英雄">
          <el-input v-model="searchMode.name" placeholder="请输入英雄名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="allhero">
      <div class="title">
        <p>所有英雄</p>
      </div>
      <div class="heroContent">
        <template v-for="(hero,index) in heroAll">
          <el-row :key="index" style="margin-left: 10px;margin-bottom: 10px;">
          <el-col class="block">
            <el-popover placement="right" title trigger="hover">
              <el-image slot="reference" style="width: 95px; height: 95px" :src="hero.head"></el-image>
              <div class="demonstration">
                <p>{{ `外号人称：${hero.name}` }}</p>
                <p>{{ `最近改动：${hero.changes}` }}</p>
              </div>
            </el-popover>
            <div class="demonstration">{{ hero.name }}</div>
          </el-col>
        </el-row>
        </template>
        
      </div>
    </div>
  </div>
</template>

<script>
import { heroAll } from '../../../components/dataSource/index'
export default {
  data() {
    return {
      searchMode: {},
      heroAll
    }
  }
}
</script>

<style lang="less" scoped>
.heroImage {
  .search {
    padding: 12px 0 12px 20px;
    margin-top: 10px;
    background: #ffffff;
  }
  .allhero {
    background: #ffffff;
    .title{
      background: #EEF3FF;
      p{
        padding: 15px 0 15px 20px;
        text-align: left;
        font-size: 18px;
        color: #409EFF;
      }
    }
    .heroContent {
      display: flex;
      padding: 20px 0 0px 30px;
      text-align: center;
      flex-wrap: wrap;
      .block {
        cursor: pointer;
        .demonstration {
          font-size: 13px;
          color: #333333;
        }
      }
    }
  }
}
</style>