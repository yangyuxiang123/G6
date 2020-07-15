<template>
  <div>
    <el-col :span="12" style="width: 100%">   
      <el-menu
        router
        :default-active="$store.state.menu.menuActive"    
        class="el-menu-vertical-demo"
        :unique-opened="true"
        active-background="#ffffff"
        background-color="#373B46"
        text-color="#ffffff"
        style="border: none"
        @select="handleSelect">
        <template v-for="(item,index) in menuList">
          <el-submenu :index="item.menuId + '' + index" :key="item.menuId + '' + index">
            <template slot="title">
              <span class="menuTitle">{{item.menuName}}</span>
            </template>
            <template v-for="(val,idx) in item.children">
              <el-menu-item  :key="val.menuId + '' + idx" :index="`/layout/${val.menuUrl}`">
                <span style="float: left;margin-left: 40px;">{{val.menuName}}</span>
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          menuName: '英雄概况',
          menuId: 1,
          children: [
            {
              menuName : '首页新闻',
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
    getMeun() {
      return new Promise((resove,reject) =>{
        resove();
      })
    },
    setMuenActive() {
      let routerName = this.$route.meta.menuActive
      this.menuList.map((i,k) =>{
        i.children.map((v,k1) =>{
          if(v.menuUrl.indexOf(routerName) !== -1) {
            this.$store.commit('menu/setMenuActive', `/layout/${v.menuUrl}`)
          }
        })
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(val) {
      console.log(val);     
    }
  },
  created() {
    this.getMeun().then(this.setMuenActive);
  }
}
</script>

<style lang="less" scoped>
.el-menu-item-group__title {
  display: none;
}
.menuTitle{
  margin-left: 40px;
  float: left;
  font-size: 15px;
}
</style>