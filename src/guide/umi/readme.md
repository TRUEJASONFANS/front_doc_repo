## 架构
![架构](https://gw.alipayobjects.com/zos/rmsportal/zvfEXesXdgTzWYZCuHLe.png)

## 历史
2015 年之前我们有 Sea.JS、Arale、SPM 开源技术方案，大家可以有所耳闻。
2015 年我们接入 React，从自研的 Roof 到 Redux 再到开源的 Dva，一步步验证我们的最佳实践，并把这些实践交给开源社区检验。
2017 年开始尝试了新一代的企业级前端框架，Umi 和 Bigfish，前者是从无线业务中长出来的，后者是从中台业务中长出来的。
一个团队出两个框架毕竟不是长久之计，后来老大直接把两拨人调到一个组，于是就愉快地合并在了一起。
![历史](http://5b0988e595225.cdn.sohucs.com/images/20190717/8e42b0fbccba4ff48a4f7f9f2acbdcc5.jpeg)
## 两个框架融合之和
![两个框架融合之和](http://5b0988e595225.cdn.sohucs.com/images/20190717/7c6ab855060444f281cdc424d2221fba.jpeg)

内部数据：
![内部数据](http://5b0988e595225.cdn.sohucs.com/images/20190717/8f84ae3045ba4e7c9dd218a876e1c790.jpeg)

## 插件
市场：
![UMI](http://5b0988e595225.cdn.sohucs.com/images/20190717/3fe672829b914e7994c8078f6e923654.jpeg)
![bigsh&&UMI市场](http://5b0988e595225.cdn.sohucs.com/images/20190717/1e007f12a4ff42cea0b50ffe5f5020f8.jpeg)

## 资产市场
资产市场分了四级:

1. 组件，指通用组件，就是 antd，在下半年将要发布的 antd@4 里，我们会陆续提取更多通用组件到 antd 中。
2. 业务组件，不能提取通用组件的，我们会提到内部统一的业务组件仓库中。
3. 区块，由组件组成，可以想象成代码片段。
4. 页面模板，由区块组成

## 如何兼顾多类技术栈

1. MPA（多页应用）
2. 微前端