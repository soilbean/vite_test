<template>
    <div class="pageThree">
        <el-form>
            <el-form-item label="用户：">
                <el-input style="width: 150px;" placeholder="请输入要查找的用户" v-model="city" />
                <el-button type="primary" @click="info">get</el-button>
            </el-form-item>
        </el-form>
        <div class="cityCard_show" >
            用户:
            <div v-for="item in user" >
                <CityCard>
                    <p>账号：{{ item.username }}</p>
                    <p>密码：{{ item.password }}</p>
                </CityCard>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import { userInfo } from '../../api/api'
import CityCard from './cityCard/cityCard.vue'


const cityInfo = ref('')
const city =  ref('')
const user = ref('')


onMounted(async () => {
    await userInfo(
    ).then((res) => {
        user.value = res.data
        console.log(res.data)
    })
})

</script>
<style lang="scss" scoped>
.pageThree{
    width: 100%;
    height: 60%;
    .cityCard_show{
        display: flex;
        flex-wrap: wrap;
        div{
            width: 200px;
            margin:0 3%;
        }
    }

}

</style>