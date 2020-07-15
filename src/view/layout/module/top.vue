<template>
  <div class="bander_top">
    <div class="bander">
      <div class="bander_title">
        <span class="logWord">杭州互众业务后台管理中心</span>
      </div>
      <p class="users">
        <span style="font-size: 15px">您好</span>
        <span style="margin-right: 10px;font-size: 15px">{{`杨宇翔`}}</span>
        <el-button class="m-btn" @click="logOut()">
          <i class="el-icon-s-custom"></i> 退出登录
        </el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bander_top',
  data() {
    return {
      
    }
  },
  methods: {
    logOut() {
      this.$confirm('确定退出登陆吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res =>{
        console.log(res)
        this.$router.push('/login')
      }).catch(err =>{
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bander_top {
  background: #ffffff;
  border-bottom: .5px solid #E0E4E8;
}
.bander{
  display: flex;
  justify-content: space-between;
  .bander_title{
    padding-left: 20px;
    img{
      width: 100px;
      height: 50px;
    }
    .logWord{
      float: right;
      font-size: 28px;
      color: #0F357F;
      display: inline-block;
      padding: 10px;
    }
  }
  .users{
    padding-top: 7px;
    margin-right: 20px;
    .m-btn{
      padding: 8px 10px;
    }
  }
}
</style>

