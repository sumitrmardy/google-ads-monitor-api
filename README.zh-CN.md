[English](README.md) | 简体中文

# Google Ads Transparency Monitor API — 适用于 n8n、AI Agent 与 MCP

从 Google 广告透明度中心监控竞品正在投放与最新上线的广告。自动提取搜索广告文案、展示横幅图片、YouTube 视频链接、首次上线时间 (`firstShown`) 及投放国家。

[![n8n 模板](https://img.shields.io/badge/n8n-4%20templates-EA4B71)](workflows/zh-CN)
[![支持 MCP](https://img.shields.io/badge/MCP-ready-7C3AED)](agents/mcp)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539)](openapi/openapi.yaml)
[![定价详情](https://img.shields.io/badge/pricing-pay%20per%20ad%20returned-0A66C2)](https://apify.com/sumitr_mardy/google-ads-monitor/pricing)
[![开源协议](https://img.shields.io/badge/license-MIT-black)](LICENSE)

### ➜ [在 Apify 上体验](https://apify.com/sumitr_mardy/google-ads-monitor)

```json
{
  "target": "hubspot.com",
  "format": "TEXT",
  "advertiserName": "HubSpot, Inc.",
  "creativeId": "CR02685094814793334785",
  "firstShown": "2026-01-29T08:00:00.000Z",
  "lastShown": "2026-10-20T05:32:10.000Z",
  "headline": "HubSpot for Startups - Bootstrap to Series A",
  "description": "Partnered with top VCs and accelerators. Get exclusive startup pricing.",
  "displayUrl": "www.hubspot.com/",
  "copySource": "ocr",
  "regions": ["US", "CA"]
}
```

---

## 核心特性

1. **基于 `firstShown` 的真监控模式。** Google 官方按最后展示时间排序，旧广告经常因偶发曝光浮回首页（24 小时实测：2,401 条未见 ID 中仅 2 条是新上线广告）。本工具锚定不可变的 `firstShown`，杜绝幽灵误报。
2. **高精 OCR v2 提取广告文案。** Google 文本广告 96% 仅以图片截图形式存在。内置基于颜色分割的多语种 OCR 引擎，精准还原标题与描述（未见测试集 19/20 完全一致）。
3. **HTTP/2 传输。** 针对客户端指纹限流设计（Node undici/fetch 爬取约 20 次即触发 429 验证码，而 `node:http2` 在同一 IP 下可持续稳定抓取）。
4. **按事件计费。** 监控模式下每检测一个竞品收费 $0.01，每返回一条新广告收费 $0.0012（千条起价 $0.70）。

---

## n8n 开源模板

可在 [workflows/zh-CN](workflows/zh-CN) 导入使用：

- **T1 每日竞品新广告上线 Slack 预警**: 定时监控竞品，发现新广告即时推送 Slack。
- **T2 Google 表格广告素材归档**: 自动把广告图文、文案及落地页链接整理入库。
- **T3 每周竞品投放情报简报邮件**: 每周一自动向团队发送竞品营销动态邮件。
- **T4 AI Agent 工具**: 为大模型赋予即时调研竞品 Google 广告素材的能力。

---

## Agent 与 MCP 集成

- **Claude Desktop 与 Cursor**: 配置文件位于 [agents/mcp](agents/mcp)。
- **Dify 与 Coze (扣子)**: 配置指南位于 [agents/dify](agents/dify) 与 [agents/coze](agents/coze)。
- **函数调用规范**: Anthropic 与 OpenAI 定义位于 [agents/tool-definitions](agents/tool-definitions)。

---

## 计费方式

基于 Apify Pay-Per-Event 模式：
- `ad`: 每条返回的广告 $0.0012（Gold 阶梯低至 $0.0007，千条起价 $0.70）。
- `target_checked`: 监控模式下每次竞品检测 $0.01。

在 [定价页面](https://apify.com/sumitr_mardy/google-ads-monitor/pricing) 查看详情。

## 开源协议

MIT © Sumitr Mardy
