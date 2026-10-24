import { ApifyClient } from 'apify-client';

const client = new ApifyClient({
  token: process.env.APIFY_TOKEN,
});

const input = {
  targets: ['hubspot.com'],
  mode: 'all',
  maxAdsPerTarget: 5,
};

const run = await client.actor('sumitr_mardy/google-ads-monitor').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();

for (const ad of items) {
  console.log(`[${ad.format}] ${ad.advertiserName} (First shown: ${ad.firstShown})`);
  console.log(`  Headline: ${ad.headline || 'N/A'}`);
  console.log(`  Link: ${ad.adUrl}`);
}
