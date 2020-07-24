<template>
  <div class="login">
    <div class="title">	
			<div class="fl">
				英雄联盟 | 业务后台管理系统
			</div>
			<div class="fr">
				<a target="_blank" href="http://lol.qq.com" class="el-button el-button--default">英雄联盟官网</a>
			</div>
		</div>
    <div class="content">
			<img class="m-img" src="@/assets/img/computer.png" />
			<div class="m-form">
				<div class="login-title">
					<span>账号登陆</span>
				</div>
				<el-form class="form-box" ref="ruleForm" :model="ruleForm">
					<el-form-item label=" " prop="loginName" style="margin-top: 10px">
						<el-input
              class="account"
							placeholder="输入您的账号"
							v-model.trim="ruleForm.loginName">
							<i slot="prefix" class="el-icon-s-custom"></i>
						</el-input>
					</el-form-item>

					<el-form-item label=" " prop="passWord" class="mt-30">
						<el-input
              class="account"
							placeholder="输入您的登录密码"
							type="password"
							@keyup.native.13="handleSubmit"
							v-model.trim="ruleForm.passWord">
							<i slot="prefix" class="el-icon-lock"></i>
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
		<div style="margin-top: 170px;text-align: center;color: #ffffff;font-size: 14.5px">© 2017-2018 深圳腾讯游戏英雄联盟有限公司 版权所有 浙ICP备17016869号-1</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
			ruleForm: {},
			menuList: [
        {
          menuName: '英雄概况',
          menuId: 1,
          children: [
            {
              menuName : '英雄头像',
              menuId : 1-1,
              menuUrl : 'userQuery',
            },
            {
              menuName : '英雄头像',
              menuId : 1-2,
              menuUrl : 'roleManage',
            },
            {
              menuName : '用户管理',
              menuId : 1-3,
              menuUrl : 'userControl',
            },
            {
              menuName : '菜单管理',
              menuId : 1-4,
              menuUrl : 'menuManage'
            }
          ]
        },
        {
          menuName: '开户管理',
          menuId: 2,
          children: [
            {
              menuName : '用户查询',
              menuId : 2-1,
              menuUrl : 'userSearch'
            },
            {
              menuName : '开户申请',
              menuId : 2-2,
              menuUrl : 'accountApply'
            },
            {
              menuName : '开户设置',
              menuId : 2-3,
              menuUrl : 'accountSetting'
            },
            {
              menuName : '开户确认',
              menuId : 2-4,
              menuUrl : 'accountAffirm'
            },
          ]
        },
        {
          menuName: '文件管理',
          menuId: 3,
          children: [
            {
              menuName : '文件查询',
              menuId : 3-1,
              menuUrl : 'fileQuery'
            },
            {
              menuName : '文件修改',
              menuId : 3-2,
              menuUrl : 'fileModification'
            },
            {
              menuName : '文件提交',
              menuId : 3-3,
              menuUrl : 'documentsSubmitted'
            },
            {
              menuName : '文件注销',
              menuId : 3-4,
              menuUrl : 'fileCancellation'
            },
          ]
        },
        {
          menuName : '仲裁委管理',
          menuId : 4,
          children: [
            {
              menuName : '仲裁委管理',
              menuId : 4-1,
              menuUrl : 'arbitramentManage',
            },
            {
              menuName : '通知邮箱管理',
              menuId : 4-2,
              menuUrl : 'informEmailManage',
            },
          ]
        },
        {
          menuName : '官网管理',
          menuId : 5,
          children: [
            {
              menuName : '客户案例',
              menuId : 5-1,
              menuUrl : 'customerCase',
            },
            {
              menuName : '咨询管理',
              menuId : 5-2,
              menuUrl : 'advisoryManage',
            },
            {
              menuName : '新闻动态',
              menuId : 5-3,
              menuUrl : 'newsDynamicState',
            },
          ]
        },
        {
          menuName : '第三方管理',
          menuId : 6,
          children : [
            {
              menuName : '邮件发送',
              menuId : 6-1,
              menuUrl : 'mailSend',
            },
            {
              menuName : '短信发送',
              menuId : 6-2,
              menuUrl : 'noteSend',
            },
            {
              menuName : '短信渠道管理',
              menuId : 6-3,
              menuUrl : 'channelManage',
            }
          ]
        },
        {
          menuName : '客户管理',
          menuId : 7,
          children : [
            {
              menuName : '客户账号管理',
              menuId : 7-1,
              menuUrl : 'accountManagement',
            },
            {
              menuName : '客户管理',
              menuId : 7-2,
              menuUrl : 'clientManagement',
            },
            {
              menuName : '账户余额查询',
              menuId : 7-3,
              menuUrl : 'balanceQuery',
            },
            {
              menuName : '业务类型设置',
              menuId : 7-4,
              menuUrl : 'businessTypeSetting',
            },
            {
              menuName : '数据管理',
              menuId : 7-5,
              menuUrl : 'dataManagement',
            },
            {
              menuName : '签约客户',
              menuId : 7-6,
              menuUrl : 'contractedCustomers',
            },
          ],
        }
      ]
    }
  },
  methods: {
    handleSubmit() {
      if(!this.ruleForm.loginName) {
        this.$message.warning('请输入您的账号')
        return
      }
      if(!this.ruleForm.passWord) {
        this.$message.warning('请输入您的密码')
        return
      }
			if(this.ruleForm.loginName && this.ruleForm.passWord) {
				let login = true
				this.menuList.map(i =>{
					i.children.map(j =>{
						if(j.menuUrl && login === true) {
							login = false
							this.$router.push('/layout/' + j.menuUrl)
						}
					})
				})
			}
		}
  },
}
</script>

<style lang="less" scoped>
 @import './login.less';
</style>