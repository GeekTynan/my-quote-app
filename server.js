const express = require('express');
const app = express();
const port = process.env.PORT;
// 让前端页面可以被访问
app.use(express.static('public'));

// API接口：返回随机一句
app.get('/api/quote', (req, res) => {
  const quotes = [
    "代码写下去，就有光。",
    "今天不Bug，明天不加班。",
    "MVP先上线，完美主义放一边。",
    "勇敢不是不害怕，而是害怕也要上。",
    "每一个大牛都从Hello World开始。"
  ];
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ 
    success: true,
    quote: random,
    time: new Date().toLocaleString()
  });
});

// 启动服务器
app.listen(port, () => {
  console.log(`✅ 服务已启动！`);
  console.log(`🌐 访问地址: http://localhost:${port}`);
  console.log(`⏹ 按 Ctrl+C 可停止服务`);
});