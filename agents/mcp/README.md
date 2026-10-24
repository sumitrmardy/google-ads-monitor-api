# MCP Configuration for Google Ads Monitor

Connect [Google Ads Monitor](https://apify.com/sumitr_mardy/google-ads-monitor) to Claude Desktop, Cursor, and any MCP client.

## Claude Desktop

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
