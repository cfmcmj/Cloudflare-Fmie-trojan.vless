function getSpacePageHtml(Pswd, hostName) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Time Travel</title>
  <style>
    * {
      background-color: transparent !important;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      min-height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      color: #8ff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: 
        radial-gradient(circle at center, #050a30 0%, #000 100%),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='glow'%3E%3CfeGaussianBlur stdDeviation='2' result='blur'/%3E%3CfeComposite in='SourceGraphic' in2='blur' operator='over'/%3E%3C/filter%3E%3Ccircle cx='50' cy='50' r='0.5' fill='%23fff' filter='url(%23glow)'/%3E%3C/svg%3E") repeat;
      background-attachment: fixed;
      padding: 1rem 0 3rem;
    }
    
    .space-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    
    .star {
      position: absolute;
      background-color: #fff;
      border-radius: 50%;
      animation: twinkle 2s infinite alternate;
    }
    
    .meteor {
      position: absolute;
      width: 1px;
      height: 60px;
      background: linear-gradient(90deg, transparent, #fff);
      opacity: 0;
      animation: meteor 3s linear infinite;
    }
    
    @keyframes twinkle {
      from { opacity: 0.3; transform: scale(0.8); }
      to { opacity: 1; transform: scale(1.2); }
    }
    
    @keyframes meteor {
      0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { transform: translateX(-300px) translateY(300px) rotate(45deg); opacity: 0; }
    }
    
    .nebula {
      position: fixed;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(15, 255, 255, 0.05) 0%, transparent 70%);
      filter: blur(60px);
      animation: float 150s linear infinite;
      z-index: -1;
    }
    
    @keyframes float {
      0% { transform: translate(-20%, -20%) rotate(0deg); }
      100% { transform: translate(120%, 120%) rotate(360deg); }
    }
    
    .satellite {
      position: absolute;
      width: 30px;
      height: 14px;
      border: 2px solid #0ff;
      border-radius: 6px;
      animation: orbit 70s linear infinite;
      z-index: 1;
    }
    
    .satellite::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      background-color: #0ff;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px #0ff;
    }
    
    .satellite::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background-color: #0ff;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      box-shadow: 0 0 8px #0ff;
    }
    
    .satellite .panel {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 1px solid #0ff;
      top: -6px;
      left: 6px;
      box-shadow: 0 0 6px #0ff;
    }
    
    .craft {
      position: absolute;
      width: 50px;
      height: 20px;
      border: 2px solid #0ff;
      border-radius: 12px 3px 3px 12px;
      animation: fly 90s linear infinite;
      z-index: 1;
    }
    
    .craft::after {
      content: '';
      position: absolute;
      width: 15px;
      height: 8px;
      background: linear-gradient(90deg, #0ff, rgba(15, 255, 255, 0.3));
      right: -13px;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: 0 0 15px #0ff;
      border-radius: 0 50% 50% 0;
    }
    
    .craft .window {
      position: absolute;
      width: 15px;
      height: 10px;
      border: 1px solid #0ff;
      border-radius: 3px;
      left: 6px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(15, 255, 255, 0.2);
      box-shadow: 0 0 6px #0ff inset;
    }
    
    @keyframes orbit {
      from { transform: translateX(-100%) translateY(20vh) rotate(0deg); }
      to { transform: translateX(110vw) translateY(80vh) rotate(360deg); }
    }
    
    @keyframes fly {
      from { transform: translateX(110vw) translateY(60vh); }
      to { transform: translateX(-100%) translateY(10vh); }
    }
    
    .container {
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      padding: 1rem 5vw;
      position: relative;
      z-index: 2;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: clamp(1.8rem, 7vw, 3rem);
      color: transparent;
      -webkit-text-stroke: 1px #0ff;
      text-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
      letter-spacing: 1px;
      animation: pulse 4s infinite alternate;
    }
    
    @keyframes pulse {
      from { text-shadow: 0 0 10px #0ff; }
      to { text-shadow: 0 0 20px #0ff, 0 0 30px #0ff; }
    }
    
    .content {
      font-size: clamp(0.9rem, 4vw, 1.1rem);
      line-height: 1.6;
      border: 1px solid rgba(15, 255, 255, 0.7);
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 15px rgba(15, 255, 255, 0.4), 0 0 6px rgba(15, 255, 255, 0.2) inset;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(5px);
    }
    
    .content p {
      margin-bottom: 0.8rem;
    }
    
    .content p:last-child {
      margin-bottom: 0;
    }
    
    .password-form {
      text-align: center;
      margin-top: 1rem;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      padding: 0 5vw;
    }
    
    #password-input {
      padding: 0.8rem;
      border: 1px solid #0ff;
      border-radius: 6px;
      color: #8ff;
      width: 100%;
      max-width: 300px;
      box-shadow: 0 0 10px rgba(15, 255, 255, 0.4), 0 0 4px rgba(15, 255, 255, 0.3) inset;
      font-size: 1rem;
    }
    
    #password-input:focus {
      outline: none;
      box-shadow: 0 0 15px rgba(15, 255, 255, 0.6);
    }
    
    button {
      padding: 0.8rem 1.2rem;
      border: 1px solid #0ff;
      border-radius: 6px;
      color: #0ff;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(15, 255, 255, 0.4);
      font-size: 1rem;
      width: 100%;
      max-width: 300px;
    }
    
    button::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(15, 255, 255, 0.3), transparent);
      animation: scan 1.5s infinite;
    }
    
    @keyframes scan {
      100% { left: 100%; }
    }
    
    /* 确保移动设备可滚动 */
    @media (max-width: 768px) {
      body {
        padding-bottom: 4rem;
      }
      
      .container {
        padding: 1rem 5vw 2rem;
      }
      
      .password-form {
        margin-top: 1.5rem;
      }
    }
  </style>
</head>
<body>
  <div class="nebula" style="top: -150px; left: -150px; animation-delay: 0s;"></div>
  <div class="nebula" style="bottom: -200px; right: -100px; animation-delay: -50s; animation-duration: 200s;"></div>
  <div class="space-bg" id="space-bg"></div>
  
  <div class="satellite" style="top: 10%; animation-delay: -10s;">
    <div class="panel"></div>
  </div>
  <div class="satellite" style="top: 30%; width: 25px; height: 12px; animation-delay: -25s; animation-duration: 85s;">
    <div class="panel" style="left: 15px; top: 12px;"></div>
  </div>
  
  <div class="craft" style="top: 40%; animation-delay: -15s;">
    <div class="window"></div>
  </div>
  <div class="craft" style="top: 70%; width: 40px; height: 16px; animation-delay: -40s; animation-duration: 110s;">
    <div class="window" style="width: 12px;"></div>
  </div>

  <div class="container">
    <h1>Time Travel</h1>
    <div class="content">
      <p>Fingertips brush the brass gears of an old clock, rust dissolving into the rain of 1943.</p>
      <p>Pushing open the creaking wooden door, osmanthus fragrance drifts through brick alleys, while a radio opera trills "Su San leaves Hongtong County". Turning, I spot an electronic screen in a glass window—blue light crumples a century into the folds of my palm lines.</p>
      <p>Clock ticks suddenly overlap, revealing all reunions were always written in time's wrinkles.</p>
    </div>
  </div>
  
  <!-- 密码表单放在容器外底部，确保在小屏幕可见 -->
  <div class="password-form">
    <input type="password" id="password-input" placeholder="Enter password">
    <button onclick="checkPassword()">Enter</button>
  </div>

  <script>
    // 根据屏幕尺寸调整星星数量，提升移动端性能
    const isMobile = window.innerWidth <= 768;
    const starCount = isMobile ? 100 : 300;
    const meteorCount = isMobile ? 2 : 5;
    
    // Create stars and meteors
    const spaceBg = document.getElementById('space-bg');
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const size = Math.random() * (isMobile ? 1.2 : 2.5);
      star.style.width = \`\${size}px\`;
      star.style.height = \`\${size}px\`;
      star.style.left = \`\${Math.random() * 100}%\`;
      star.style.top = \`\${Math.random() * 100}%\`;
      star.style.animationDelay = \`\${Math.random() * 5}s\`;
      star.style.opacity = Math.random() * 0.7 + 0.2;
      
      spaceBg.appendChild(star);
    }
    
    // Create meteors
    for (let i = 0; i < meteorCount; i++) {
      const meteor = document.createElement('div');
      meteor.classList.add('meteor');
      
      meteor.style.top = \`\${Math.random() * 30 + 10}%\`;
      meteor.style.left = \`\${Math.random() * 100}%\`;
      meteor.style.animationDelay = \`\${Math.random() * 8 + i * 3}s\`;
      
      spaceBg.appendChild(meteor);
    }
    
    function checkPassword() {
      const input = document.getElementById('password-input');
      if (input.value === '${Pswd}') {
        window.location.href = '/${Pswd}';
      } else {
        alert('Incorrect password');
        input.value = '';
      }
    }
    
    // Allow Enter key to submit
    document.getElementById('password-input').addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        checkPassword();
      }
    });
  </script>
</body>
</html>
`;
}

//将 getSpacePageHtml 函数添加到 worker.js 文件末尾，export 语句之前
//找到 fetch 方法中的 default 分支，替换原 JSON 响应代码为新的 HTML 响应代码
//替换后的 default 分支应返回 getSpacePageHtml 生成的 HTML 内容

// 修改fetch函数中的default分支，替换原JSON响应
// 找到以下代码段：
// default:
//   // return new Response('Not found', { status: 404 });
//   // For any other path, reverse proxy to 'ramdom website' and return the original response, caching it in the process
//   if (cn_hostnames.includes('')) {
//   return new Response(JSON.stringify(request.cf, null, 4), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//   });
//   }

// 替换为：
// default:
//   if (cn_hostnames.includes('')) {
//     return new Response(getSpacePageHtml(Pswd, request.headers.get("Host")), {
//       status: 200,
//       headers: {
//         "Content-Type": "text/html;charset=utf-8",
//       },
//     });
//   }
