<template>
    <div class="pageTwo">
        <el-container>
          <el-aside>
            <el-avatar :size="100"/>
            <h2>{{ this.$store.state.store.user.username }}</h2>
            <el-card>
              <div v-for="o in 4" :key="o" class="text item">
                {{ 'List item ' + o }}
              </div>
              <template #footer>编辑信息</template>
            </el-card>
          </el-aside>         
          <el-container>
            <el-header>
              <el-menu 
              ellipsis
              mode="horizontal"
              style="width: 100%;height: 100%;"
              >
                <el-menu-item index="1">
                  最近
                </el-menu-item>
                <el-menu-item index="2">
                  文章
                </el-menu-item>
                <el-menu-item index="3">
                  <router-link to="/wordsPage">
                    写文章
                  </router-link>
                </el-menu-item>
                <el-sub-menu index="4">
                  <template #title>更多</template>
                  <el-menu-item index="2-1">item one</el-menu-item>
                  <el-menu-item index="2-2">item two</el-menu-item>
                  <el-menu-item index="2-3">item three</el-menu-item>
                </el-sub-menu>
              </el-menu>
            </el-header>
            <el-main>
              展示部分
            </el-main>
            <el-footer>
              底部
            </el-footer>
          </el-container>
        </el-container>
    </div>
</template>

<script>


export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.pageTwo{
  width: 100%;
  height: fit-content;
  .el-container{
    width: 90%;
    margin: auto;
    .el-aside{
      display: flex;
      flex-direction: column;
      align-items: center;
      .el-card{
        width: 80%;
        height: fit-content;
      }
    }
    .el-container{
      .el-header{
        width: 100%;
        height: 50px;
        // background: rgba(200, 245, 255,0.7);
        margin: 30px 0;
      }
      .el-main{
        width: 100%;
        height: 700px;
        border: 1px solid red;
      }
    }
  }
}

</style>