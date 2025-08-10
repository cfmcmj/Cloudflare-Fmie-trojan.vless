function get\u0076\u006c\u0065\u0073\u0073Config(userID, hostName) {
  const w\u0076\u006c\u0065\u0073\u0073ws = `\u0076\u006c\u0065\u0073\u0073://${userID}@${CDNIP}:8880?encryption=none&security=none&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#${hostName}`;
  const p\u0076\u006c\u0065\u0073\u0073wstls = `\u0076\u006c\u0065\u0073\u0073://${userID}@${CDNIP}:8443?encryption=none&security=tls&type=ws&host=${hostName}&sni=${hostName}&fp=random&path=%2F%3Fed%3D2560#${hostName}`;
  const note = `全局ProxyIP：${proxyIP}`;
  const ty = `https://${hostName}/${userID}/ty`
  const cl = `https://${hostName}/${userID}/cl`
  const sb = `https://${hostName}/${userID}/sb`
  const pty = `https://${hostName}/${userID}/pty`
  const pcl = `https://${hostName}/${userID}/pcl`
  const psb = `https://${hostName}/${userID}/psb`

  const wk\u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073://${userID}@${IP1}:${PT1}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V1_${IP1}_${PT1}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP2}:${PT2}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V2_${IP2}_${PT2}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP3}:${PT3}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V3_${IP3}_${PT3}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP4}:${PT4}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V4_${IP4}_${PT4}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP5}:${PT5}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V5_${IP5}_${PT5}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP6}:${PT6}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V6_${IP6}_${PT6}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP7}:${PT7}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V7_${IP7}_${PT7}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);


  const pg\u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073://${userID}@${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073://${userID}@${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);	

	
  const noteshow = note.replace(/\n/g, '<br>');
  const displayHtml = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<style>
/* 基础样式重置 */
body {
  background: #000;
  color: #fff;
  padding: 20px 0;
}

/* 容器样式 - 科幻感卡片 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  padding: 30px 20px;
}

/* 标题样式 - 居中+轮廓发光 */
.container h1, .container h3, .container h5 {
  text-align: center;
  margin: 20px 0;
  position: relative;
}

/* 主标题特殊样式 */
.container h1 {
  color: transparent;
  -webkit-text-stroke: 1px #0ff;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.8);
  font-size: 2.5rem;
}

/* 次级标题样式 */
.container h3 {
  color: #0ff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
  padding-bottom: 10px;
}

/* 文本样式 */
.container p, .container ul li {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
  line-height: 1.8;
}

/* 表格样式 - 透明背景+青色边框 */
.table {
  width: 100%;
  margin: 20px 0;
  background: transparent;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 12px 15px;
  border: 1px solid rgba(0, 255, 255, 0.4);
  text-align: left;
}

.table th {
  background: rgba(0, 255, 255, 0.1);
  color: #0ff;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
}

/* 链接容器样式 */
.limited-width {
  max-width: 200px;
  overflow: auto;
  word-wrap: break-word;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
}

/* 按钮样式 - 透明+发光边框+扫描动画 */
.btn-primary {
  position: relative;
  background: transparent;
  border: 1px solid #0ff;
  color: #0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  transition: all 0.3s ease;
}

/* 按钮悬停扫描动画 */
.btn-primary::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.2), transparent);
  transform: skewX(-25deg);
  transition: all 0.6s ease;
}

.btn-primary:hover::after {
  left: 125%;
}

.btn-primary:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
  border-color: #0ff;
  color: #0ff;
}

/* 分隔线样式 */
hr {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent);
  margin: 30px 0;
}

/* 手机端适配 */
@media (max-width: 768px) {
  .container {
    padding: 20px 10px;
  }
  
  .container h1 {
    font-size: 2rem;
  }
  
  .table th, .table td {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
  
  .limited-width {
    max-width: 150px;
  }
}
</style>
</head>
<script>
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
<br>
<br>
${displayHtml}
<body>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>穿越时空隧道之羽 V28.6.2</h1>
	    <hr>
            <p>${noteshow}</p>
            <hr>
	    <hr>
	    <hr>
            <br>
            <br>
            <h3>1：CF-workers-\u0076\u006c\u0065\u0073\u0073+ws节点</h3>
			<table class="table">
				<thead>
					<tr>
						<th>节点特色：</th>
						<th>单节点链接如下：</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="limited-width">关闭了TLS加密，无视域名阻断</td>
						<td class="limited-width">${w\u0076\u006c\u0065\u0073\u0073ws}</td>
						<td><button class="btn btn-primary" onclick="copyToClipboard('${w\u0076\u006c\u0065\u0073\u0073ws}')">点击复制链接</button></td>
					</tr>
				</tbody>
			</table>
            <h5>客户端参数如下：</h5>
            <ul>
                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>
                <li>端口(port)：7个http端口可任意选择(80、8080、8880、2052、2082、2086、2095)，或反代IP对应端口</li>
                <li>用户ID(uuid)：${userID}</li>
                <li>传输协议(network)：ws 或者 websocket</li>
                <li>伪装域名(host)：${hostName}</li>
                <li>路径(path)：/?ed=2560</li>
		<li>传输安全(TLS)：关闭</li>
            </ul>
            <hr>
			<hr>
			<hr>
            <br>
            <br>
            <h3>2：CF-workers-\u0076\u006c\u0065\u0073\u0073+ws+tls节点</h3>
			<table class="table">
				<thead>
					<tr>
						<th>节点特色：</th>
						<th>单节点链接如下：</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="limited-width">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，建议开启，防止域名阻断</td>
						<td class="limited-width">${p\u0076\u006c\u0065\u0073\u0073wstls}</td>	
						<td><button class="btn btn-primary" onclick="copyToClipboard('${p\u0076\u006c\u0065\u0073\u0073wstls}')">点击复制链接</button></td>
					</tr>
				</tbody>
			</table>
            <h5>客户端参数如下：</h5>
            <ul>
                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>
                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>
                <li>用户ID(uuid)：${userID}</li>
                <li>传输协议(network)：ws 或者 websocket</li>
                <li>伪装域名(host)：${hostName}</li>
                <li>路径(path)：/?ed=2560</li>
                <li>传输安全(TLS)：开启</li>
                <li>跳过证书验证(allowlnsecure)：false</li>
			</ul>
			<hr>
			<hr>
			<hr>
			<br>	
			<br>
			<h3>3：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>
			<hr>
			<p>注意：<br>1、默认每个订阅链接包含TLS+非TLS共13个端口节点<br>2、当前workers域名作为订阅链接，需通过代理进行订阅更新<br>3、如使用的客户端不支持分片功能，则TLS节点不可用</p>
			<hr>


			<table class="table">
					<thead>
						<tr>
							<th>聚合通用分享链接 (可直接导入客户端)：</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><button class="btn btn-primary" onclick="copyToClipboard('${wk\u0076\u006c\u0065\u0073\u0073share}')">点击复制链接</button></td>
						</tr>
					</tbody>
				</table>


   
			<table class="table">
					<thead>
						<tr>
							<th>聚合通用订阅链接：</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="limited-width">${ty}</td>	
							<td><button class="btn btn-primary" onclick="copyToClipboard('${ty}')">点击复制链接</button></td>
						</tr>
					</tbody>
				</table>	

				<table class="table">
						<thead>
							<tr>
								<th>Clash-meta订阅链接：</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="limited-width">${cl}</td>	
								<td><button class="btn btn-primary" onclick="copyToClipboard('${cl}')">点击复制链接</button></td>
							</tr>
						</tbody>
					</table>

					<table class="table">
					<thead>
						<tr>
							<th>Sing-box订阅链接：</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="limited-width">${sb}</td>	
							<td><button class="btn btn-primary" onclick="copyToClipboard('${sb}')">点击复制链接</button></td>
						</tr>
					</tbody>
				</table>
				<br>
				<br>
        </div>
    </div>
</div>
</body>
`;
  } else {
    return `
<br>
<br>
${displayHtml}
<body>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>穿越时空隧道之羽 V28.6.2</h1>
			<hr>
            <p>${noteshow}</p>
            <hr>
			<hr>
			<hr>
            <br>
            <br>
            <h3>1：CF-pages/workers/自定义域-\u0076\u006c\u0065\u0073\u0073+ws+tls节点</h3>
			<table class="table">
				<thead>
					<tr>
						<th>节点特色：</th>
						<th>单节点链接如下：</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="limited-width">启用了TLS加密，<br>如果客户端支持分片(Fragment)功能，可开启，防止域名阻断</td>
						<td class="limited-width">${p\u0076\u006c\u0065\u0073\u0073wstls}</td>
						<td><button class="btn btn-primary" onclick="copyToClipboard('${p\u0076\u006c\u0065\u0073\u0073wstls}')">点击复制链接</button></td>
					</tr>
				</tbody>
			</table>
            <h5>客户端参数如下：</h5>
            <ul>
                <li>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>
                <li>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>
                <li>用户ID(uuid)：${userID}</li>
                <li>传输协议(network)：ws 或者 websocket</li>
                <li>伪装域名(host)：${hostName}</li>
                <li>路径(path)：/?ed=2560</li>
                <li>传输安全(TLS)：开启</li>
                <li>跳过证书验证(allowlnsecure)：false</li>
			</ul>
            <hr>
			<hr>
			<hr>
            <br>
            <br>
			<h3>2：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>
			<hr>
			<p>注意：以下订阅链接仅6个TLS端口节点</p>
			<hr>


			<table class="table">
					<thead>
						<tr>
							<th>聚合通用分享链接 (可直接导入客户端)：</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><button class="btn btn-primary" onclick="copyToClipboard('${pg\u0076\u006c\u0065\u0073\u0073share}')">点击复制链接</button></td>
						</tr>
					</tbody>
				</table>



			<table class="table">
					<thead>
						<tr>
							<th>聚合通用订阅链接：</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="limited-width">${pty}</td>	
							<td><button class="btn btn-primary" onclick="copyToClipboard('${pty}')">点击复制链接</button></td>
						</tr>
					</tbody>
				</table>	

				<table class="table">
						<thead>
							<tr>
								<th>Clash-meta订阅链接：</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="limited-width">${pcl}</td>	
								<td><button class="btn btn-primary" onclick="copyToClipboard('${pcl}')">点击复制链接</button></td>
							</tr>
						</tbody>
					</table>

					<table class="table">
					<thead>
						<tr>
							<th>Sing-box订阅链接：</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="limited-width">${psb}</td>	
							<td><button class="btn btn-primary" onclick="copyToClipboard('${psb}')">点击复制链接</button></td>
						</tr>
					</tbody>
				</table>
				<br>
				<br>
        </div>
    </div>
</div>
</body>
`;
  }
}
