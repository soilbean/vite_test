<template>
    <div class="main">
        <h2>AI</h2>
        <div class="mainArea">
            <p class="inputSpace" >
                <el-input 
                class="inputValue"
                type="textarea"   
                v-model="value.msg" 
                placeholder="请提出你的疑问?" 
                ></el-input>
                <el-button  
                style="border: none; height: fit-content;"
                @click="getReply">
                    <el-icon :size="32"><Promotion /></el-icon>
                </el-button>
            </p>

            <text class="replyWay"></text>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {},
  data() {
    return {
        value:{
            msg:''
        },
        reply:'',
        count:1
    };
  },
  watch: {},
  computed: {},
  methods: {
    async getReply() {
        await axios.get(`http://localhost:3000/AIuse/AIask?msg=${this.value.msg}`).then(res => {
            console.log(res)
            this.reply = res.data.result
            this.value.msg = ''
            this.writeText()
        }).catch(err => {
            console.log(err)
        });
        // this.writeText()
    },
    writeText(){
        let textArea = document.querySelector('.replyWay')
        textArea.innerHTML = this.reply.slice(0,this.count)
        
        this.count++
        if(this.count < this.reply.length){
            setTimeout(() => {
                this.writeText()
            }, 180);
        }else{
            console.log('完成生成')
        }

    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.main{
    width: 100%;
    height: 100%;
    .replyWay{
        position: absolute;
        width: 60%;
        left: 20%;
        height: fit-content;
        word-wrap: break-word;
        background-color: rgba(224, 224, 224,0.4);
        border-radius: 5px;
        text-align: center;
    }
    .inputSpace{
        position: absolute;
        bottom: 25px;
        width: 60%;
        height: 50px;
        word-wrap: break-word;
        left: 20%;
        .inputValue{
            position: absolute;
            
        }
        .el-button{
            position: absolute;
            right: 2%;
            top: 5%;
            border-radius: 50%;
        }
    }
}
    


</style>