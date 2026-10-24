# Fields and Output Format Reference

Every ad record from Google Ads Monitor contains structured metadata and ad copy.

## Key fields

- `target`: The input domain or advertiser ID searched.
- `targetType`: `domain` or `advertiser`.
- `format`: `TEXT` (search ads), `IMAGE` (display banners), or `VIDEO` (YouTube).
- `firstShown`: ISO 8601 timestamp when Google first served the ad. Immutable.
- `lastShown`: ISO 8601 timestamp when Google most recently served the ad.
- `daysServed`: Cumulative days the ad was active.
- `headline` & `description`: Ad copy. Text ads are extracted from Google's archived screenshot using color-segmented OCR.
- `copySource`: `ocr`, `contentjs`, or `none`.
- `regions`: Array of ISO country codes where the ad was served.

See [Google Ads Monitor](https://apify.com/sumitr_mardy/google-ads-monitor) on Apify.
