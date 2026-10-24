# Google Ads Monitor MCP 服务配置

将 [Google Ads Monitor](https://apify.com/sumitr_mardy/google-ads-monitor) 接入 Claude Desktop、Cursor 及任意 MCP 客户端。

## Claude Desktop 配置

```json
{
  "mcpServers": {
    "google-ads-monitor": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://mcp.apify.com?tools=sumitr_mardy/google-ads-monitor",
        "--header",
        "Authorization: Bearer YOUR_APIFY_TOKEN"
      ]
    }
  }
}
```
