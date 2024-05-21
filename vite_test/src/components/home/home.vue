<template>
    <div class="home">
        <el-container>
            <el-header>
                <Index />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import Index from '../index/index.vue'


export default {
  components: {
    Index
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {

  }
};
</script>
<style lang="scss" scoped>

// .el-footer{
//     position: fixed;
//     bottom: 0;
//     left: 0;
//     width:100%;
//     background: rgb(0, 0, 0);
// }
</style>