import os
from apify_client import ApifyClient

client = ApifyClient(os.getenv("APIFY_TOKEN"))

run_input = {
    "targets": ["hubspot.com"],
    "mode": "all",
    "maxAdsPerTarget": 3,
}

run = client.actor("sumitr_mardy/google-ads-monitor").call(run_input=run_input)
for ad in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(f"Format: {ad['format']} | Advertiser: {ad['advertiserName']}")
    print(f"  Headline: {ad['headline']}")
    print(f"  First Shown: {ad['firstShown']}")
