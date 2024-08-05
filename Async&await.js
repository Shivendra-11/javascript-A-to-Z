// if we declare the function async then it does the following
// 1)it allows the use of await keyword inside the function
// 2)it makes the function return a promise and we can consume the promise which we do earlier using .then() function 
// 3)it allows the use of try and catch block inside the function
//4) async function always return the value to a promise 
function fetchData(url) {
    return new Promise(function process(resolve, reject) {
      console.log("Started downloading from", url);  //3
      setTimeout(function processDownloading() {
        let data = "Dummy Data";
        console.log("Download completed");  //8
        resolve(data);
      }, 5000);
    });
  }
  
  function writeFile(data) {
    return new Promise(function process(resolve, reject) {
      console.log("Started Writing");  //9
      setTimeout(function processWritting() {
        let filename = "result.txt";
        console.log("Writing completed");  //12
        resolve(filename);
      }, 7000);
    });
  }
  
  function UploadData(filename, url) {
    return new Promise(function process(resolve, reject) {
      console.log("Started Uploading", filename, "to", url);  //13
      setTimeout(function processUploading() {
        let uploadStatus = "Uploaded";
        console.log("Uploading completed");  //16
        resolve(uploadStatus);
      }, 5000);
    });
  }
  
  async function processing(){
    let downloadData = await fetchData("www.google.com");
    console.log("Downloading is completed", downloadData);  //10
    let file = await writeFile(downloadData);
    console.log("writing await completed", file);  //11
    let uploadresponse = await UploadData(file, "www.google.com");
    console.log("uploading is completed", uploadresponse);  //14
    return true;
  }
  
  console.log("start");  //1
  processing();
  console.log("End");  //2
  
  // Execution details:
  
  // 1. "start" is logged immediately.
  
  // 2. The async function processing() is called, starting its execution. 
  
  // 3. fetchData("www.google.com") is called within processing(), logging "Started downloading from www.google.com".
  // The setTimeout in fetchData schedules the processDownloading function to run after 5 seconds (5000ms), adding it to the task queue.
  
  // 4. "End" is logged immediately after processing() is called.
  
  // The call stack is now empty, and the event loop starts processing the task queue.
  
  // 5. After 5 seconds, processDownloading runs, logging "Download completed" and resolving the fetchData promise with "Dummy Data". This places the next step in processing() (the await for writeFile) in the microtask queue.
  
  // 6. The microtask queue runs the next step of processing(), logging "Downloading is completed Dummy Data".
  
  // 7. writeFile("Dummy Data") is called, logging "Started Writing".
  // The setTimeout in writeFile schedules the processWritting function to run after 7 seconds (7000ms), adding it to the task queue.
  
  // 8. After 7 seconds, processWritting runs, logging "Writing completed" and resolving the writeFile promise with "result.txt". This places the next step in processing() (the await for UploadData) in the microtask queue.
  
  // 9. The microtask queue runs the next step of processing(), logging "writing await completed result.txt".
  
  // 10. UploadData("result.txt", "www.google.com") is called, logging "Started Uploading result.txt to www.google.com".
  // The setTimeout in UploadData schedules the processUploading function to run after 5 seconds (5000ms), adding it to the task queue.
  
  // 11. After 5 seconds, processUploading runs, logging "Uploading completed" and resolving the UploadData promise with "Uploaded". This places the next step in processing() (the final console.log and return) in the microtask queue.
  
  // 12. The microtask queue runs the final step of processing(), logging "uploading is completed Uploaded" and returning true.


  function fetchData(url) {
    return new Promise(function f(resolve, reject) {
      console.log("Started downloading from", url);  // 3, 
      setTimeout(function processDownloading() {
        let data = "Dummy data";
        console.log("Download completed");  // 12, 14
        resolve(data);
      }, 70000);  // 70 seconds
    });
  }
  
  async function processing() {
    console.log("Entering processing");  // 5
    let value1 = await fetchData("www.youtube.com");
    console.log("YouTube downloading is completed");  // 13
    let value2 = await fetchData("www.google.com");
    console.log("Google downloading is completed");  // 15
    console.log("Exiting processing");  // 16
    return value1 + value2;
  }
  
  console.log("Start");  // 1
  setTimeout(function timer() {
    console.log("timer 1");  // 7
  }, 0);
  
  console.log("after setting timer 1 ");  // 2
  let x = processing();
  x.then(function(value) {
    console.log("finally processing promise resolved with", value);  // 17
  });
  
  setTimeout(function timer2() {
    console.log("timer 2");  // 10
  }, 10000);
  
  setTimeout(function timer3() {
    console.log("timer 3 completed");  // 8
  }, 0);
  
  console.log("End");  // 4
  
  // Execution details:
  
  // 1. "Start" is logged immediately.
  
  // 2. Another "Start" is logged immediately.
  
  // 3. The async function processing() is called, starting its execution. "Entering processing" is logged.
  
  // 4. fetchData("www.youtube.com") is called within processing(), logging "Started downloading from www.youtube.com".
  //    The setTimeout in fetchData schedules processDownloading to run after 70 seconds, adding it to the task queue.
  
  // 5. "End" is logged immediately after processing() is called.
  
  // Call stack: [main script]
  // Microtask queue: []
  // Task queue: [timer, timer3, timer2 (in 10 seconds), processDownloading (in 70 seconds)]
  
  // 6. The event loop processes the task queue:
  //    - timer logs "timer 1".
  //    - timer3 logs "timer 3 completed".
  
  // Call stack: []
  // Microtask queue: []
  // Task queue: [timer2 (in 10 seconds), processDownloading (in 70 seconds)]
  
  // 7. After 10 seconds, timer2 logs "timer 2".
  
  // Call stack: []
  // Microtask queue: []
  // Task queue: [processDownloading (in 70 seconds)]
  
  // 8. After 70 seconds, processDownloading logs "Download completed" for "www.youtube.com" and resolves the promise, adding the next step in processing() to the microtask queue.
  
  // Call stack: []
  // Microtask queue: [processing (continuation)]
  
  // 9. The event loop processes the microtask queue:
  //    - processing continues, logging "YouTube downloading is completed".
  //    - fetchData("www.google.com") is called, logging "Started downloading from www.google.com".
  //    - The setTimeout in fetchData schedules processDownloading to run after 70 seconds, adding it to the task queue.
  
  // Call stack: []
  // Microtask queue: []
  // Task queue: [processDownloading (in 70 seconds)]
  
  // 10. After 70 seconds, processDownloading logs "Download completed" for "www.google.com" and resolves the promise, adding the next step in processing() to the microtask queue.
  
  // Call stack: []
  // Microtask queue: [processing (continuation)]
  
  // 11. The event loop processes the microtask queue:
  //     - processing continues, logging "Google downloading is completed", "Exiting processing", and resolving the promise with the combined value of "Dummy dataDummy data".
  
  // 12. The resolved value triggers the .then handler, logging "finally processing promise resolved with Dummy dataDummy data".
  
  // Execution completes as the call stack, microtask queue, and task queue are all empty.
  

//   "Start"
//   "after setting timer 11"
//   "Entering processing"
//   "Started downloading from www.youtube.com"
//   "End"
//   "timer 1"
//   "timer 3 completed"
//   "timer 2" (after 10 seconds)
//   "Download completed" (after 70 seconds from the start of fetchData("www.youtube.com"))
//   "YouTube downloading is completed"
//   "Started downloading from www.google.com"
//   "Download completed" (after another 70 seconds, total 140 seconds from the start)
//   "Google downloading is completed"
//   "Exiting processing"
//   "finally processing promise resolved with Dummy dataDummy data"



// things to remember 
// Inside async thing are looks to be synchronoue but overall they  are asynchronous.

function fun(){
  return new promise (function (resolve,reject){
    setTimeout(function process(){
      console.log("resolved");
      resolve(123);
    },5000);
  });
}

let t=fun();
t.then(function exec(value){
  console.log("value is ",value);
  for(let i=0;i<1000000000;i++){
    //do nothing
  }
  return 100;
});

t.then(function exec2(value){
  console.log("New value is ",value);
  return 200;
});



async function fun(){
  console.log("entered"); //2
  let x=await promise.resolve(20);//it will send the code to the microtask queue and it will come back to the global scope
  console.log("exited"); //4
  return x;
}

console.log("Start");//1
let val=fun();
val.then(function f(value){
  console.log("value is ",value);  //5 
});

console.log("end");//3
