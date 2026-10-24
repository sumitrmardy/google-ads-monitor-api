English | [简体中文](README.zh-CN.md)

# Google Ads Transparency Monitor API — for n8n, AI Agents & MCP

Track your competitors' live and newly launched Google ads from the Google Ads Transparency Center. Automatically extract search ad copy, display banners, YouTube video links, launch dates (`firstShown`), and target regions.

[![n8n templates](https://img.shields.io/badge/n8n-4%20templates-EA4B71)](workflows/en)
[![MCP ready](https://img.shields.io/badge/MCP-ready-7C3AED)](agents/mcp)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-6BA539)](openapi/openapi.yaml)
[![Pricing](https://img.shields.io/badge/pricing-pay%20per%20ad%20returned-0A66C2)](https://apify.com/sumitr_mardy/google-ads-monitor/pricing)
[![License](https://img.shields.io/badge/license-MIT-black)](LICENSE)

### ➜ [Try it on Apify](https://apify.com/sumitr_mardy/google-ads-monitor)

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

## Why pipelines like it

1. **True Monitor Mode via `firstShown`.** Google lists ads by *last shown* date, causing old ads to resurface constantly (2,401 unseen IDs overnight vs 2 genuinely new ads). This monitor anchors on Google's immutable `firstShown` date, preventing ghost alerts.
2. **Text Copy via OCR v2.** 96% of Google text ads are archived only as PNG screenshot images. Built-in color-segmented OCR recovers headlines and descriptions (19/20 exact on an untouched 20-ad test set; 33/40 across two sets, see the Actor README).
3. **HTTP/2 Transport.** Avoids client-signature throttling (undici/fetch receives 429 captchas after ~20 calls where `node:http2` continues cleanly from the same IP).
4. **Pay-Per-Event.** In monitor mode, pay $0.01 per competitor check plus $0.0012 per new ad discovered ($0.70 to $1.20 per 1k).

---

## n8n Templates

Workflows in [workflows/en](workflows/en):

- **T1 Daily Competitor Alerts to Slack**: Daily check sending Slack notifications whenever a competitor launches a new ad.
- **T2 Google Sheets Ad Archiver**: Log new ad creatives and copy to Google Sheets.
- **T3 Weekly Digest Email**: Automated Monday morning competitive intelligence executive digest.
- **T4 AI Agent Tool**: Equip an LLM Agent with real-time Google Ads competitor research.

---

## Agents & MCP

- **Claude Desktop & Cursor**: MCP setup in [agents/mcp](agents/mcp).
- **Dify & Coze**: Setup guides in [agents/dify](agents/dify) and [agents/coze](agents/coze).
- **Tool Definitions**: Anthropic Tool and OpenAI Function definitions in [agents/tool-definitions](agents/tool-definitions).

---

## Pricing

Pay-per-event pricing on Apify:
- `ad`: $0.0012 per ad returned (from $0.70 per 1,000, down to $0.0007 on Gold).
- `target_checked`: $0.01 per competitor checked in monitor mode.

See rates on the [Pricing page](https://apify.com/sumitr_mardy/google-ads-monitor/pricing).

## License

MIT © Sumitr Mardy
