const axios = require("axios");
const cache = require("./cache");
const router = require("express").Router();
module.exports = router;

/*
 * Routes on "/api"
 */

router.get("/", async (req, res, next) => {
  const cached = cache.get(req);
  if (cached) {
    res.json(cached);
  } else {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/person/popular",
        {
          params: { api_key: process.env.TMDB_KEY },
        }
      );

      cache.set(req, response.data.results);
      res.json(response.data.results);
    } catch (err) {
      next(err);
    }
  }
});

router.get("/search/person", async (req, res, next) => {
  const cached = cache.get(req);
  if (cached) {
    res.json(cached);
  } else {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/search/person",
        {
          params: {
            api_key: process.env.TMDB_KEY,
            query: req.query["starName"],
          },
        }
      );

      cache.set(req, response.data.results);
      res.json(response.data.results);
    } catch (err) {
      next(err);
    }
  }
});

router.get("/person/birthday", async (req, res, next) => {
  const cached = cache.get(req);
  if (cached) {
    res.json(cached);
  } else {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/person/" + req.query["starId"],
        {
          params: { api_key: process.env.TMDB_KEY },
        }
      );
      cache.set(req, response.data.birthday);
      res.json(response.data.birthday);
    } catch (err) {
      next(err);
    }
  }
});

router.get(
  "/person",
  cache.get,
  async (req, res, next) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/person/" + req.query["starId"],
        {
          params: { api_key: process.env.TMDB_KEY },
        }
      );

      res.json(response.data);
    } catch (err) {
      next(err);
    }
  },
  cache.set
);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
