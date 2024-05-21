<template>
    <div class="cityCard">
        <el-card>
            <h3>标题</h3>
            <slot></slot>
        </el-card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
       
</script>
<style lang="scss" scoped>
.cityCard{
    width: fit-content;
    height: 200px;
}
</style>
