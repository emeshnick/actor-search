const NodeCache = require("node-cache");

/* Caching middleware*/
const cache = new NodeCache({ stdTTL: 20 * 60 });

function getUrlFromRequest(req) {
  const url = req.protocol + "://" + req.headers.host + req.originalUrl;
  return url;
}

function set(req, data) {
  const url = getUrlFromRequest(req);
  cache.set(url, data);
}

function get(req) {
  const url = getUrlFromRequest(req);
  const content = cache.get(url);
  if (content) {
    return content;
  }
}

module.exports = { get, set };
