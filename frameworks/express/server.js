import express from "express";

express()
  .get("/", (_, res) => {
    res.send("home");
  })
  .get("/blog/:id", async (req, res) => {
    res.send(await Promise.resolve(`${req.params.id} ${req.query.title}`));
  })
  .get("/api/user", (_, res) => {
    res.setHeader("x-powered-by", "bench");
    res.json({ user: "john" });
  })
  .listen(8000);
