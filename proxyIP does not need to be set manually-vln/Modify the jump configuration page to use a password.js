if (url.pathname === '/') {
    // 从环境变量获取密码，默认空
    const password = env.password || '';
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
