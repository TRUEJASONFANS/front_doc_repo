# 在自己的个人网站配置https

## https 的背景
[https](https://certbot.eff.org/docs/what.html)
获取SSL证书
理论上，我们自己也可以手动制作一个 SSL 安全证书，但是我们自己签发的安全证书浏览器信任，所以我们需要被信任的证书授权中心（ CA ）签发的安全证书。而一般的 SSL 安全证书签发服务都需要付费，且价格昂贵，不过为了加快推广 https 的普及， EEF 电子前哨基金会、 Mozilla 基金会和美国密歇根大学成立了一个公益组织叫 ISRG （ Internet Security Research Group ），这个组织从 2015 年开始推出了 Let’s Encrypt 免费证书。这个免费证书不仅免费，而且还相当好用，所以我们就可以利用 Let’s Encrypt 提供的免费证书部署 https 了。


# 准备好证书 和 证书签名的私钥文件

# Certbot-免费的HTTPS证书
参考[知乎](https://zhuanlan.zhihu.com/p/80909555)
核心步骤
1.
```shell
wget https://dl.eff.org/certbot-auto
chmod a+x ./certbot-auto
./certbot-auto --help
./certbot-auto --server
https://acme-v02.api.letsencrypt.org/directory -d "chennick.wang" -d "*.chennick.wang"
--manual --preferred-challenges dns-01 certonly
```
2. 生成的过程中会让你添加域名记录，注意类型是TXT如下图：
在阿里服务器域名解析设置添加以_acme-challenge 开头的记录

3. 到云服务器的控制台，添加安全组规则，增加443端口

4. 执行完脚本就会在/etc/letsencrypt/live/xxx 域名下 生成fullchain 证书和 privkey的签名私钥

5. 配置nginx ssl