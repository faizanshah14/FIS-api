'use strict' 
module.exports = function convertArrayToObject(obj) {
    for (const key in obj) {
      if (Array.isArray(obj[key]) && obj[key].length === 1) {
        obj[key] = obj[key][0];
      } else if (typeof obj[key] === 'object') {
        convertArrayToObject(obj[key]);
      }
    }
    return obj;
  }


// module.exports = function simplifyObject(obj) {
//     if (Array.isArray(obj)) {
//       // If it's an array with one item, return that item
//       return obj.length === 1 ? obj[0] : obj.map(simplifyObject);
//     } else if (obj !== null && typeof obj === 'object') {
//       // If it's an object, apply the function to each property
//       return Object.fromEntries(
//         Object.entries(obj).map(([key, value]) => [key, simplifyObject(value)])
//       );
//     }
//     // Return the value if it's neither an array nor an object
//     return obj;
//   }

