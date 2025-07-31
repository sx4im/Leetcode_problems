// 460. LFU Cache
/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.minFreq = 0;
  this.values = new Map();
  this.freq = new Map();
  this.keys = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if (!this.values.has(key)) return -1;

  const freq = this.freq.get(key);
  this.freq.set(key, freq + 1);

  this.keys.get(freq).delete(key);
  if (!this.keys.get(freq).size) {
    this.keys.delete(freq);
    if (this.minFreq === freq) this.minFreq++;
  }

  if (!this.keys.has(freq + 1)) this.keys.set(freq + 1, new Set());
  this.keys.get(freq + 1).add(key);

  return this.values.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if (this.capacity === 0) return;

  if (this.values.has(key)) {
    this.values.set(key, value);
    this.get(key);
    return;
  }

  if (this.size === this.capacity) {
    const keyToRemove = this.keys.get(this.minFreq).values().next().value;
    this.keys.get(this.minFreq).delete(keyToRemove);
    if (!this.keys.get(this.minFreq).size) {
      this.keys.delete(this.minFreq);
    }
    this.values.delete(keyToRemove);
    this.freq.delete(keyToRemove);
    this.size--;
  }

  this.values.set(key, value);
  this.freq.set(key, 1);
  if (!this.keys.has(1)) this.keys.set(1, new Set());
  this.keys.get(1).add(key);
  this.minFreq = 1;
  this.size++;
};