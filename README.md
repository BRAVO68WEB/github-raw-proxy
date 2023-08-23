## Github Raw Proxy

### Why?

Github Raw is a great service, but it is blocked by some ISPs. This proxy allows you to access Github Raw from anywhere.

### How does it work?

This proxy is a [Cloudflare Worker](https://workers.cloudflare.com/). It uses the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to fetch the raw file from Github and return it to the client.

### Usage:
```
${rawPath}/:username/:repo/:branch/:path
```
### Example:
```
${rawPath}/honoagency/hono/main/index.ts
```

### How to use it?
1. Fork this repo
2. Clone it
3. Follow the instructions in the [📄 Cloudflare Docs](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hono-site/#deploy-with-cloudflare-pages)
4. Enjoy!

#### *Powered by [🔥 Hono](https://hono.dev)*
#### *Deployed on [🌥️ Cloudflare Workers](https://cloudflare.com)*

