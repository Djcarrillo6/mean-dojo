/*
Instructions:
Determine whther there exists a one-to-one character mapping from s1 to another s2.

For Example: 
Given s1 = abc and s2 = bcd, return 'true' since we can map 'a' -- 'b', 'b' -- 'c', 'c' -- 'd'.  
Given s1 = foo and s2 = bar, return 'false' since 'o' cannot map to two characters.  
*/
var colors = require('colors');

function isAOneToOne(str1, str2) {
  if (str1.length !== str2.length) return false;
  var map = {};
  for(var i = 0; i < str1.length; i++) {
      var a = str1[i]; 
      var b = str2[i];
      if (typeof map[a] === "undefined") {
          map[a] = b;
      // check for error in first string ("ABB", "XYZ")
      } else if (map[a] !== b) {
        console.log('False'.red);
          return false;
      };

      // check for error in second string ("ABC", "XYY")
      for (var key in map) {
          if (key !== a && b === map[key]) {
            console.log('False'.red);
              return false;
          };
      };
  };
  console.log('True'.brightCyan);
  console.log(map);
  return true;
};
isAOneToOne('abcd', 'njoz');
isAOneToOne('foo', 'bar');