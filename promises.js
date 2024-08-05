// promise has 4 property
// 1) status
// 2) value
// 3)on fullfillment
// 4)on rejection

// 1) status:-status is a property of promise which tells the state of the promise object. It can have 3 values:
// 1) pending:-Initial state, neither fulfilled nor rejected.
// 2) fulfilled:-Meaning that the operation completed successfully.(success)
// 3) rejected:-Meaning that the operation failed.(error)

// 2) value:-value status of the promise is oending this value property id undefined the moment promise resolved state is fullfilled the amount is updated from undefined to the new value (this value is  can consider as the returned value ) resolved valu)
// so the value property act like a placeholder till the time promise function is not resolved.

// 3) on fullfillment:-This is an array which contains the functions that we attach to our promise abject. (we attach then method ) when the vale property is updated from undefined to the new value then js engine give chance to these attached function one by one with the value property as the argument (if theere is no piece in the call stack & global code )

// function fetchData(){
//     return new Promise(function(resolve,reject){
// we can write any piece of code here
//     })
// }

// thsi is how we decalrw the promise
// here new is used as the keyword which is made the promise object and promise onject take an callback function and that callback function take two arguments one is resolve and second is reject

// function fetchData(url){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//            console.log("settime out completed");
//         },1000)
//     var response="Data come"
//         resolve(response);
//     })
// }

// fetchData("https://jsonplaceholder.typicode.com/posts");
// visit the mdn promises chart once

// points to be noted
// 1) when we call resolve then promise consodered itself as fullfilled
// 2) when we call reject then promise consodered itself as rejected
function demo(val) {
  return new Promise(function process(resolve, reject) {
    console.log("promise is started");
    setTimeout(function () {
      console.log("setimeout is started");
      if (val % 2 == 0) {
        resolve("even number");
      } else {
        reject("odd number");
      }
    }, 10000);
    console.log("promise is ended");
  });
}

a = demo(10);
console.log(a);

// creation of  PROMISE object is synchronous but the execution of the promise object is asynchronous;

function fetchdata() {
  return new Promise(function process(resolve, reject) {
    console.log("Going to start the download");
    setTimeout(function process() {
      let data = "Dummy Download Link";
      console.log("Download completed");
      resolve(12345);
    }, 5000);
  });
}

console.log("starting the program");
console.log("we are expecting to mimic the download");
x = fetchdata("www.google.com");
console.log(
  "now priomise obj creared succesfully but downloading is still going"
);

// Now we have to learn how to consume the  promise

// 1)to writhe the fetch data from the url:-

function fetchData(url) {
  return new promise(function process(resolve, reject) {
    console.log("Started downloading from ", url);
    setTimeout(function processDownloading() {
      let data = "Dummmy Data";
      console.log("Download completed");
      resolve(data);
    }, 5000);
  });
}

function writeFile(data) {
  return new promise(function process(resolve, reject) {
    console.log("Started Writing");
    setTimeout(function processWritting() {
      let filename = "result.txt";
      console.log("Writing completed");
      resolve(filename);
    }, 7000);
  });
}

function UploadData(filename, url) {
  return new promise(function process(resolve, reject) {
    console.log("Started Uploading", data, "to", url);
    setTimeout(function processUploading() {
      let uploadStatus = "Uploaded";
      console.log("Uploading completed");
      resolve(uploadStatus);
    }, 5000);
  });
}

// consuming the promises is the main beauty of the promises by doing so we goona avoid the inversion of control and callback hell
// whenever we get a promise object which is like any js object that we can store in a variable

// let data =fetchData("www.google.com");
// fetchData return the object of promise and we can store that object in the variable response

// let filename=writeFile(data);
// let response=UploadData(filename,"www.google.com");

// after fullfillement of the promise object we can attach the then method to the promise object
// then method is used to attach the callback function to the promise object
// then method take two arguments first is the resolve and second is the reject
// we can use .then () function on the promises object to bind the function we want to execute once we fullfill a promise.
// the .then() function takes function as an argumnet that we want to execute after promise fullfill and the argument takes value property

// By using .then() function
let download = fetchData("www.google.com");
download.then(function process(value) {
  console.log("downloaded promise completed");
  console.log(value);
  let writePromise = writeFile(value);
  writeFile.then(function processWriting(value) {
    console.log("writing promise completed");
    console.log("filename is ", value);
  });
});

// above piece of code is solve the IOC but Callback hell is not resolved yet

// we can resolve the followig code by using the chaining of the promises
fetchData("www.google.com")
  .then(function process(value) {
    console.log("downloaded promise completed");
    console.log(value);
    return writeFile(value);
  })
  .then(function processWriting(value) {
    console.log("writing promise completed");
    console.log("filename is ", value);
    return UploadData(value, "www.google.com");
  })
  .then(function processUploading(value) {
    console.log("uploading promise completed");
    console.log("upload status is ", value);
  });
