function encode(string) {
  var result = '';
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if (freq[character]) {
         freq[character]++;
      } else {
         freq[character] = 1;
      }
  }

  for(const key in freq) {
    result += `${key}${freq[key]}`;
  }
  return result;
};

var string = 'aaaabbbbccddeeeee';
console.log(encode(string));

function decode(str) {
  var result = '';




  return result;
}