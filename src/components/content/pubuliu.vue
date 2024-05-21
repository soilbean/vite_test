<template>
    <div id="app">
      <div class="waterfall">
        <div class="column" v-for="column in columns" :key="column.id">
          <div class="item" v-for="item in column.items" :key="item.id" 
          :style="{height: item.height + 'px'}" @click="changeVideSize(item)">
            {{ item.content }}
          </div>
        </div>
      </div>
      <!-- 全屏展示窗口 -->
      <div class="fullSize" @click="fullSize"></div>
    </div>
  </template>
   
<script setup>
import { nextTick, onMounted, ref } from 'vue';

    const columns = ref([])
    const itemWidth = ref(200)
    const itemMargin = ref(10) 

    function generateColumns(){
        const numColumns = Math.floor(window.innerWidth / (itemWidth.value + itemMargin.value * 2) )
        console.log(numColumns)
        for(let i = 0;i < numColumns;i++){
            columns.value.push({
                id:i,
                items:[]
            })
        }
        console.log(columns.value)
        fetchItems(columns.value)
    }
    // 设置每个方框展示格内容和等分展示多少列
    function fetchItems(e){
        const items = [...Array(50).keys()].map(i => ({ id: i, content:`Item:${i}`}))
        items.forEach((item,index) => {
            const columnIndex = index % e.length
            const column = e[columnIndex]

            const itemHeight = 200 + Math.random() * 100 
            column.items.push({
                ...item,
                height:itemHeight
            })
            nextTick(() => {
                updateLayout(columns.value)
            })
        })
        console.log(items)
    }
    function updateLayout(e){
        const columnsHeight = e.map(column => {
            let height = 0
            column.items.forEach(item => {
                height += item.height + itemMargin.value;
            })
            return height
        })
        e.forEach((column,index) => {
            const element = document.querySelector(`.column:nth-child(${index + 1}) .item:last-child`)
            if(element){
                element.style.marginBottom = `${columnsHeight[index] - element.offsetHeight}px`
            }
        })
    }
    function changeVideSize(e){
        let model = document.querySelector('.fullSize')
        model.innerHTML = e.content
        model.style.display = 'block'
    }

    function fullSize(){
        let model = document.querySelector('.fullSize')
        model.style.display = 'none'
    }

    onMounted(() => {
        window.addEventListener('resize',generateColumns())
    })
</script>

<style scoped>
    .waterfall {
        margin-right: -10px; /* 减去列间间距 */
    }
    .column {
        float: left;
        width: 210px; /* itemWidth + itemMargin * 2 */
        margin-right: 10px; /* 列间间距 */
        margin-bottom: 10px; /* 列间间距 */
    }
    .item {
        background: #f3f3f3;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        box-sizing: border-box;
        break-inside: avoid;
        margin: 10px 0;
    }
    .fullSize{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        background-color: rgba(0,0,0,0.2);
        display: none;
        z-index:2;
    }
</style>