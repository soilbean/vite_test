import express from 'express'
import cors from 'cors'
import vipLogin from './data/vip_login.json' assert {type:'json'}
import adminLogin from './data/admin_login.json' assert {type:'json'}
import userLogin from './data/user_login.json' assert {type:'json'}
import url from "url"
import vertoken from './token/token.js'
import { expressjwt } from 'express-jwt'
import OpenAI from './APIs/AI_API/OpenAI_use.js'
import RouteList from './APIs/BaseAPIs/routeList.js'
// import OpenAI from 'openai'

const app = express()
// const client = new OpenAI({
//     apiKey: 'sk-F3TzRbvXcKp0nS69cBrHCPFVtFjzGbdqjF0pT2cbkojw7kvE', // xxx为GitHub授权的每个账号的key值
//     baseURL: 'https://api.chatanywhere.tech/v1'
//   })

app.use(cors())

app.use((req,res,next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1]
        if(!vertoken.getToken(token).code){
            return res.send({
                msg:'登录过期，请重新登录',
                status:400
            })
        }
        next()
    }
    next()
})

app.use(expressjwt({
    secret:'zgs_first_token',
    algorithms:['HS256']
}).unless({
    path:['/logins','/getRoutes/getRouteList','/AIuse/AIask']
}))

app.use((err,req,res,next) => {
    if(err.status == 401){
        res.status(401).send({status:'401'})
        return
    }
    res.send({
        status: 500,
        msg:'未知错误'
    })
})

app.get('/login',(req,res) => {
    const user = url.parse(req.url,true).query.user;
    if(user === 'admin'){
        res.send(adminLogin)
    }else{
        res.send(vipLogin)
    }
})

app.post('/userInfo',(req,res) => {
    res.send(userLogin)
})

app.post('/logins',(req,res,next) => {
    let token = vertoken.setToken(req.query)
    if(JSON.stringify(userLogin).indexOf(JSON.stringify(req.query)) != -1){
        res.send(
            {
                status:200,
                msg:'登录成功',
                data:{token}
            }
        )
        next()
    }else{
        res.send(
            {
                status:400,
                msg:'失败',
            }
        )
    }
})

app.use('/AIuse',OpenAI)
// app.get('/AIChat',async(req, res) => {
//     const msg = req.query.msg
//     const chatCompletion = await client.chat.completions.create(
//         {
//           messages: [{ role: 'user', content: msg}],
//         //   messages: [{ role: 'user', content: '一加一等于几'}],
//           model: 'gpt-3.5-turbo'
//         }
//       )
      
//       res.json({
//         result: chatCompletion.choices[0].message.content,
//       })
// })
app.use('/getRoutes',RouteList)
app.listen(3000,() => {
    console.log('服务器已启动...')
})