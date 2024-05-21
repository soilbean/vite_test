import OpenAI from 'openai';
// import readline from 'readline';
// 实例化 
const client = new OpenAI({
  apiKey: 'sk-F3TzRbvXcKp0nS69cBrHCPFVtFjzGbdqjF0pT2cbkojw7kvE', // xxx为GitHub授权的每个账号的key值
  baseURL: 'https://api.chatanywhere.tech/v1'
})



export async function main(msg) {
  // console.log(msg + 'AI');
  const chatCompletion = await client.chat.completions.create(
    {
      messages: [{ role: 'user', content: msg}],
      // messages: [{ role: 'user', content: '一加一等于几'}],
      model: 'gpt-3.5-turbo'
    }
  )
  
  // console.log(chatCompletion.choices[0].message.content)
  return chatCompletion.choices[0].message.content;
}

// main()
