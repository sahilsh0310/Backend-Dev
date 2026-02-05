
setImmediate(() => {
  console.log('Immediate callback executed.');
}); 

setTimeout(() => {
  console.log('Timeout callback executed after 1000ms.');
}, 1000);   
setInterval(() => {
    console.log('Interval callback executed every 2000ms.');
    }
, 2000);    