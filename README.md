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
Created At : Sat May 18 2024, 12:39:01 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|48079|50688|47274|46275|
|[fast](https://github.com/danteissaias/fast)|48029|51321|46257|46508|
|[hono](https://github.com/honojs/hono)|47431|50746|47912|43635|
|[oak](https://github.com/oakserver/oak)|27999|29543|28013|26442|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24445|30691|22491|20152|
|[fastify](https://github.com/fastify/fastify)|16335|16813|16070|16121|
|[koa](https://github.com/koajs/koa)|14522|15078|13655|14834|
|[express](https://github.com/expressjs/express)|6394|6512|6130|6540|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|80477|86568|80096|74767|
|[nhttp](https://github.com/nhttp/nhttp)|65593|84069|55497|57212|
|[hono](https://github.com/honojs/hono)|61050|74889|60121|48139|
|[baojs](https://github.com/mattreid1/baojs)|36114|40634|36404|31305|
  



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

