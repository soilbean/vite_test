<template>
    <div class="index">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        >
          <el-menu-item
          index="1"
          >
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <div class="flex-grow"></div>
          <el-menu-item
          index="2" 
          >
            ￥
          </el-menu-item>
          <el-menu-item
          index="3"
          v-if="this.$store.state.store.useState"
          >
            <router-link to="/login">登录/注册</router-link>
          </el-menu-item>
          <el-menu-item
          class="useState"
          index="4"
          v-else
          >
            {{ this.$store.state.store.user.username }}
            <div class="useInfo">
              <el-card class="box-card">
                <template #header>
                  <div class="card-header">
                    <router-link to="/pageTwo">
                      <span>{{ this.$store.state.store.user.username }}</span>
                    </router-link>
                  </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                <template #footer >
                  <span @click="logout">退出账号</span>
                </template>
              </el-card>
            </div>
          </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { ElMessageBox } from 'element-plus'

export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    logout(){
      // 
      ElMessageBox.confirm(
        '确定要退出吗？',
        'Warning',
        {
          confirmButtonText:'Yes',
          cancelButtonText:'No',
          type:'warning'
        }
      ).then(() => {
        this.$store.commit("store/changeState")
        localStorage.removeItem("token")
        localStorage.removeItem("userInfo")
        setTimeout(() => {
          ElMessageBox.confirm(
            '您已经退出当前账号，请重新登陆。',
            {
              confirmButtonText:'Yes',
              cancelButtonText:'No',
            }
          ).then(() => {
            this.$router.push("/login")
          })
        },500)
      })
    },
    // 跳转到新页面
    // path(){
    //   const { href } = this.$router.resolve({
    //     path:"PageTwo"
    //   });
    //   window.open(href,'_blank');
    // }
  },
  created() {},
  mounted() {
    
    if(JSON.parse(localStorage.getItem('userInfo'))){
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.$store.state.store.useState = false
      this.$store.state.store.user.username = userInfo.name
    }else{
      this.$store.state.store.useState = true
    }
  }
};
</script>
<style lang="scss" scoped>
.useState:hover{

  .el-card{
    width: 200px;
    position: absolute;
    top: 60px;
    right: 0;
    display: block;
  }
  .useInfo{
    z-index: 10;
  }
}
.el-menu{
  a{
    text-decoration: none;
  }
  .el-card{
    display: none;
  }
}

.flex-grow{
  flex-grow: 1;
}
</style>