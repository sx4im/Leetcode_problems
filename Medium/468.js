// 468. Validate IP Address
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
  const ipv4 = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
  const ipv6 = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/;

  return ipv4.test(queryIP) ? 'IPv4' : ipv6.test(queryIP) ? 'IPv6' : 'Neither';
};