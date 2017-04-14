// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     }, 10000);
//   });
// }
//
//
// getTempPromise('Phahah').then(function(temp){
//   console.log('promsie succes', temp);
// }, function(err) {
//   console.log('promise error', err);
// });
// 
// // Chalenge area
// function addPromise(a, b) {
//   return new Promise(function(resolve, reject) {
//     if (typeof a === 'number' || typeof b === 'number') {
//       resolve(a + b);
//     } else {
//       reject('Cant add');
//     }
//   });
// }
//
//
// addPromise("a", 5).then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise errror', err);
// });
