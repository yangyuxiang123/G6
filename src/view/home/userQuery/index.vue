<template>
  <div class="homePage">
    <div class="search">
      <el-form :model="searchMode" :inline="true"> 
        <el-form-item label="日期">
          <el-date-picker v-model="searchMode.startDate" type="date" :picker-options="pickerOptions1" placeholder="选择开始日期"></el-date-picker> - 
          <el-date-picker v-model="searchMode.endDate" type="date" :picker-options="pickerOptions2" placeholder="选择结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="用户">
          <el-input v-model="searchMode.name" placeholder="请输入用户名" clearable></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input 
            clearable
            v-model="searchMode.phone" 
            type="number" 
            oninput="if(value.length>11)value=value.slice(0,11)" 
            onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
            placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="checkMixin">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="title">
      <p>用户查询</p>
    </div>
    <div class="table">
      <el-table :data="herolist" border>
        <el-table-column align='center' type="index" label="序号" width="100"></el-table-column>
        <el-table-column align='center' label="用户" prop="pepole"></el-table-column>  
        <el-table-column align='center' label="头像" prop="head">
          <template slot-scope="scope">
            <el-popover placement="right" title trigger="hover">
              <img 
              :src="scope.row.head" 
              style="height: 250px;width: 500px;cursor: pointer" />
              <img
                slot="reference"
                :src="scope.row.head"
                style="width: 50px;height: 30px;cursor: pointer"
              />
            </el-popover>
          </template>
        </el-table-column>  
        <el-table-column align='center' label="性别" prop="sex"></el-table-column>
        <el-table-column align='center' label="手机号" prop="phone"></el-table-column>
        <el-table-column align='center' label="对战日期" prop="date"></el-table-column>
        <el-table-column align='center' label="地址" prop="home">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" :content="scope.row.home" placement="right-end" v-if="scope.row.home.length > 11">
              <p class="overflowText">{{scope.row.home}}</p>
            </el-tooltip>
            <p v-else>{{scope.row.home}}</p>
          </template>
        </el-table-column>
        <el-table-column align='center' label="爱好" prop="like"></el-table-column>
        <el-table-column align='center' label="用户描述" prop="resone"></el-table-column>
        <el-table-column align='center' label="胜率" prop="winRate"></el-table-column>
        <el-table-column align='center' label="操作" prop="helthey">
          <template slot-scope="scope">
            <el-button type="text" id="buttonText" @click="handleClickDetails(scope.row)" size="small">详情</el-button>
            <el-button type="text" id="buttonText" @click="handleClickEdit(scope.row)" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pager.currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pager.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pager.total">
    </el-pagination>

    <RelationalGraphs ref="relationalGraph"></RelationalGraphs>
  </div>
</template>

<script>
import { herolist } from '../../../components/dataSource/index'
import RelationalGraphs from './modules/relationalGraph'
import testMethod from '../../../components/mixins/_tables'
/* import * as testMethod from '../../../components/mixins/_tables' */
export default {
  data() {
    return {
      pickerOptions1:{
        disabledDate: (value) => {
          if(!this.searchMode.endDate){
            return false;
          }else{
            if(new Date(value).getTime() <= new Date(this.searchMode.endDate).getTime()){
              return false
            }
            return true;
          }
        }
      },
      pickerOptions2:{
        disabledDate: (value) => {
          if(!this.searchMode.startDate){
            return false;
          }else{
            if(new Date(value).getTime() > new Date(this.searchMode.startDate).getTime() - 8.64e7){
              return false
            }
            return true;
          }
        }
      },
      pager: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      },
      searchMode: {},
      herolist,
      nums: '我是父组件'
    }
  },
  mounted() {
    /* console.log('我是父组件') */
  },
  created() {
    this.init()
  },
  methods: {
    checkMixin() {
      this.testYang()
    },
    testYang() {
      console.log(this.nums)
    },
    init() {
      this.$http.post('/court/saveCourtRefInfo.htm').then(res => {
        console.log(res)
      })
    },
    handleClickDetails(row) {
      this.$refs.relationalGraph.open(row)
    },
    handleClickEdit(row) {

    },
    handleSizeChange() {},
    handleCurrentChange() {}
  },
  components: {
    RelationalGraphs
  },
  mixins: [
    testMethod({
      init: true
    }),
  ],
}
</script>

<style lang="less" scoped>
.homePage{
  background: #ffffff;
  .search{
    padding: 12px 20px; 
    margin-top: 10px;
    text-align: left;
  }
  .title{
    background: #EEF3FF;
    p{
      padding: 15px 0 15px 20px;
      text-align: left;
      font-size: 18px;
      color: #409EFF;
    }
  }
  .table {
    max-height: calc(100vh - 250px);
    overflow-y: auto;
  }
}
</style>