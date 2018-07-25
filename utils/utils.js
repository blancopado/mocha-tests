module.exports = {
  add: (a, b) => {
    return a + b;
  },
  asyncAdd: (a, b, callback) =>{
    setTimeout(()=> {
      callback(a + b);
    }, 500);
  },
  square: (x) => {
    return x * x;
  }
}