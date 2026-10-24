#!/usr/bin/env bash
set -euo pipefail

curl -s -X POST "https://api.apify.com/v2/acts/sumitr_mardy~google-ads-monitor/run-sync-get-dataset-items" \
  -H "Authorization: Bearer ${APIFY_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "targets": ["hubspot.com"],
    "mode": "all",
    "maxAdsPerTarget": 2
  }' | jq '.[0] | {advertiserName, format, headline, description, firstShown, adUrl}'
