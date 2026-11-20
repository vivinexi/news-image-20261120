# The World in One Image — 20 November 2026

[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![Rank](https://make.fun/badge/news-image-20261120/vivinexi/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![Reward](https://make.fun/badge/news-image-20261120/vivinexi/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A newspaper front-page infographic that sums up the world's news of
Friday 20 November 2026 in a single 1024×1024 image.

## What the image shows

- **Lead:** the World Court (ICJ, The Hague) rules 9–6 that Myanmar committed
  genocide against the Rohingya — the court's first genocide finding
  against a state.
- **Summit:** Trump, Xi and Putin hold their first three-way summit in
  Shenzhen and sign a four-point joint peace declaration after about
  70 minutes of talks; no breakthrough on Ukraine, Iran or nuclear arms.
- **Riyadh:** a Houthi missile damages the Saudi sovereign wealth fund
  (PIF) tower, Riyadh's tallest; Saudi Arabia intercepts another missile
  and five drones.
- **Markets:** US stocks fall for a fifth straight day (S&P 500 −2.02%);
  Japan's Nikkei −4.8%, SoftBank −16%; Anthropic closes 17% above its
  $83 IPO price in its Nasdaq debut.
- **Kyiv:** Russia strikes Kyiv overnight — 8 killed, bridges targeted,
  28 injured across nine regions; Russia violates Poland's airspace;
  Estonia to close its Russia border for at least six months.
- **Also today:** COP31 draft drops the fossil-fuel phase-out call;
  Kenya discharges its last Ebola patient; GTA 6 tops $2.3 billion in
  sales; Israeli forces cross the Yellow Line in central Gaza; Trump
  won't decide the next Iran step until the new year.

The image was drawn programmatically (Python + Pillow, flat shapes and
text only, no photos or network fetches) and is shipped as `entry.png`.

## How to run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). It needs no
network and writes identical bytes on every run.

## License

MIT — see [LICENSE](LICENSE).
