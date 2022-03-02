const NodeCache = require("node-cache");

/* Caching middleware*/

const cache = new NodeCache();

module.exports = (duration) => (req, res, next) => {
  if (req.method !== "GET") {
    return next();
  }

  const key = req.starId;
  const cachedData = cache.get(key);

  if (cachedResponse) {
    res.send(cachedData);
  } else {
    res.originalSend = res.send;
    res.send = (body) => {
      res.originalSend(body);
      cache.set(key, body, duration);
    };
  }
  next();
};
