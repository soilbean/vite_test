import { Router } from 'express';
import { main } from './OpenAI.js'

const router = Router()

export default router.get('/AIask', async (req, res) => {
    let msg = req.query.msg
    // console.log(msg)
    
    try {
        // 调用 main 函数并等待其完成
        let result = await main(msg);
        // 处理 main 函数的结果
        res.json({ result: result }); // 将处理后的结果发送给客户端
        // console.log(result); 
    } catch (err) {
        // 捕获并处理可能出现的错误
        console.error(err);
        res.status(500).json({ error: 'An error occurred', message: err.message });
    }
})
