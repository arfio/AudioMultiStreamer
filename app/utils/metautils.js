export function getAllFuncs(obj) {
  var props = [];

  do {
      props = props.concat(Object.getOwnPropertyNames(obj));
  } while (obj = Object.getPrototypeOf(obj) && obj != Object.prototype);

  return props.sort().filter(function(e, i, arr) { 
     if (e!=arr[i+1] && typeof obj[e] == 'function') return true;
  });
}
