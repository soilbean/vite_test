<template>
    <div class="main" >
        <!-- @click="resultFun" -->
    </div>
    <div class="login" >
            <div class="loginOne"  v-if="this.$store.state.store.changeLoginState">
                <h1>登录</h1>
                <el-row>
                    <span>用户名:</span>
                    <el-input
                    v-model="formLogin.username" />
                </el-row>
                <el-row>
                    <span>密码:</span>
                    <el-input
                    v-model="formLogin.password"
                    type="password"
                    />
                </el-row>
                <el-button :disabled="isDisabled" :loding="isLoading" @click.stop="login">登录</el-button>
                
            </div>
            <div class="loginOne" v-else>
                <h1>注册</h1>
                <el-row>
                    <span>用户名:</span>
                    <el-input
                    v-model="$store.state.username" />
                </el-row>
                <el-row>
                    <span>密码:</span>
                    <el-input
                    v-model="$store.state.password"
                    type="password"
                    />
                </el-row>
                <el-button @click="">注册</el-button>
            </div>
            <div class="change" @click="changeLoginState">
                <p v-if="this.$store.state.store.changeLoginState" >注册</p>
                <p v-else>登录</p>
            </div>
        </div>
</template>

<script>
import { login } from '../../api/api'
import { debounce} from '../../utils/debounce'
export default {
  components: {},
  props: {},
  data() {
    return {
        formLogin:{
            username:'',
            password:'',
        },
        typeView:0,
        isLoading:false,
        resultFun: debounce(this.backShow)
    };
  },
  watch: {},
  computed: {
    isDisabled(){
        return !(this.formLogin.username && this.formLogin.password);
    },
    
  },
  methods: {
    login(){
        this.$store.dispatch('store/login',this.formLogin)
        .then((res) => {
            if(!res){
                // 登陆成功
                console.log(Date.now())
                window.localStorage.setItem('token',this.$store.state.store.token)
                this.$router.push('/')
                this.$store.state.store.useState = false;
                let userInfo = {
                    isLogin:true,
                    name:this.formLogin.username
                }
                localStorage.setItem("userInfo",JSON.stringify(userInfo))
                this.$store.state.store.userInfo = userInfo
                console.log(userInfo)
            }else{
                // 登录失败
                this.$store.state.store.useState = true;
            }
        }).catch(err => {
            console.log(err)
            
        })

    },
    changeLoginState(){
        this.$store.state.store.changeLoginState =! this.$store.state.store.changeLoginState
    },
    RandomBlock(){
        const count = 40   
        const main = document.querySelector('.main')
        
        for(let i=0;i<count;i++){
            const block = document.createElement('div')
            block.classList.add('block')
            let pos = this.divPosition()   
            block.style.marginTop = pos.top
            block.style.marginLeft = pos.left
            block.style.backgroundColor = pos.col
            main.appendChild(block)
        }
        const debouncedClickHandler = this.fundou()
        main.addEventListener('click',debouncedClickHandler)
    },
    divPosition(e){
        if(e){
            setTimeout(()=>{
                e.classList.add('block')

            },0)
        } 
        let left = Math.random(-5,5)*1800 +'px'
        let top = Math.random(-3.3)*800 + 'px'
        var col = "#"
        for(let i=0;i<6;i++){
            col+=parseInt(Math.random()*16).toString(16)

        }   
        return {left:left,top:top,col:col}
    },
    backShow(){
        document.querySelectorAll('.block').forEach(i => {
            i.classList.remove('block')
            // i.classList.add('block')
            let pos = this.divPosition(i) 
            i.style.marginTop = pos.top
            i.style.marginLeft = pos.left
            i.style.backgroundColor = pos.col
        })
    },
   
    fundou(){
        console.log('111111')
        const tt = debounce(this.backShow)
        return tt
    }
  },
  created() {},
  mounted() {
    this.RandomBlock()
    // setInterval(() => {
    //     this.backShow()
    // },5000)
  }
};
</script>

<style lang="scss" >
.main{
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    // background-color: rgba(224, 251, 255,0.8);
    .block{
        position: absolute;
        width: 300px;
        height: 300px;
        background-color: black;
        animation: 2s blockIn infinite;
    }
    @keyframes blockIn {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
}
.login{
    position: fixed;
    width:400px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    // border-radius: 20px;
    margin: 0 10% 0 60vw;
    top: 0;
    z-index: 99;
    color: black;
    p{
        width: 50px;
        margin: 10px 300px;
    }
    .loginOne{
        width: 400px;
        height: 200px;
        border-radius: 20px;
        margin: 50% 0 15% 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .el-row{
            margin: 10px 0;
            span{
                width: 60px; 
            }
            .el-input{
                width: 250px;
            }
        }
        .el-button{
            width: 150px;
            border-style: none;
            margin-top: 20px;
        }
    }
}


</style>