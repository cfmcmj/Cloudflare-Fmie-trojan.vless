function getfmieConfig(Pswd, hostName) {
  const wtrojanws = atob(btoa(`trojan://${Pswd}@${CDNIP}:8880?security=none&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#${hostName}`));
  const ptrojanwstls = atob(btoa(`trojan://${Pswd}@${CDNIP}:8443?security=tls&type=ws&host=${hostName}&sni=${hostName}&fp=random&path=%2F%3Fed%3D2560#${hostName}`));
  const note = `ProxyIP全局运行中：${proxyIP}`;
  const ty = `https://${hostName}/${Pswd}/ty`
  const cl = `https://${hostName}/${Pswd}/cl`
  const sb = `https://${hostName}/${Pswd}/sb`
  const pty = `https://${hostName}/${Pswd}/pty`
  const pcl = `https://${hostName}/${Pswd}/pcl`
  const psb = `https://${hostName}/${Pswd}/psb`

  const wktrojanshare = btoa(`trojan://${Pswd}@${IP1}:${PT1}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T1_${IP1}_${PT1}\ntrojan://${Pswd}@${IP2}:${PT2}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T2_${IP2}_${PT2}\ntrojan://${Pswd}@${IP3}:${PT3}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T3_${IP3}_${PT3}\ntrojan://${Pswd}@${IP4}:${PT4}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T4_${IP4}_${PT4}\ntrojan://${Pswd}@${IP5}:${PT5}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T5_${IP5}_${PT5}\ntrojan://${Pswd}@${IP6}:${PT6}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T6_${IP6}_${PT6}\ntrojan://${Pswd}@${IP7}:${PT7}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T7_${IP7}_${PT7}\ntrojan://${Pswd}@${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T8_${IP8}_${PT8}\ntrojan://${Pswd}@${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T9_${IP9}_${PT9}\ntrojan://${Pswd}@${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T10_${IP10}_${PT10}\ntrojan://${Pswd}@${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T11_${IP11}_${PT11}\ntrojan://${Pswd}@${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T12_${IP12}_${PT12}\ntrojan://${Pswd}@${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T13_${IP13}_${PT13}`);
	
  const pgtrojanshare = btoa(`trojan://${Pswd}@${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T8_${IP8}_${PT8}\ntrojan://${Pswd}@${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T9_${IP9}_${PT9}\ntrojan://${Pswd}@${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T10_${IP10}_${PT10}\ntrojan://${Pswd}@${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T11_${IP11}_${PT11}\ntrojan://${Pswd}@${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T12_${IP12}_${PT12}\ntrojan://${Pswd}@${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_T13_${IP13}_${PT13}`);
	
  const noteshow = note.replace(/\n/g, '<br>');
  const displayHtml = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
/* 全局透明设置 */
* {
  background-color: transparent !important;
  border-color: #0ff !important;
}

/* 文本元素颜色修正 - 针对所有可能的黑色文本 */
body, p, li, td, th, h1, h2, h3, h4, h5, h6, div, span, table, tbody, thead, tr {
  color: #8ff !important; /* 浅青色文本，覆盖黑色 */
}

/* 星空背景 */
body {
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  z-index: -1;
}

/* 星星动画 */
.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle linear infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* 主标题样式 */
.main-title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
  color: transparent;
  -webkit-text-stroke: 1px #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff;
}

/* 副标题样式 */
.sub-title {
  text-align: center;
  color: #0ff !important; /* 主青色标题 */
  margin: 1rem 0;
  text-shadow: 0 0 3px #0ff;
}

/* 内容容器 */
.container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 卡片样式 */
.card {
  border: 1px solid #0ff;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 0 10px #0ff, inset 0 0 10px #0ff;
}

/* 表格样式 */
.table {
  margin: 1rem 0;
}

.table th {
  color: #0ff !important; /* 表格标题主青色 */
  border-bottom: 1px solid #0ff;
}

.table td {
  border-bottom: 1px dashed #0ff;
}

/* 按钮样式 */
.btn-primary {
  color: #0ff !important; /* 按钮文本主青色 */
  border: 1px solid #0ff;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: transparent;
}

.btn-primary::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(143, 255, 255, 0) 0%,
    rgba(143, 255, 255, 0.3) 50%,
    rgba(143, 255, 255, 0) 100%
  );
  transform: rotate(30deg);
  animation: scan 3s infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%) rotate(30deg); }
  100% { transform: translateX(100%) rotate(30deg); }
}

.btn-primary:hover {
  box-shadow: 0 0 10px #0ff, inset 0 0 10px #0ff;
  color: #8ff !important; /* 按钮 hover 浅青色 */
}

/* 文本样式 */
p, li {
  line-height: 1.6;
}

.limited-width {
  max-width: 200px;
  overflow: auto;
  word-wrap: break-word;
}

/* 适配手机 */
@media (max-width: 768px) {
  .main-title {
    font-size: 2rem;
  }
  
  .card {
    padding: 1rem;
    margin: 1rem 0;
  }
  
  .container {
    padding: 1rem 0.5rem;
  }
}
</style>
</head>
<script>
// 生成星空背景
document.addEventListener('DOMContentLoaded', function() {
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);
  
  const starCount = 200;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 2 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDuration = Math.random() * 5 + 2 + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    starsContainer.appendChild(star);
  }
});

function copyToClipboard(text) {
  const input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  alert('已复制到剪贴板');
}
</script>
`;
if (hostName.includes("workers.dev")) {
return `
${displayHtml}
<body>
    <h1 class="main-title">浩瀚宇宙隧道</h1>
    <h3 class="sub-title">穿越星际之门 · 版本 V28.6.2</h3>
    
    <div class="container">
        <div class="card">
            <p class="sub-title">当前星际节点：${noteshow}</p>
        </div>

        <div class="card">
            <h3 class="sub-title">1：无加密星际通道</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>通道特性</th>
                        <th>连接地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>无TLS加密 · 抗域名阻断</td>
                        <td class="limited-width">${wtrojanws}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${wtrojanws}')">复制通道</button></td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="sub-title">通道参数</h4>
            <ul>
                <li>星际坐标(address)：自定义域名/优选IP</li>
                <li>端口(port)：80、8080、8880、2052、2082、2086、2095</li>
                <li>密钥(password)：${Pswd}</li>
                <li>传输协议：ws/websocket</li>
                <li>伪装域名(host)：${hostName}</li>
                <li>路径(path)：/?ed=2560</li>
                <li>传输安全：关闭</li>
            </ul>
        </div>

        <div class="card">
            <h3 class="sub-title">2：加密星际通道</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>通道特性</th>
                        <th>连接地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TLS加密 · 支持分片传输</td>
                        <td class="limited-width">${ptrojanwstls}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${ptrojanwstls}')">复制通道</button></td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="sub-title">通道参数</h4>
            <ul>
                <li>星际坐标(address)：自定义域名/优选IP</li>
                <li>端口(port)：443、8443、2053、2083、2087、2096</li>
                <li>密钥(password)：${Pswd}</li>
                <li>传输协议：ws/websocket</li>
                <li>伪装域名(host)：${hostName}</li>
                <li>路径(path)：/?ed=2560</li>
                <li>传输安全：开启</li>
                <li>证书验证：开启</li>
            </ul>
        </div>

        <div class="card">
            <h3 class="sub-title">3：星际订阅中心</h3>
            <p>提示：包含13个端口节点 · 需代理更新 · 支持分片功能</p>
            
            <table class="table">
                <thead>
                    <tr><th>通用分享链接</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${wktrojanshare}')">复制通用链接</button></td>
                    </tr>
                </tbody>
            </table>

            <table class="table">
                <thead>
                    <tr><th>通用订阅链接</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="limited-width">${ty}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${ty}')">复制订阅</button></td>
                    </tr>
                </tbody>
            </table>

            <table class="table">
                <thead>
                    <tr><th>Clash-meta订阅</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="limited-width">${cl}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${cl}')">复制订阅</button></td>
                    </tr>
                </tbody>
            </table>

            <table class="table">
                <thead>
                    <tr><th>Sing-box订阅</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="limited-width">${sb}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${sb}')">复制订阅</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
`;
  } else {
    return `
${displayHtml}
<body>
    <h1 class="main-title">浩瀚宇宙隧道</h1>
    <h3 class="sub-title">穿越星际之门 · 版本 V28.6.2</h3>
    
    <div class="container">
        <div class="card">
            <p class="sub-title">当前星际节点：${noteshow}</p>
        </div>

        <div class="card">
            <h3 class="sub-title">1：加密星际通道</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>通道特性</th>
                        <th>连接地址</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>TLS加密 · 支持分片传输</td>
                        <td class="limited-width">${ptrojanwstls}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${ptrojanwstls}')">复制通道</button></td>
                    </tr>
                </tbody>
            </table>
            
            <h4 class="sub-title">通道参数</h4>
            <ul>
                <li>星际坐标(address)：自定义域名/优选IP</li>
                <li>端口(port)：443、8443、2053、2083、2087、2096</li>
                <li>密钥(password)：${Pswd}</li>
                <li>传输协议：ws/websocket</li>
                <li>伪装域名(host)：${hostName}</li>
                <li>路径(path)：/?ed=2560</li>
                <li>传输安全：开启</li>
                <li>证书验证：开启</li>
            </ul>
        </div>

        <div class="card">
            <h3 class="sub-title">2：星际订阅中心</h3>
            <p>提示：包含6个TLS端口节点 · 支持分片功能</p>
            
            <table class="table">
                <thead>
                    <tr><th>通用分享链接</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${pgtrojanshare}')">复制通用链接</button></td>
                    </tr>
                </tbody>
            </table>

            <table class="table">
                <thead>
                    <tr><th>通用订阅链接</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="limited-width">${pty}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${pty}')">复制订阅</button></td>
                    </tr>
                </tbody>
            </table>

            <table class="table">
                <thead>
                    <tr><th>Clash-meta订阅</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="limited-width">${pcl}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${pcl}')">复制订阅</button></td>
                    </tr>
                </tbody>
            </table>

            <table class="table">
                <thead>
                    <tr><th>Sing-box订阅</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="limited-width">${psb}</td>
                        <td><button class="btn btn-primary" onclick="copyToClipboard('${psb}')">复制订阅</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</body>
`;
  }
}
