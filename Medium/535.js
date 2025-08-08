// 535. Encode and Decode TinyURL
const map = new Map();
let counter = 1;

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  const shortUrl = 'https://tinyurl.com/' + counter.toString();
  map.set(shortUrl, longUrl);
  counter++;
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return map.get(shortUrl) || null;
};