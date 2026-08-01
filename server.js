const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 提供静态文件（CSS、JS 等）
app.use(express.static('public'));

// API 接口
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

// ✅ 新增：处理根路径
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// ✅ 新增：处理其他所有路径（可选）
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`✅ 服务已启动！`);
});