import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";

const app = new Hono();

app.use(logger());
app.use(poweredBy());

app.use('*', async (ctx) => {
    const rawURL = new URL(ctx.req.url);
    const rawPath = rawURL.protocol + "//" + rawURL.hostname;

    if(ctx.req.path === '/') {
        const msg = `
            <h2 id="github-raw-proxy">Github Raw Proxy</h2>
            <h3 id="usage">Usage:</h3>
            <pre><code>${rawPath}/:username/:repo/:branch/:path
            </code></pre>
            <h3 id="example">Example:</h3>
            <pre><code>${rawPath}/honoagency/hono/main/index.ts
            </code></pre>
            <h3 id="source">Source:</h3>
            <p><a href="https://github.com/BRAVO68WEB/github-raw-proxy">Github</a></p>
            <h3 id="author">Author:</h3>
            <p><a href="https://itsmebravo.dev%22">Jyotirmoy Bandyopadhayaya</a></p>
            <h4 id="powered-by-🔥-hono"><em>Powered by <a href="https://hono.dev">🔥 Hono</a></em></h4>
            <h4 id="deployed-on-🌥️-cloudflare-workers"><em>Deployed on <a href="https://cloudflare.com">🌥️ Cloudflare Workers</a></em></h4>        
        `
        return ctx.html(msg);
    }

    const rawgit = await fetch('https://raw.githubusercontent.com' + ctx.req.path);

    if (rawgit.status === 404) {
        return ctx.json({
            message: 'Not Found',
        })
    }
    return ctx.text(await rawgit.text());
});

export default app;