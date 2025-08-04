
# Cloudflare-workers/pages代理脚本

---------------------------------------------
## 一：Cloudflare Vless节点可设置的变量内容
| 变量作用 | 变量名称| 变量值要求| 变量默认值| 变量要求|
| :--- | :--- | :--- | :--- | :--- |
| 1、必要的uuid | uuid (小写字母) |符合uuid规定格式 |默认uuid：5e73fef9-6b67-4901-a501-a1376c933d8f|建议更改|
| 2、全局节点能上Cloudflare类网站 | proxyip (小写字母) |443端口：ipv4地址、[ipv6地址]、域名。非443端口：IPV4地址:端口、[IPV6地址]:端口、域名:端口|proxyip域名：ts.hpc.tw公用域名|可选|
| 3、订阅节点：优选IP | ip1到ip13，共13个 |Cloudflare官方IP、Cloudflare反代IP、Cloudflare优选域名| Cloudflare官方不同地区的visa域名|可选|
| 4、订阅节点：优选IP对应端口 | pt1到pt13，共13个 |Cloudflare13个标准端口、反代IP对应任意端口| Cloudflare13个标准端口|可选|

## 二：Cloudflare Trojan节点可设置的变量内容

| 变量作用 | 变量名称| 变量值要求| 变量默认值| 变量要求|
| :--- | :--- | :--- | :--- | :--- |
| 1、必要的密码 | pswd (小写字母) |建议字母数字 |默认密码：helloworld|建议更改|
| 2、全局节点能上Cloudflare类网站 | proxyip (小写字母) |443端口：ipv4地址、[ipv6地址]、域名。非443端口：IPV4地址:端口、[IPV6地址]:端口、域名:端口|proxyip域名：ts.hpc.tw公用域名|可选|
| 3、订阅节点：优选IP | ip1到ip13，共13个 |Cloudflare官方IP、Cloudflare反代IP、Cloudflare优选域名| Cloudflare官方不同地区的visa域名|可选|
| 4、订阅节点：优选IP对应端口 | pt1到pt13，共13个 |Cloudflare13个标准端口、反代IP对应任意端口| Cloudflare13个标准端口|可选|

#### 订阅节点中IP与端口的变量（3与4）特别注意 【新手小白可无视变量（3与4），使用默认即可】

0、由于现在只能用混淆代码，无法在文件上直接修改了，只能使用变量

1、切记：当你非要用订阅类的客户端，且要改优选IP时，才需要设置ip1到ip13，pt1到pt13的变量

2、ip1到ip7，pt1到pt7，在订阅分享链接中，仅支持80系端口关TLS节点

3、ip8到ip13，pt8到pt13，在订阅分享链接中，仅支持443系端口开TLS节点

4、设置官方IP，无需设置端口（默认已设置13个Cloudflare标准端口）；设置反代IP需要分开关TLS，端口变量也必须设置

---------------------------------
## 自定义proxyip

虽说脚本默认自带其他大佬的proxyip，但同时也支持自定义proxyip

支持IPV4、IPV6、域名三种方式（端口为443时，可不写:端口）

1、全局节点变量形式（上文一与二已说明）：

| proxyip端口 | IPv4形式| IPv6形式| 域名形式|
| :--- | :--- | :--- | :--- |
| 443端口 | IPV4地址 |[IPV6地址] |域名|
| 非443端口 | IPV4地址:端口 |[IPV6地址]:端口 |域名:端口|

2、单节点path路径形式：

| proxyip端口 | IPv4形式| IPv6形式| 域名形式|
| :--- | :--- | :--- | :--- |
| 443端口 | /proxyip=IPV4地址 |/proxyip=[IPV6地址] |/proxyip=域名|
| 非443端口 | /proxyip=IPV4地址:端口 |/proxyip=[IPV6地址]:端口 |/proxyip=域名:端口|

注意：

1、单节点path路径变更proxyip：仅影响当前客户端正在设置的单节点，并不影响其他单节点或者订阅节点的proxyip

2、全局节点变更proxyip：影响所有未设置path路径proxyip的节点

3、当节点的path路径出现```/proxyip=```关键字时，此节点的proxyip只认准path路径设置的proxyip，全局proxyip不起作用

---------------------------------

## 查看配置信息与分享链接

Cloudflare Vless：在网页地址栏输入 https:// workers域名 或者 pages域名 或者 自定义域名 /自定义uuid

Cloudflare Trojan：在网页地址栏输入 https:// workers域名 或者 pages域名 或者 自定义域名 /自定义密码

注意：

1、workers域名 或者 pages域名 或者 自定义域名如果都被墙，必须开代理才能打开

2、使用自定域时，原先workers域名 或者 pages域名下的配置信息与分享链接依旧可用

---------------------------------

## 优选IP应用

Cloudflare官方优选80系端口：80、8080、8880、2052、2082、2086、2095

Cloudflare官方优选443系端口：443、2053、2083、2087、2096、8443

如果你没有天天最高速度或者选择国家的需求，使用默认的Cloudflare官方IP或者域名即可，不必更换

推荐好记的懒人专属Cloudflare官方IP如下，支持13个标准端口切换，称之为"冲在最前的不死IP"

104.16.0.0 

104.17.0.0 

104.18.0.0 

104.19.0.0 

104.20.0.0 

104.21.0.0 

104.22.0.0 

104.24.0.0 

104.25.0.0 

104.26.0.0 

104.27.0.0 

172.66.0.0

172.67.0.0

162.159.0.0

2606:4700:: 需IPV6环境

注意：多个Cloudflare节点在客户端使用负载均衡或者自动选择时，建议所有应用的节点都为同一个国家地区，以避免不同国家之间的IP乱跳现象

---------------------------------

## 客户端推荐

#### 启用分片(Fragment)功能的好处：无视域名被墙TLS阻断，从而让workers等被墙的域名支持TLS节点
#### 提示：未被墙TLS阻断的自定义域名或pages域名无需开启分片就可使用TLS节点
 
目前支持该功能的平台客户端如下（点击名称即跳转到官方下载地址）

1、安卓Android：[v2rayNG](https://github.com/2dust/v2rayNG/tags)、[Nekobox](https://github.com/starifly/NekoBoxForAndroid/releases)、[Karing](https://github.com/KaringX/karing/tags)、v2box

2、电脑Windows：[v2rayN](https://github.com/2dust/v2rayN/tags)、[Hiddify](https://github.com/hiddify/hiddify-next/tags)、[Karing](https://github.com/KaringX/karing/tags)

3、苹果Ios：Karing、Hiddify Proxy & VPN、Shadowrocket(小火箭)、Streisand、v2box

4、软路由：passwall、ssr-plus、homeproxy

注意：其他平台客户端未开启分片功能情况下，workers域的6个443系TLS节点是不可用的

注意：Shadowrocket(小火箭)、v2box、v2rayn、v2rayng客户端对trojan+ws有强制开启TLS问题，造成trojan+ws不通。且clash订阅没有trojan+ws节点。特此说明
---------------------------------
---------------------------------
---------------------------------
---------------------------------
---------------------------------
