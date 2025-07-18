// 355. Design Twitter
var Twitter = function() {
  this.tweets = [];
  this.followers = new Map();
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets.unshift([userId, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const result = [];
  for (let i = 0; i < this.tweets.length && result.length < 10; i++) {
    const [user, tweet] = this.tweets[i] ?? [];
    if (user === userId || (this.followers.get(userId) && this.followers.get(userId).has(user))) {
      result.push(tweet);
    }
  }
  return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followerId !== followeeId) {
    if (!this.followers.has(followerId)) {
      this.followers.set(followerId, new Set());
    }
    this.followers.get(followerId).add(followeeId);
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.followers.has(followerId)) {
    this.followers.get(followerId).delete(followeeId);
  }
};