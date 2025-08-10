//nat64自动填充proxyip，无需且不支持proxyip设置
import { connect } from "cloudflare:sockets";
const WS_READY_STATE_OPEN = 1;
let userID = "75b75ea5-4e70-438c-b873-59a8195eb628";
const cn_hostnames = [''];
let CDNIP = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0073\u0067'
// http_ip
let IP1 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP2 = '\u0063\u0069\u0073\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP3 = '\u0061\u0066\u0072\u0069\u0063\u0061\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP4 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0073\u0067'
let IP5 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u0065\u0075\u0072\u006f\u0070\u0065\u002e\u0061\u0074'
let IP6 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u006d\u0074'
let IP7 = '\u0071\u0061\u002e\u0076\u0069\u0073\u0061\u006d\u0069\u0064\u0064\u006c\u0065\u0065\u0061\u0073\u0074\u002e\u0063\u006f\u006d'

// https_ip
let IP8 = '\u0075\u0073\u0061\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP9 = '\u006d\u0079\u0061\u006e\u006d\u0061\u0072\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d'
let IP10 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0074\u0077'
let IP11 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u0065\u0075\u0072\u006f\u0070\u0065\u002e\u0063\u0068'
let IP12 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u002e\u0063\u006f\u006d\u002e\u0062\u0072'
let IP13 = '\u0077\u0077\u0077\u002e\u0076\u0069\u0073\u0061\u0073\u006f\u0075\u0074\u0068\u0065\u0061\u0073\u0074\u0065\u0075\u0072\u006f\u0070\u0065\u002e\u0063\u006f\u006d'

// http_port
let PT1 = '80'
let PT2 = '8080'
let PT3 = '8880'
let PT4 = '2052'
let PT5 = '2082'
let PT6 = '2086'
let PT7 = '2095'

// https_port
let PT8 = '443'
let PT9 = '8443'
let PT10 = '2053'
let PT11 = '2083'
let PT12 = '2087'
let PT13 = '2096'

export default {
  /**
   * @param {any} request
   * @param {{uuid: string, proxyip: string, cdnip: string, ip1: string, ip2: string, ip3: string, ip4: string, ip5: string, ip6: string, ip7: string, ip8: string, ip9: string, ip10: string, ip11: string, ip12: string, ip13: string, pt1: string, pt2: string, pt3: string, pt4: string, pt5: string, pt6: string, pt7: string, pt8: string, pt9: string, pt10: string, pt11: string, pt12: string, pt13: string}} env
   * @param {any} ctx
   * @returns {Promise<Response>}
   */
  async fetch(request, env, ctx) {
    try {
      userID = env.uuid || userID;
      CDNIP = env.cdnip || CDNIP;
	  IP1 = env.ip1 || IP1;
	  IP2 = env.ip2 || IP2;
	  IP3 = env.ip3 || IP3;
	  IP4 = env.ip4 || IP4;
	  IP5 = env.ip5 || IP5;
	  IP6 = env.ip6 || IP6;
	  IP7 = env.ip7 || IP7;
	  IP8 = env.ip8 || IP8;
	  IP9 = env.ip9 || IP9;
	  IP10 = env.ip10 || IP10;
	  IP11 = env.ip11 || IP11;
	  IP12 = env.ip12 || IP12;
	  IP13 = env.ip13 || IP13;
	  PT1 = env.pt1 || PT1;
	  PT2 = env.pt2 || PT2;
	  PT3 = env.pt3 || PT3;
	  PT4 = env.pt4 || PT4;
	  PT5 = env.pt5 || PT5;
	  PT6 = env.pt6 || PT6;
	  PT7 = env.pt7 || PT7;
	  PT8 = env.pt8 || PT8;
	  PT9 = env.pt9 || PT9;
	  PT10 = env.pt10 || PT10;
	  PT11 = env.pt11 || PT11;
	  PT12 = env.pt12 || PT12;
	  PT13 = env.pt13 || PT13;
      const upgradeHeader = request.headers.get("Upgrade");
      const url = new URL(request.url);
      if (!upgradeHeader || upgradeHeader !== "websocket") {
        const url = new URL(request.url);
        switch (url.pathname) {
          case `/${userID}`: {
            const \u0076\u006c\u0065\u0073\u0073Config = get\u0076\u006c\u0065\u0073\u0073Config(userID, request.headers.get("Host"));
            return new Response(`${\u0076\u006c\u0065\u0073\u0073Config}`, {
              status: 200,
              headers: {
                "Content-Type": "text/html;charset=utf-8",
              },
            });
          }
		  case `/${userID}/ty`: {
			const tyConfig = gettyConfig(userID, request.headers.get('Host'));
			return new Response(`${tyConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${userID}/cl`: {
			const clConfig = getclConfig(userID, request.headers.get('Host'));
			return new Response(`${clConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${userID}/sb`: {
			const sbConfig = getsbConfig(userID, request.headers.get('Host'));
			return new Response(`${sbConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				}
			});
		}
		case `/${userID}/pty`: {
			const ptyConfig = getptyConfig(userID, request.headers.get('Host'));
			return new Response(`${ptyConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${userID}/pcl`: {
			const pclConfig = getpclConfig(userID, request.headers.get('Host'));
			return new Response(`${pclConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				}
			});
		}
		case `/${userID}/psb`: {
			const psbConfig = getpsbConfig(userID, request.headers.get('Host'));
			return new Response(`${psbConfig}`, {
				status: 200,
				headers: {
					"Content-Type": "application/json;charset=utf-8",
				}
			});
		}
          default:
            // return new Response('Not found', { status: 404 });
            // For any other path, reverse proxy to 'ramdom website' and return the original response, caching it in the process
			if (url.pathname === '/') {
    // 从环境变量获取密码，默认空
    const password = env.password || 'helloword';
    // 处理表单提交
    if (request.method === 'POST') {
        return request.formData().then(formData => {
            const inputPassword = formData.get('password') || '';
            if (inputPassword === password) {
                // 密码正确，跳转到配置页
                return new Response(null, {
                    status: 302,
                    headers: { 'Location': `/${userID}` }
                });
            } else {
                // 密码错误，返回错误页面
                return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Access Denied</title>
    <style>
        body { background: #0a0a23; color: white; text-align: center; padding: 50px; }
        .error { color: #ff0000; margin: 20px 0; }
        .button { background: linear-gradient(45deg, #00d4ff, #ff00ff); color: white; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; }
    </style>
</head>
<body>
    <h1>Access Denied</h1>
    <div class="error">Incorrect password</div>
    <form method="POST">
        <input type="password" name="password" placeholder="Enter Password" required>
        <button type="submit" class="button">Submit</button>
    </form>
</body>
</html>`, {
                    status: 403,
                    headers: { 'Content-Type': 'text/html;charset=utf-8' }
                });
            }
        });
    }
    // 显示密码输入页
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="format-detection" content="telephone=no">
    <title>Cosmic Proxy</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(180deg, #0a0a23 0%, #1b1b4f 100%);
            color: #ffffff;
            overflow-x: hidden;
            min-height: 100vh;
        }
        canvas { position: fixed; top: 0; left: 0; z-index: -1; }
        .container { text-align: center; padding: 20px 15px; position: relative; z-index: 1; box-sizing: border-box; }
        h1 {
            font-size: clamp(1.8em, 6vw, 3em);
            text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff;
            margin-bottom: 15px;
            line-height: 1.2;
        }
        p {
            font-size: clamp(1em, 3vw, 1.2em);
            max-width: 600px;
            margin: 0 auto 25px;
            line-height: 1.6;
            padding: 0 5px;
        }
        .input-group {
            max-width: 400px;
            width: 90%;
            margin: 0 auto 20px;
        }
        input {
            padding: 12px 15px;
            font-size: 1em;
            width: 100%;
            border: none;
            border-radius: 25px;
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            text-align: center;
            box-sizing: border-box;
            -webkit-appearance: none;
            appearance: none;
        }
        input::placeholder { color: #cccccc; }
        .button {
            display: inline-block;
            padding: 15px 30px;
            font-size: 1.1em;
            color: #ffffff;
            background: linear-gradient(45deg, #00d4ff, #ff00ff);
            border: none;
            border-radius: 25px;
            text-decoration: none;
            transition: transform 0.3s, box-shadow 0.3s;
            box-shadow: 0 0 15px #00d4ff;
            margin-top: 10px;
            min-width: 200px;
            cursor: pointer;
        }
        .button:hover, .button:focus {
            transform: scale(1.05);
            box-shadow: 0 0 25px #00d4ff, 0 0 50px #ff00ff;
        }
    </style>
</head>
<body>
    <canvas id="stars"></canvas>
    <div class="container">
        <h1>Explore the Cosmos, Roam the Network</h1>
        <p>Star trails weave the code of light-years in the night sky, while code flows as a galaxy of bits in the depths of silicon. The universe folds space-time with black holes, and the network stitches distances with nodes—both harbor humanity's undying curiosity: seeking echoes of civilization beyond billions of light-years, salvaging glimmers of thought from millions of data streams.<br><br>We are both wayfarers gazing at the stars and wanderers traversing the wires. When telescopes aim at the unknown depths of space, when fingertips brush the trembling screen, it is the same longing pulsing within: to measure the boundaries of existence through exploration, to weave a web of meaning through connection. The grandeur of the cosmos and the intricacy of the network resonate most marvelously in humanity's thirst for knowledge.</p>
        <form method="POST" class="input-group">
            <input type="password" name="password" placeholder="Enter Password" required>
            <button type="submit" class="button">Access Proxy Configuration</button>
        </form>
    </div>
    <script>
        // 星空动画保持不变
        const canvas = document.getElementById('stars');
        const ctx = canvas.getContext('2d');
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }
        const stars = [];
        function initStars() {
            stars.length = 0;
            const count = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    speed: Math.random() * 0.5 + 0.1
                });
            }
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
                star.y += star.speed;
                if (star.y > canvas.height) star.y = 0;
            });
            requestAnimationFrame(animate);
        }
        resizeCanvas();
        animate();
        window.addEventListener('resize', resizeCanvas);
        document.addEventListener('touchmove', function(e) {
            if (e.touches.length > 1) e.preventDefault();
        }, { passive: false });
    </script>
</body>
</html>`, {
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=utf-8' }
    });
}
            if (cn_hostnames.includes('')) {
            return new Response(JSON.stringify(request.cf, null, 4), {
              status: 200,
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
            });
            }
            const randomHostname = cn_hostnames[Math.floor(Math.random() * cn_hostnames.length)];
            const newHeaders = new Headers(request.headers);
            newHeaders.set("cf-connecting-ip", "1.2.3.4");
            newHeaders.set("x-forwarded-for", "1.2.3.4");
            newHeaders.set("x-real-ip", "1.2.3.4");
            newHeaders.set("referer", "https://www.google.com/search?q=edtunnel");
            // Use fetch to proxy the request to 15 different domains
            const proxyUrl = "https://" + randomHostname + url.pathname + url.search;
            let modifiedRequest = new Request(proxyUrl, {
              method: request.method,
              headers: newHeaders,
              body: request.body,
              redirect: "manual",
            });
            const proxyResponse = await fetch(modifiedRequest, { redirect: "manual" });
            // Check for 302 or 301 redirect status and return an error response
            if ([301, 302].includes(proxyResponse.status)) {
              return new Response(`Redirects to ${randomHostname} are not allowed.`, {
                status: 403,
                statusText: "Forbidden",
              });
            }
            // Return the response from the proxy server
            return proxyResponse;
        }
      }
      return await handle\u0076\u006c\u0065\u0073\u0073WebSocket(request);
    } catch (err) {
      /** @type {Error} */ let e = err;
      return new Response(e.toString());
    }
  },
};

async function handle\u0076\u006c\u0065\u0073\u0073WebSocket(request) {
  const wsPair = new WebSocketPair();
  const [clientWS, serverWS] = Object.values(wsPair);

  serverWS.accept();

  const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';
  const wsReadable = createWebSocketReadableStream(serverWS, earlyDataHeader);
  let remoteSocket = null;

  let udpStreamWrite = null;
  let isDns = false;
  
  wsReadable.pipeTo(new WritableStream({
    async write(chunk) {

      if (isDns && udpStreamWrite) {
        return udpStreamWrite(chunk);
      }
      
      if (remoteSocket) {
        const writer = remoteSocket.writable.getWriter();
        await writer.write(chunk);
        writer.releaseLock();
        return;
      }

      const result = parse\u0076\u006c\u0065\u0073\u0073Header(chunk, userID);
      if (result.hasError) {
        throw new Error(result.message);
      }

      const \u0076\u006c\u0065\u0073\u0073RespHeader = new Uint8Array([result.\u0076\u006c\u0065\u0073\u0073Version[0], 0]);
      const rawClientData = chunk.slice(result.rawDataIndex);
      
      if (result.isUDP) {
        if (result.portRemote === 53) {
          isDns = true;
          const { write } = await handleUDPOutBound(serverWS, \u0076\u006c\u0065\u0073\u0073RespHeader);
          udpStreamWrite = write;
          udpStreamWrite(rawClientData);
          return;
        } else {
          throw new Error('UDP代理仅支持DNS(端口53)');
        }
      }

      async function connectAndWrite(address, port) {
        const tcpSocket = await connect({
          hostname: address,
          port: port
        });
        remoteSocket = tcpSocket;
        const writer = tcpSocket.writable.getWriter();
        await writer.write(rawClientData);
        writer.releaseLock();
        return tcpSocket;
      }

      function convertToNAT64IPv6(ipv4Address) {
        const parts = ipv4Address.split('.');
        if (parts.length !== 4) {
          throw new Error('无效的IPv4地址');
        }
        
        const hex = parts.map(part => {
          const num = parseInt(part, 10);
          if (num < 0 || num > 255) {
            throw new Error('无效的IPv4地址段');
          }
          return num.toString(16).padStart(2, '0');
        });
        const prefixes = ['2602:fc59:b0:64::']; //2001:67c:2960:6464::
        const chosenPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        return `[${chosenPrefix}${hex[0]}${hex[1]}:${hex[2]}${hex[3]}]`;
      }

      async function getIPv6ProxyAddress(domain) {
        try {
          const dnsQuery = await fetch(`https://1.1.1.1/dns-query?name=${domain}&type=A`, {
            headers: {
              'Accept': 'application/dns-json'
            }
          });
          
          const dnsResult = await dnsQuery.json();
          if (dnsResult.Answer && dnsResult.Answer.length > 0) {
            const aRecord = dnsResult.Answer.find(record => record.type === 1);
            if (aRecord) {
              const ipv4Address = aRecord.data;
              return convertToNAT64IPv6(ipv4Address);
            }
          }
          throw new Error('无法解析域名的IPv4地址');
        } catch (err) {
          throw new Error(`DNS解析失败: ${err.message}`);
        }
      }

      async function retry() {
        try {
          const proxyIP = await getIPv6ProxyAddress(result.addressRemote);
          console.log(`尝试通过NAT64 IPv6地址 ${proxyIP} 连接...`);
          const tcpSocket = await connect({
            hostname: proxyIP,
            port: result.portRemote
          });
          remoteSocket = tcpSocket;
          const writer = tcpSocket.writable.getWriter();
          await writer.write(rawClientData);
          writer.releaseLock();

          tcpSocket.closed.catch(error => {
            console.error('NAT64 IPv6连接关闭错误:', error);
          }).finally(() => {
            if (serverWS.readyState === WS_READY_STATE_OPEN) {
              serverWS.close(1000, '连接已关闭');
            }
          });
          
          pipeRemoteToWebSocket(tcpSocket, serverWS, \u0076\u006c\u0065\u0073\u0073RespHeader, null);
        } catch (err) {
          console.error('NAT64 IPv6连接失败:', err);
          serverWS.close(1011, 'NAT64 IPv6连接失败: ' + err.message);
        }
      }

      try {
        const tcpSocket = await connectAndWrite(result.addressRemote, result.portRemote);
        pipeRemoteToWebSocket(tcpSocket, serverWS, \u0076\u006c\u0065\u0073\u0073RespHeader, retry);
      } catch (err) {
        console.error('连接失败:', err);
        serverWS.close(1011, '连接失败');
      }
    },
    close() {
      if (remoteSocket) {
        closeSocket(remoteSocket);
      }
    }
  })).catch(err => {
    console.error('WebSocket 错误:', err);
    closeSocket(remoteSocket);
    serverWS.close(1011, '内部错误');
  });

  return new Response(null, {
    status: 101,
    webSocket: clientWS,
  });
}

function createWebSocketReadableStream(ws, earlyDataHeader) {
  return new ReadableStream({
    start(controller) {
      ws.addEventListener('message', event => {
        controller.enqueue(event.data);
      });
      
      ws.addEventListener('close', () => {
        controller.close();
      });
      
      ws.addEventListener('error', err => {
        controller.error(err);
      });
      
      if (earlyDataHeader) {
        try {
          const decoded = atob(earlyDataHeader.replace(/-/g, '+').replace(/_/g, '/'));
          const data = Uint8Array.from(decoded, c => c.charCodeAt(0));
          controller.enqueue(data.buffer);
        } catch (e) {
        }
      }
    }
  });
}

function parse\u0076\u006c\u0065\u0073\u0073Header(buffer, userID) {
  if (buffer.byteLength < 24) {
    return { hasError: true, message: '无效的头部长度' };
  }
  
  const view = new DataView(buffer);
  const version = new Uint8Array(buffer.slice(0, 1));
  
  const uuid = formatUUID(new Uint8Array(buffer.slice(1, 17)));
  if (uuid !== userID) {
    return { hasError: true, message: '无效的用户' };
  }
  
  const optionsLength = view.getUint8(17);
  const command = view.getUint8(18 + optionsLength);

  let isUDP = false;
  if (command === 1) {

  } else if (command === 2) {

    isUDP = true;
  } else {
    return { hasError: true, message: '不支持的命令，仅支持TCP(01)和UDP(02)' };
  }
  
  let offset = 19 + optionsLength;
  const port = view.getUint16(offset);
  offset += 2;
  
  const addressType = view.getUint8(offset++);
  let address = '';
  
  switch (addressType) {
    case 1: // IPv4
      address = Array.from(new Uint8Array(buffer.slice(offset, offset + 4))).join('.');
      offset += 4;
      break;
      
    case 2: // 域名
      const domainLength = view.getUint8(offset++);
      address = new TextDecoder().decode(buffer.slice(offset, offset + domainLength));
      offset += domainLength;
      break;
      
    case 3: // IPv6
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        ipv6.push(view.getUint16(offset).toString(16).padStart(4, '0'));
        offset += 2;
      }
      address = ipv6.join(':').replace(/(^|:)0+(\w)/g, '$1$2');
      break;
      
    default:
      return { hasError: true, message: '不支持的地址类型' };
  }
  
  return {
    hasError: false,
    addressRemote: address,
    portRemote: port,
    rawDataIndex: offset,
    \u0076\u006c\u0065\u0073\u0073Version: version,
    isUDP
  };
}

function pipeRemoteToWebSocket(remoteSocket, ws, \u0076\u006c\u0065\u0073\u0073Header, retry = null) {
  let headerSent = false;
  let hasIncomingData = false;
  
  remoteSocket.readable.pipeTo(new WritableStream({
    write(chunk) {
      hasIncomingData = true;
      if (ws.readyState === WS_READY_STATE_OPEN) {
        if (!headerSent) {
          const combined = new Uint8Array(\u0076\u006c\u0065\u0073\u0073Header.byteLength + chunk.byteLength);
          combined.set(new Uint8Array(\u0076\u006c\u0065\u0073\u0073Header), 0);
          combined.set(new Uint8Array(chunk), \u0076\u006c\u0065\u0073\u0073Header.byteLength);
          ws.send(combined.buffer);
          headerSent = true;
        } else {
          ws.send(chunk);
        }
      }
    },
    close() {
      if (!hasIncomingData && retry) {
        retry();
        return;
      }
      if (ws.readyState === WS_READY_STATE_OPEN) {
        ws.close(1000, '正常关闭');
      }
    },
    abort() {
      closeSocket(remoteSocket);
    }
  })).catch(err => {
    console.error('数据转发错误:', err);
    closeSocket(remoteSocket);
    if (ws.readyState === WS_READY_STATE_OPEN) {
      ws.close(1011, '数据传输错误');
    }
  });
}

function closeSocket(socket) {
  if (socket) {
    try {
      socket.close();
    } catch (e) {
    }
  }
}

function formatUUID(bytes) {
  const hex = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0,8)}-${hex.slice(8,12)}-${hex.slice(12,16)}-${hex.slice(16,20)}-${hex.slice(20)}`;
}

async function handleUDPOutBound(webSocket, \u0076\u006c\u0065\u0073\u0073ResponseHeader) {
  let is\u0076\u006c\u0065\u0073\u0073HeaderSent = false;
  const transformStream = new TransformStream({
    start(controller) {
    },
    transform(chunk, controller) {
      for (let index = 0; index < chunk.byteLength;) {
        const lengthBuffer = chunk.slice(index, index + 2);
        const udpPacketLength = new DataView(lengthBuffer).getUint16(0);
        const udpData = new Uint8Array(
          chunk.slice(index + 2, index + 2 + udpPacketLength)
        );
        index = index + 2 + udpPacketLength;
        controller.enqueue(udpData);
      }
    },
    flush(controller) {
    }
  });

  transformStream.readable.pipeTo(new WritableStream({
    async write(chunk) {
      const resp = await fetch('https://1.1.1.1/dns-query',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/dns-message',
          },
          body: chunk,
        })
      const dnsQueryResult = await resp.arrayBuffer();
      const udpSize = dnsQueryResult.byteLength;
      const udpSizeBuffer = new Uint8Array([(udpSize >> 8) & 0xff, udpSize & 0xff]);
      
      if (webSocket.readyState === WS_READY_STATE_OPEN) {
        console.log(`DNS查询成功，DNS消息长度为 ${udpSize}`);
        if (is\u0076\u006c\u0065\u0073\u0073HeaderSent) {
          webSocket.send(await new Blob([udpSizeBuffer, dnsQueryResult]).arrayBuffer());
        } else {
          webSocket.send(await new Blob([\u0076\u006c\u0065\u0073\u0073ResponseHeader, udpSizeBuffer, dnsQueryResult]).arrayBuffer());
          is\u0076\u006c\u0065\u0073\u0073HeaderSent = true;
        }
      }
    }
  })).catch((error) => {
    console.error('DNS UDP处理错误:', error);
  });

  const writer = transformStream.writable.getWriter();

  return {
    write(chunk) {
      writer.write(chunk);
    }
  };
}
/**
 *
 * @param {string} userID
 * @param {string | null} hostName
 * @returns {string}
 */
function get\u0076\u006c\u0065\u0073\u0073Config(userID, hostName) {
  const w\u0076\u006c\u0065\u0073\u0073ws = `\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${CDNIP}:8880?encryption=none&security=none&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#${hostName}`;
  const p\u0076\u006c\u0065\u0073\u0073wstls = `\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${CDNIP}:8443?encryption=none&security=tls&type=ws&host=${hostName}&sni=${hostName}&fp=random&path=%2F%3Fed%3D2560#${hostName}`;
  const note = `proxyIP does not need to be set manually`;
  const ty = `https://${hostName}/${userID}/ty`
  const cl = `https://${hostName}/${userID}/cl`
  const sb = `https://${hostName}/${userID}/sb`
  const pty = `https://${hostName}/${userID}/pty`
  const pcl = `https://${hostName}/${userID}/pcl`
  const psb = `https://${hostName}/${userID}/psb`

  const wk\u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP1}:${PT1}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V1_${IP1}_${PT1}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP2}:${PT2}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V2_${IP2}_${PT2}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP3}:${PT3}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V3_${IP3}_${PT3}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP4}:${PT4}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V4_${IP4}_${PT4}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP5}:${PT5}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V5_${IP5}_${PT5}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP6}:${PT6}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V6_${IP6}_${PT6}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP7}:${PT7}?encryption=none&security=none&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V7_${IP7}_${PT7}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);


  const pg\u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);	

	
  const noteshow = note.replace(/\n/g, '<br>');
  const displayHtml = `
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<style>
/* 粒子背景容器 */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
}

/* 基础样式 */
body {
  background-color: #050a18;
  color: #e0e8ff;
  min-height: 100vh;
  padding: 20px 0;
  background: linear-gradient(135deg, #050a18 0%, #0f1736 100%);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 容器样式 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
}

/* 科技感卡片容器 */
.tech-card {
  background: rgba(15, 23, 54, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
  transition: all 0.75s ease;
  z-index: 0;
}

.tech-card:hover::before {
  left: 100%;
}

/* 标题样式 */
h1, h3, h5 {
  text-align: center;
  font-weight: 700;
  margin: 25px 0;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  background-size: 200% auto;
  animation: textShine 3s linear infinite;
}

@keyframes textShine {
  to { background-position: 200% center; }
}

h1::after, h3::after {
  content: '';
  display: block;
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  margin: 10px auto 0;
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

/* 表格样式 */
.table {
  background-color: rgba(10, 18, 48, 0.7);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(59, 130, 246, 0.2);
  margin: 20px auto;
  width: 100%;
  table-layout: fixed;
  transition: all 0.3s ease;
}

.table:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
}

.table th, .table td {
  border: 1px solid rgba(79, 70, 229, 0.15);
  padding: 12px 15px;
  vertical-align: middle;
  word-wrap: break-word;
  overflow: hidden;
  transition: all 0.3s ease;
}

.table th {
  background-color: rgba(59, 130, 246, 0.1);
  color: #93c5fd;
  font-weight: 600;
  font-family: 'Orbitron', sans-serif;
}

.table tr:hover td {
  background-color: rgba(59, 130, 246, 0.05);
}

/* 表格列宽分配 */
.table th:first-child,
.table td:first-child {
  width: 25%;
}

.table th:nth-child(2),
.table td:nth-child(2) {
  width: 55%;
}

.table th:nth-child(3),
.table td:nth-child(3) {
  width: 20%;
}

/* 单列表格适配 */
.table tr td:only-child {
  width: 100%;
}

/* 按钮样式 */
.btn-primary {
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2), 0 0 15px rgba(59, 130, 246, 0.1) inset;
  width: 100%;
  font-family: 'Orbitron', sans-serif;
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: all 0.6s ease;
}

.btn-primary:hover {
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2) inset;
}

.btn-primary:hover::before {
  left: 100%;
}

/* 按钮加载动画 */
.btn-loading {
  position: relative;
}

.btn-loading::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 15px;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  transform: translateY(-50%);
}

@keyframes spin {
  to { transform: translateY(-50%) rotate(360deg); }
}

/* 列表样式 */
ul {
  max-width: 90%;
  margin: 0 auto;
  padding-left: 25px;
}

ul li {
  margin: 12px 0;
  padding-left: 10px;
  position: relative;
  transition: all 0.3s ease;
}

ul li:hover {
  transform: translateX(5px);
}

ul li::before {
  content: '•';
  color: #60a5fa;
  font-weight: bold;
  position: absolute;
  left: -15px;
  text-shadow: 0 0 5px rgba(59, 130, 246, 0.7);
}

/* 链接容器样式 */
.limited-width {
  width: 100%;
  overflow: auto;
  word-wrap: break-word;
  padding: 10px;
  border-radius: 6px;
  background-color: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}

.limited-width:hover {
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.15);
}

/* 分隔线样式 */
hr {
  border-top: 1px solid rgba(79, 70, 229, 0.2);
  margin: 30px 0;
  position: relative;
}

hr::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
}

/* 提示文本样式 */
p.note, .tech-card p {
  text-align: center;
  color: #93c5fd;
  font-style: italic;
  padding: 10px;
  background-color: rgba(59, 130, 246, 0.05);
  border-radius: 6px;
  border-left: 3px solid #3b82f6;
}

/* 图标样式 */
.icon-tech {
  color: #60a5fa;
  margin-right: 8px;
  text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
}

/* 响应式调整 */
@media (max-width: 768px) {
  h1 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  .tech-card {
    padding: 20px 15px;
  }
  .table {
    font-size: 0.9rem;
  }
  
  /* 移动端表格列宽调整 */
  .table th:first-child,
  .table td:first-child {
    width: 30%;
  }
  
  .table th:nth-child(2),
  .table td:nth-child(2) {
    width: 70%;
  }
  
  /* 隐藏第三列，按钮移至下一行 */
  .table th:nth-child(3),
  .table td:nth-child(3) {
    display: none;
  }
  
  /* 为包含按钮的行添加额外样式 */
  .table tr:has(td:nth-child(3)) td:nth-child(2) {
    position: relative;
    padding-bottom: 45px;
  }
  
  .table tr:has(td:nth-child(3)) td:nth-child(2)::after {
    content: attr(data-btn);
    display: block;
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
  }
}
</style>
</head>
<script>
// 初始化粒子背景
document.addEventListener('DOMContentLoaded', function() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#3b82f6"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3b82f6",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
  }

  // 移动端按钮适配处理
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.table tr td:nth-child(3) button').forEach(btn => {
      const td2 = btn.closest('tr').querySelector('td:nth-child(2)');
      td2.setAttribute('data-btn', btn.outerHTML);
    });
  }
});

// 带加载动画的复制功能
function copyToClipboard(text) {
  const input = document.createElement('textarea');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  
  // 获取当前点击的按钮并显示加载动画
  const btn = event.target.closest('.btn-primary');
  if (btn) {
    btn.classList.add('btn-loading');
  }
  
  try {
    const successful = document.execCommand('Copy');
    if (successful) {
      alert('已复制到剪贴板');
    }
  } catch (err) {
    alert('复制失败，请手动复制');
  } finally {
    document.body.removeChild(input);
    // 隐藏加载动画
    if (btn) {
      btn.classList.remove('btn-loading');
    }
  }
}
</script>
`;
if (hostName.includes("workers.dev")) {
return `
<div id="particles-js"></div>
<br>
${displayHtml}
<body>
<div class="container">
    <div class="tech-card">
        <h1><i class="fas fa-globe-americas icon-tech"></i>穿越时空隧道之羽 V28.6.6</h1>
        <hr>
        <p class="note">${noteshow}</p>
        <hr>
        
        <h3><i class="fas fa-server icon-tech"></i>1：CF-workers-\u0076\u006c\u0065\u0073\u0073+ws节点</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>节点特色：</th>
                    <th>单节点链接如下：</th>
                    <th>操作</th>
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
            <li><i class="fas fa-map-marker-alt icon-tech"></i>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>
            <li><i class="fas fa-portrait icon-tech"></i>端口(port)：7个http端口可任意选择(80、8080、8880、2052、2082、2086、2095)，或反代IP对应端口</li>
            <li><i class="fas fa-id-card-alt icon-tech"></i>用户ID(uuid)：${userID}</li>
            <li><i class="fas fa-exchange-alt icon-tech"></i>传输协议(network)：ws 或者 websocket</li>
            <li><i class="fas fa-mask icon-tech"></i>伪装域名(host)：${hostName}</li>
            <li><i class="fas fa-route icon-tech"></i>路径(path)：/?ed=2560</li>
            <li><i class="fas fa-lock-open icon-tech"></i>传输安全(TLS)：关闭</li>
        </ul>
    </div>

    <div class="tech-card">
        <h3><i class="fas fa-shield-alt icon-tech"></i>2：CF-workers-\u0076\u006c\u0065\u0073\u0073+ws+tls节点</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>节点特色：</th>
                    <th>单节点链接如下：</th>
                    <th>操作</th>
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
            <li><i class="fas fa-map-marker-alt icon-tech"></i>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>
            <li><i class="fas fa-portrait icon-tech"></i>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>
            <li><i class="fas fa-id-card-alt icon-tech"></i>用户ID(uuid)：${userID}</li>
            <li><i class="fas fa-exchange-alt icon-tech"></i>传输协议(network)：ws 或者 websocket</li>
            <li><i class="fas fa-mask icon-tech"></i>伪装域名(host)：${hostName}</li>
            <li><i class="fas fa-route icon-tech"></i>路径(path)：/?ed=2560</li>
            <li><i class="fas fa-lock icon-tech"></i>传输安全(TLS)：开启</li>
            <li><i class="fas fa-check-circle icon-tech"></i>跳过证书验证(allowlnsecure)：false</li>
        </ul>
    </div>

    <div class="tech-card">
        <h3><i class="fas fa-sitemap icon-tech"></i>3：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>
        <hr>
        <p>注意：<br>1、默认每个订阅链接包含TLS+非TLS共13个端口节点<br>2、当前workers域名作为订阅链接，需通过代理进行订阅更新<br>3、如使用的客户端不支持分片功能，则TLS节点不可用</p>
        <hr>

        <table class="table">
            <thead>
                <tr>
                    <th colspan="2">聚合通用分享链接 (可直接导入客户端)：</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2"><button class="btn btn-primary" onclick="copyToClipboard('${wk\u0076\u006c\u0065\u0073\u0073share}')">点击复制链接</button></td>
                </tr>
            </tbody>
        </table>

        <table class="table">
            <thead>
                <tr>
                    <th>聚合通用订阅链接：</th>
                    <th>操作</th>
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
                    <th>操作</th>
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
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="limited-width">${sb}</td>	
                    <td><button class="btn btn-primary" onclick="copyToClipboard('${sb}')">点击复制链接</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</body>
`;
  } else {
    return `
<div id="particles-js"></div>
<br>
${displayHtml}
<body>
<div class="container">
    <div class="tech-card">
        <h1><i class="fas fa-server icon-tech"></i>穿越时空隧道之羽 V28.6.6</h1>
        <hr>
        <p class="note">${noteshow}</p>
        <hr>

        <h3><i class="fas fa-shield-alt icon-tech"></i>1：CF-pages/workers/自定义域-\u0076\u006c\u0065\u0073\u0073+ws+tls节点</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>节点特色：</th>
                    <th>单节点链接如下：</th>
                    <th>操作</th>
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
            <li><i class="fas fa-map-marker-alt icon-tech"></i>客户端地址(address)：自定义的域名 或者 优选域名 或者 优选IP 或者 反代IP</li>
            <li><i class="fas fa-portrait icon-tech"></i>端口(port)：6个https端口可任意选择(443、8443、2053、2083、2087、2096)，或反代IP对应端口</li>
            <li><i class="fas fa-id-card-alt icon-tech"></i>用户ID(uuid)：${userID}</li>
            <li><i class="fas fa-exchange-alt icon-tech"></i>传输协议(network)：ws 或者 websocket</li>
            <li><i class="fas fa-mask icon-tech"></i>伪装域名(host)：${hostName}</li>
            <li><i class="fas fa-route icon-tech"></i>路径(path)：/?ed=2560</li>
            <li><i class="fas fa-lock icon-tech"></i>传输安全(TLS)：开启</li>
            <li><i class="fas fa-check-circle icon-tech"></i>跳过证书验证(allowlnsecure)：false</li>
        </ul>
    </div>

    <div class="tech-card">
        <h3><i class="fas fa-sitemap icon-tech"></i>2：聚合通用、Clash-meta、Sing-box订阅链接如下：</h3>
        <hr>
        <p>注意：以下订阅链接仅6个TLS端口节点</p>
        <hr>

        <table class="table">
            <thead>
                <tr>
                    <th colspan="2">聚合通用分享链接 (可直接导入客户端)：</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="2"><button class="btn btn-primary" onclick="copyToClipboard('${pg\u0076\u006c\u0065\u0073\u0073share}')">点击复制链接</button></td>
                </tr>
            </tbody>
        </table>

        <table class="table">
            <thead>
                <tr>
                    <th>聚合通用订阅链接：</th>
                    <th>操作</th>
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
                    <th>操作</th>
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
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="limited-width">${psb}</td>	
                    <td><button class="btn btn-primary" onclick="copyToClipboard('${psb}')">点击复制链接</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</body>
`;
  }
}



function getclConfig(userID, hostName) {
return `
port: 7890
allow-lan: true
mode: rule
log-level: info
unified-delay: true
global-client-fingerprint: chrome
dns:
  enable: false
  listen: :53
  ipv6: true
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver: 
    - 223.5.5.5
    - 114.114.114.114
    - 8.8.8.8
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  fallback:
    - https://1.0.0.1/dns-query
    - tls://dns.google
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4

proxies:
- name: CF_V1_${IP1}_${PT1}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP1.replace(/[\[\]]/g, '')}
  port: ${PT1}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V2_${IP2}_${PT2}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP2.replace(/[\[\]]/g, '')}
  port: ${PT2}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V3_${IP3}_${PT3}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP3.replace(/[\[\]]/g, '')}
  port: ${PT3}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V4_${IP4}_${PT4}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP4.replace(/[\[\]]/g, '')}
  port: ${PT4}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V5_${IP5}_${PT5}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP5.replace(/[\[\]]/g, '')}
  port: ${PT5}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V6_${IP6}_${PT6}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP6.replace(/[\[\]]/g, '')}
  port: ${PT6}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V7_${IP7}_${PT7}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP7.replace(/[\[\]]/g, '')}
  port: ${PT7}
  uuid: ${userID}
  udp: false
  tls: false
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V8_${IP8}_${PT8}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP8.replace(/[\[\]]/g, '')}
  port: ${PT8}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V9_${IP9}_${PT9}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP9.replace(/[\[\]]/g, '')}
  port: ${PT9}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V10_${IP10}_${PT10}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP10.replace(/[\[\]]/g, '')}
  port: ${PT10}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V11_${IP11}_${PT11}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP11.replace(/[\[\]]/g, '')}
  port: ${PT11}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V12_${IP12}_${PT12}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP12.replace(/[\[\]]/g, '')}
  port: ${PT12}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V13_${IP13}_${PT13}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP13.replace(/[\[\]]/g, '')}
  port: ${PT13}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

proxy-groups:
- name: 负载均衡
  type: load-balance
  url: http://www.gstatic.com/generate_204
  interval: 300
  proxies:
    - CF_V1_${IP1}_${PT1}
    - CF_V2_${IP2}_${PT2}
    - CF_V3_${IP3}_${PT3}
    - CF_V4_${IP4}_${PT4}
    - CF_V5_${IP5}_${PT5}
    - CF_V6_${IP6}_${PT6}
    - CF_V7_${IP7}_${PT7}
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

- name: 自动选择
  type: url-test
  url: http://www.gstatic.com/generate_204
  interval: 300
  tolerance: 50
  proxies:
    - CF_V1_${IP1}_${PT1}
    - CF_V2_${IP2}_${PT2}
    - CF_V3_${IP3}_${PT3}
    - CF_V4_${IP4}_${PT4}
    - CF_V5_${IP5}_${PT5}
    - CF_V6_${IP6}_${PT6}
    - CF_V7_${IP7}_${PT7}
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

- name: 🌍选择代理
  type: select
  proxies:
    - 负载均衡
    - 自动选择
    - DIRECT
    - CF_V1_${IP1}_${PT1}
    - CF_V2_${IP2}_${PT2}
    - CF_V3_${IP3}_${PT3}
    - CF_V4_${IP4}_${PT4}
    - CF_V5_${IP5}_${PT5}
    - CF_V6_${IP6}_${PT6}
    - CF_V7_${IP7}_${PT7}
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

rules:
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,🌍选择代理`
}
	
function getsbConfig(userID, hostName) {
return `{
	  "log": {
		"disabled": false,
		"level": "info",
		"timestamp": true
	  },
	  "experimental": {
		"clash_api": {
		  "external_controller": "127.0.0.1:9090",
		  "external_ui": "ui",
		  "external_ui_download_url": "",
		  "external_ui_download_detour": "",
		  "secret": "",
		  "default_mode": "Rule"
		},
		"cache_file": {
		  "enabled": true,
		  "path": "cache.db",
		  "store_fakeip": true
		}
	  },
	  "dns": {
		"servers": [
		  {
			"tag": "proxydns",
			"address": "tls://8.8.8.8/dns-query",
			"detour": "select"
		  },
		  {
			"tag": "localdns",
			"address": "h3://223.5.5.5/dns-query",
			"detour": "direct"
		  },
		  {
			"tag": "dns_fakeip",
			"address": "fakeip"
		  }
		],
		"rules": [
		  {
			"outbound": "any",
			"server": "localdns",
			"disable_cache": true
		  },
		  {
			"clash_mode": "Global",
			"server": "proxydns"
		  },
		  {
			"clash_mode": "Direct",
			"server": "localdns"
		  },
		  {
			"rule_set": "geosite-cn",
			"server": "localdns"
		  },
		  {
			"rule_set": "geosite-geolocation-!cn",
			"server": "proxydns"
		  },
		  {
			"rule_set": "geosite-geolocation-!cn",
			"query_type": [
			  "A",
			  "AAAA"
			],
			"server": "dns_fakeip"
		  }
		],
		"fakeip": {
		  "enabled": true,
		  "inet4_range": "198.18.0.0/15",
		  "inet6_range": "fc00::/18"
		},
		"independent_cache": true,
		"final": "proxydns"
	  },
	  "inbounds": [
		{
		  "type": "tun",
                  "tag": "tun-in",
		  "address": [
                    "172.19.0.1/30",
		    "fd00::1/126"
      ],
		  "auto_route": true,
		  "strict_route": true,
		  "sniff": true,
		  "sniff_override_destination": true,
		  "domain_strategy": "prefer_ipv4"
		}
	  ],
	  "outbounds": [
		{
		  "tag": "select",
		  "type": "selector",
		  "default": "auto",
		  "outbounds": [
			"auto",
			"CF_V1_${IP1}_${PT1}",
			"CF_V2_${IP2}_${PT2}",
			"CF_V3_${IP3}_${PT3}",
			"CF_V4_${IP4}_${PT4}",
			"CF_V5_${IP5}_${PT5}",
			"CF_V6_${IP6}_${PT6}",
			"CF_V7_${IP7}_${PT7}",
			"CF_V8_${IP8}_${PT8}",
			"CF_V9_${IP9}_${PT9}",
			"CF_V10_${IP10}_${PT10}",
			"CF_V11_${IP11}_${PT11}",
			"CF_V12_${IP12}_${PT12}",
			"CF_V13_${IP13}_${PT13}"
		  ]
		},
		{
		  "server": "${IP1}",
		  "server_port": ${PT1},
		  "tag": "CF_V1_${IP1}_${PT1}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP2}",
		  "server_port": ${PT2},
		  "tag": "CF_V2_${IP2}_${PT2}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP3}",
		  "server_port": ${PT3},
		  "tag": "CF_V3_${IP3}_${PT3}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP4}",
		  "server_port": ${PT4},
		  "tag": "CF_V4_${IP4}_${PT4}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP5}",
		  "server_port": ${PT5},
		  "tag": "CF_V5_${IP5}_${PT5}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP6}",
		  "server_port": ${PT6},
		  "tag": "CF_V6_${IP6}_${PT6}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP7}",
		  "server_port": ${PT7},
		  "tag": "CF_V7_${IP7}_${PT7}",
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{     
		  "server": "${IP8}",
		  "server_port": ${PT8},
		  "tag": "CF_V8_${IP8}_${PT8}",
		  "tls": {
			"enabled": true,
			"server_name": "${hostName}",
			"insecure": false,
			"utls": {
			  "enabled": true,
			  "fingerprint": "chrome"
			}
		  },
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP9}",
		  "server_port": ${PT9},
		  "tag": "CF_V9_${IP9}_${PT9}",
		  "tls": {
			"enabled": true,
			"server_name": "${hostName}",
			"insecure": false,
			"utls": {
			  "enabled": true,
			  "fingerprint": "chrome"
			}
		  },
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP10}",
		  "server_port": ${PT10},
		  "tag": "CF_V10_${IP10}_${PT10}",
		  "tls": {
			"enabled": true,
			"server_name": "${hostName}",
			"insecure": false,
			"utls": {
			  "enabled": true,
			  "fingerprint": "chrome"
			}
		  },
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP11}",
		  "server_port": ${PT11},
		  "tag": "CF_V11_${IP11}_${PT11}",
		  "tls": {
			"enabled": true,
			"server_name": "${hostName}",
			"insecure": false,
			"utls": {
			  "enabled": true,
			  "fingerprint": "chrome"
			}
		  },
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP12}",
		  "server_port": ${PT12},
		  "tag": "CF_V12_${IP12}_${PT12}",
		  "tls": {
			"enabled": true,
			"server_name": "${hostName}",
			"insecure": false,
			"utls": {
			  "enabled": true,
			  "fingerprint": "chrome"
			}
		  },
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "server": "${IP13}",
		  "server_port": ${PT13},
		  "tag": "CF_V13_${IP13}_${PT13}",
		  "tls": {
			"enabled": true,
			"server_name": "${hostName}",
			"insecure": false,
			"utls": {
			  "enabled": true,
			  "fingerprint": "chrome"
			}
		  },
		  "packet_encoding": "packetaddr",
		  "transport": {
			"headers": {
			  "Host": [
				"${hostName}"
			  ]
			},
			"path": "/?ed=2560",
			"type": "ws"
		  },
		  "type": "\u0076\u006c\u0065\u0073\u0073",
		  "uuid": "${userID}"
		},
		{
		  "tag": "direct",
		  "type": "direct"
		},
		{
		  "tag": "auto",
		  "type": "urltest",
		  "outbounds": [
			"CF_V1_${IP1}_${PT1}",
			"CF_V2_${IP2}_${PT2}",
			"CF_V3_${IP3}_${PT3}",
			"CF_V4_${IP4}_${PT4}",
			"CF_V5_${IP5}_${PT5}",
			"CF_V6_${IP6}_${PT6}",
			"CF_V7_${IP7}_${PT7}",
			"CF_V8_${IP8}_${PT8}",
			"CF_V9_${IP9}_${PT9}",
			"CF_V10_${IP10}_${PT10}",
			"CF_V11_${IP11}_${PT11}",
			"CF_V12_${IP12}_${PT12}",
			"CF_V13_${IP13}_${PT13}"
		  ],
		  "url": "https://www.gstatic.com/generate_204",
		  "interval": "1m",
		  "tolerance": 50,
		  "interrupt_exist_connections": false
		}
	  ],
	  "route": {
		"rule_set": [
		  {
			"tag": "geosite-geolocation-!cn",
			"type": "remote",
			"format": "binary",
			"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs",
			"download_detour": "select",
			"update_interval": "1d"
		  },
		  {
			"tag": "geosite-cn",
			"type": "remote",
			"format": "binary",
			"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs",
			"download_detour": "select",
			"update_interval": "1d"
		  },
		  {
			"tag": "geoip-cn",
			"type": "remote",
			"format": "binary",
			"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",
			"download_detour": "select",
			"update_interval": "1d"
		  }
		],
		"auto_detect_interface": true,
		"final": "select",
		"rules": [
                         {
                        "inbound": "tun-in",
                        "action": "sniff"
                         },
                          {
                        "protocol": "dns",
                           "action": "hijack-dns"
                         },
                        {
                        "port": 443,
                        "network": "udp",
                        "action": "reject"
                         },
		  {
			"clash_mode": "Direct",
			"outbound": "direct"
		  },
		  {
			"clash_mode": "Global",
			"outbound": "select"
		  },
		  {
			"rule_set": "geoip-cn",
			"outbound": "direct"
		  },
		  {
			"rule_set": "geosite-cn",
			"outbound": "direct"
		  },
		  {
			"ip_is_private": true,
			"outbound": "direct"
		  },
		  {
			"rule_set": "geosite-geolocation-!cn",
			"outbound": "select"
		  }
		]
	  },
	  "ntp": {
		"enabled": true,
		"server": "time.apple.com",
		"server_port": 123,
		"interval": "30m",
		"detour": "direct"
	  }
	}`
}

function getptyConfig(userID, hostName) {
	const \u0076\u006c\u0065\u0073\u0073share = btoa(`\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP8}:${PT8}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V8_${IP8}_${PT8}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP9}:${PT9}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V9_${IP9}_${PT9}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP10}:${PT10}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V10_${IP10}_${PT10}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP11}:${PT11}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V11_${IP11}_${PT11}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP12}:${PT12}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V12_${IP12}_${PT12}\n\u0076\u006c\u0065\u0073\u0073\u003A//${userID}\u0040${IP13}:${PT13}?encryption=none&security=tls&sni=${hostName}&fp=randomized&type=ws&host=${hostName}&path=%2F%3Fed%3D2560#CF_V13_${IP13}_${PT13}`);	
		return `${\u0076\u006c\u0065\u0073\u0073share}`
	}
	
function getpclConfig(userID, hostName) {
return `
port: 7890
allow-lan: true
mode: rule
log-level: info
unified-delay: true
global-client-fingerprint: chrome
dns:
  enable: false
  listen: :53
  ipv6: true
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  default-nameserver: 
    - 223.5.5.5
    - 114.114.114.114
    - 8.8.8.8
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  fallback:
    - https://1.0.0.1/dns-query
    - tls://dns.google
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4

proxies:
- name: CF_V8_${IP8}_${PT8}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP8.replace(/[\[\]]/g, '')}
  port: ${PT8}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V9_${IP9}_${PT9}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP9.replace(/[\[\]]/g, '')}
  port: ${PT9}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V10_${IP10}_${PT10}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP10.replace(/[\[\]]/g, '')}
  port: ${PT10}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V11_${IP11}_${PT11}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP11.replace(/[\[\]]/g, '')}
  port: ${PT11}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V12_${IP12}_${PT12}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP12.replace(/[\[\]]/g, '')}
  port: ${PT12}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

- name: CF_V13_${IP13}_${PT13}
  type: \u0076\u006c\u0065\u0073\u0073
  server: ${IP13.replace(/[\[\]]/g, '')}
  port: ${PT13}
  uuid: ${userID}
  udp: false
  tls: true
  network: ws
  servername: ${hostName}
  ws-opts:
    path: "/?ed=2560"
    headers:
      Host: ${hostName}

proxy-groups:
- name: 负载均衡
  type: load-balance
  url: http://www.gstatic.com/generate_204
  interval: 300
  proxies:
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

- name: 自动选择
  type: url-test
  url: http://www.gstatic.com/generate_204
  interval: 300
  tolerance: 50
  proxies:
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

- name: 🌍选择代理
  type: select
  proxies:
    - 负载均衡
    - 自动选择
    - DIRECT
    - CF_V8_${IP8}_${PT8}
    - CF_V9_${IP9}_${PT9}
    - CF_V10_${IP10}_${PT10}
    - CF_V11_${IP11}_${PT11}
    - CF_V12_${IP12}_${PT12}
    - CF_V13_${IP13}_${PT13}

rules:
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,🌍选择代理`
}
		
function getpsbConfig(userID, hostName) {
return `{
		  "log": {
			"disabled": false,
			"level": "info",
			"timestamp": true
		  },
		  "experimental": {
			"clash_api": {
			  "external_controller": "127.0.0.1:9090",
			  "external_ui": "ui",
			  "external_ui_download_url": "",
			  "external_ui_download_detour": "",
			  "secret": "",
			  "default_mode": "Rule"
			},
			"cache_file": {
			  "enabled": true,
			  "path": "cache.db",
			  "store_fakeip": true
			}
		  },
		  "dns": {
			"servers": [
			  {
				"tag": "proxydns",
				"address": "tls://8.8.8.8/dns-query",
				"detour": "select"
			  },
			  {
				"tag": "localdns",
				"address": "h3://223.5.5.5/dns-query",
				"detour": "direct"
			  },
			  {
				"tag": "dns_fakeip",
				"address": "fakeip"
			  }
			],
			"rules": [
			  {
				"outbound": "any",
				"server": "localdns",
				"disable_cache": true
			  },
			  {
				"clash_mode": "Global",
				"server": "proxydns"
			  },
			  {
				"clash_mode": "Direct",
				"server": "localdns"
			  },
			  {
				"rule_set": "geosite-cn",
				"server": "localdns"
			  },
			  {
				"rule_set": "geosite-geolocation-!cn",
				"server": "proxydns"
			  },
			  {
				"rule_set": "geosite-geolocation-!cn",
				"query_type": [
				  "A",
				  "AAAA"
				],
				"server": "dns_fakeip"
			  }
			],
			"fakeip": {
			  "enabled": true,
			  "inet4_range": "198.18.0.0/15",
			  "inet6_range": "fc00::/18"
			},
			"independent_cache": true,
			"final": "proxydns"
		  },
		  "inbounds": [
			{
			  "type": "tun",
                        "tag": "tun-in",
		  "address": [
                    "172.19.0.1/30",
		    "fd00::1/126"
      ],
			  "auto_route": true,
			  "strict_route": true,
			  "sniff": true,
			  "sniff_override_destination": true,
			  "domain_strategy": "prefer_ipv4"
			}
		  ],
		  "outbounds": [
			{
			  "tag": "select",
			  "type": "selector",
			  "default": "auto",
			  "outbounds": [
				"auto",
				"CF_V8_${IP8}_${PT8}",
				"CF_V9_${IP9}_${PT9}",
				"CF_V10_${IP10}_${PT10}",
				"CF_V11_${IP11}_${PT11}",
				"CF_V12_${IP12}_${PT12}",
				"CF_V13_${IP13}_${PT13}"
			  ]
			},
			{
			  "server": "${IP8}",
			  "server_port": ${PT8},
			  "tag": "CF_V8_${IP8}_${PT8}",
			  "tls": {
				"enabled": true,
				"server_name": "${hostName}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${hostName}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${userID}"
			},
			{
			  "server": "${IP9}",
			  "server_port": ${PT9},
			  "tag": "CF_V9_${IP9}_${PT9}",
			  "tls": {
				"enabled": true,
				"server_name": "${hostName}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${hostName}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${userID}"
			},
			{
			  "server": "${IP10}",
			  "server_port": ${PT10},
			  "tag": "CF_V10_${IP10}_${PT10}",
			  "tls": {
				"enabled": true,
				"server_name": "${hostName}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${hostName}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${userID}"
			},
			{
			  "server": "${IP11}",
			  "server_port": ${PT11},
			  "tag": "CF_V11_${IP11}_${PT11}",
			  "tls": {
				"enabled": true,
				"server_name": "${hostName}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${hostName}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${userID}"
			},
			{
			  "server": "${IP12}",
			  "server_port": ${PT12},
			  "tag": "CF_V12_${IP12}_${PT12}",
			  "tls": {
				"enabled": true,
				"server_name": "${hostName}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${hostName}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${userID}"
			},
			{
			  "server": "${IP13}",
			  "server_port": ${PT13},
			  "tag": "CF_V13_${IP13}_${PT13}",
			  "tls": {
				"enabled": true,
				"server_name": "${hostName}",
				"insecure": false,
				"utls": {
				  "enabled": true,
				  "fingerprint": "chrome"
				}
			  },
			  "packet_encoding": "packetaddr",
			  "transport": {
				"headers": {
				  "Host": [
					"${hostName}"
				  ]
				},
				"path": "/?ed=2560",
				"type": "ws"
			  },
			  "type": "\u0076\u006c\u0065\u0073\u0073",
			  "uuid": "${userID}"
			},
			{
			  "tag": "direct",
			  "type": "direct"
			},
			{
			  "tag": "auto",
			  "type": "urltest",
			  "outbounds": [
				"CF_V8_${IP8}_${PT8}",
				"CF_V9_${IP9}_${PT9}",
				"CF_V10_${IP10}_${PT10}",
				"CF_V11_${IP11}_${PT11}",
				"CF_V12_${IP12}_${PT12}",
				"CF_V13_${IP13}_${PT13}"
			  ],
			  "url": "https://www.gstatic.com/generate_204",
			  "interval": "1m",
			  "tolerance": 50,
			  "interrupt_exist_connections": false
			}
		  ],
		  "route": {
			"rule_set": [
			  {
				"tag": "geosite-geolocation-!cn",
				"type": "remote",
				"format": "binary",
				"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-!cn.srs",
				"download_detour": "select",
				"update_interval": "1d"
			  },
			  {
				"tag": "geosite-cn",
				"type": "remote",
				"format": "binary",
				"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geosite/geolocation-cn.srs",
				"download_detour": "select",
				"update_interval": "1d"
			  },
			  {
				"tag": "geoip-cn",
				"type": "remote",
				"format": "binary",
				"url": "https://cdn.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@sing/geo/geoip/cn.srs",
				"download_detour": "select",
				"update_interval": "1d"
			  }
			],
			"auto_detect_interface": true,
			"final": "select",
			"rules": [
                          {
                         "inbound": "tun-in",
                          "action": "sniff"
                          },
                          {
                          "protocol": "dns",
                          "action": "hijack-dns"
                           },
                          {
                           "port": 443,
                          "network": "udp",
                          "action": "reject"
                          },
			  {
				"clash_mode": "Direct",
				"outbound": "direct"
			  },
			  {
				"clash_mode": "Global",
				"outbound": "select"
			  },
			  {
				"rule_set": "geoip-cn",
				"outbound": "direct"
			  },
			  {
				"rule_set": "geosite-cn",
				"outbound": "direct"
			  },
			  {
				"ip_is_private": true,
				"outbound": "direct"
			  },
			  {
				"rule_set": "geosite-geolocation-!cn",
				"outbound": "select"
			  }
			]
		  },
		  "ntp": {
			"enabled": true,
			"server": "time.apple.com",
			"server_port": 123,
			"interval": "30m",
			"detour": "direct"
		  }
		}`;
} 
