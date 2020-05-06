<template>
  <div class="login">
    <div class="title">
			<div class="fl">
				互仲科技 | 业务后台管理系统
			</div>
			<div class="fr">
				<a target="_blank" href="http://www.arbexpress.cn" class="el-button el-button--default">仲财通官网</a>
			</div>
		</div>
    <div class="content">
			<img class="m-img" src="@/assets/img/logo.png" />
			<div class="m-form">
				<div class="login-title">
					<span>账号登陆</span>
				</div>
				<el-form class="form-box" ref="ruleForm" :model="ruleForm">
					<el-form-item label=" " prop="loginName" class="mt-30">
						<el-input
							placeholder="输入您的账号"
							v-model.trim="ruleForm.loginName">
							<i slot="prefix" class="iconfont icon-denglu"></i>
						</el-input>
					</el-form-item>

					<el-form-item label=" " prop="passWord" class="mt-30">
						<el-input
							placeholder="输入您的登录密码"
							type="password"
							@keyup.native.13="handleSubmit"
							v-model.trim="ruleForm.passWord">
							<i slot="prefix" class="iconfont icon-mima"></i>
						</el-input>
					</el-form-item>

					<el-checkbox class="mt-10" v-model="ruleForm.isAccountNumber">记住账号</el-checkbox>

					<div class="mt-20">
						<el-button
							@click="handleSubmit"
							:style="{
								width : '100%',
								height : '50px',
								fontSize : '24px',
							}"
							type="warning"
						>
							登录
						</el-button>
					</div>
				</el-form>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      ruleForm: {}
    }
  },
  methods: {
    handleSubmit() {}
  },
}
</script>

<style lang="less" scoped>
.login{
  background-image: -webkit-gradient(linear, left top, right top, from(#3c65d0), to(rgba(70, 152, 228, 0.8)));
	background-image: -webkit-linear-gradient(left, #3c65d0, rgba(70, 152, 228, 0.8));
	background-image: linear-gradient(to right, #3c65d0, rgba(70, 152, 228, 0.8));
	height: 100vh;
  min-width: 1200px;
  position: relative;
  .title{
    display: flex;
    justify-content: space-between;
    .fl{
      font-size: 35px;
      color: #ffffff;
      padding: 50px 250px;
    }
    .fr{
      margin: 50px 200px;
    }
  }
  .m-img{
    position: absolute;
    top: calc( (100% - 485px)/2 + 30px );
    left: calc( (100% - 1200)/2 );
  }
  .m-form{
    position: absolute;
    top: calc( (100% - 377px)/2 + 30px );
    right: calc( (100% - 1200)/2 );
    width: 421px;
    height: 375px;
  }
}
</style>