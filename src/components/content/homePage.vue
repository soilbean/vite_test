<!-- 首页展示板 -->
<template>
    <div class="homePage">
        <el-container >
          
          <el-aside>
            <el-menu
            default-active="2">
              <router-link to="/pageThree"><el-menu-item index="1">卡片展示</el-menu-item></router-link>
              <router-link to="/pubuliu"><el-menu-item index="2">瀑布流</el-menu-item></router-link>
              <router-link to="/pageFour" ><el-menu-item index="3">AI</el-menu-item></router-link> 
              <el-menu-item index="4">item</el-menu-item>
              <el-menu-item index="5">item</el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <div id="showEcharts">
              <div id="line"></div>
              <div id="pie"></div>
              <div id="bar"></div>
              <div id="scatter"></div>
            </div>
          </el-main>
        </el-container>
    </div>
</template>

<script>
import * as echarts from 'echarts'

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
    showEcharts(){
      let chartDom = echarts.init(document.getElementById('line'))
      let chartDom_pie = echarts.init(document.getElementById('pie'))
      let chartDom_bar = echarts.init(document.getElementById('bar'))
      let chartDom_scatter = echarts.init(document.getElementById('scatter'))
      let option = {
        title:{
          text:'stacked Line',
        },
        tooltip: {
          trigger: 'axis'
        },

        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
          top:'10%'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,

        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      let option_2 = {
        legend: {
          top: 'bottom',
          itemWidth:15,
          textStyle:{
            fontSize:10,
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            center: ['50%', '45%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
          }
        ]
      }
      let option_3 = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
      let option_4 = {
        title:{
          text:'scatter'
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            symbolSize: 20,
            data: [
              [10.0, 8.04],
              [8.07, 6.95],
              [13.0, 7.58],
              [9.05, 8.81],
              [11.0, 8.33],
              [14.0, 7.66],
              [13.4, 6.81],
              [10.0, 6.33],
              [14.0, 8.96],
              [12.5, 6.82],
              [9.15, 7.2],
              [11.5, 7.2],
              [3.03, 4.23],
              [12.2, 7.83],
              [2.02, 4.47],
              [1.05, 3.33],
              [4.05, 4.96],
              [6.03, 7.24],
              [12.0, 6.26],
              [12.0, 8.84],
              [7.08, 5.82],
              [5.02, 5.68]
            ],
            type: 'scatter'
          }
        ]
      }
      option && chartDom.setOption(option);
      option_2 && chartDom_pie.setOption(option_2);
      option_3 && chartDom_bar.setOption(option_3);
      option_4 && chartDom_scatter.setOption(option_4);
    }
  },
  created() {},
  mounted() {
    this.showEcharts();
  }
};
</script>

<style lang="scss" scoped>
.homePage{
  background: rgba(217, 217, 217,0.5);
  .el-aside{
    width: 12%;
    .el-menu{
      width: 100%;
      height: 100%;
      background: rgba(217, 217, 217,0.5);
      a{
        text-decoration: none;
      }
    }
  }
  #showEcharts{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    #line{
      width: 30%;
      height: 350px;
      margin: 0 5%;
    }
    #pie{
      width: 30%;
      height: 350px;
      margin: 0 5%;
    }
    #bar{
      width: 30%;
      height: 350px;
      margin: 0 5%;
    }
    #scatter{
      width: 30%;
      height: 350px;
      margin: 0 5%;
    }
  }
  @media screen and (max-width:480px)   {
    #showEcharts{
      
      flex-direction: column;
    }
  }
}
</style>