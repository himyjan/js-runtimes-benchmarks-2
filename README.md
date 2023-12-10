## Runtime JS/TS benchmarks.

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench (params and queryParams)
framework.get("/blog/:id", (req, res) => {
  const data = `${req.params.id} ${req.query.title}`;
  res.send(data);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Sun Dec 10 2023, 12:41:35 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|45643|49093|44509|43327|
|[fast](https://github.com/danteissaias/fast)|44962|48933|42449|43504|
|[hono](https://github.com/honojs/hono)|43884|46887|44917|39849|
|[fastro](https://github.com/fastrodev/fastro)|22950|47546|10760|10545|
|[oak](https://github.com/oakserver/oak)|19530|20637|19570|18384|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25892|30604|24454|22619|
|[fastify](https://github.com/fastify/fastify)|15450|16041|15234|15076|
|[koa](https://github.com/koajs/koa)|14186|14481|13727|14350|
|[express](https://github.com/expressjs/express)|6171|6230|5958|6326|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|69519|80606|78492|49459|
|[nhttp](https://github.com/nhttp/nhttp)|61715|80986|55103|49057|
|[hono](https://github.com/honojs/hono)|53367|67017|49818|43267|
|[baojs](https://github.com/mattreid1/baojs)|32778|36592|31732|30010|
  



## Usage

```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno task bench

// for_single
deno task bench framework_name
```

## License

[MIT](LICENSE)

