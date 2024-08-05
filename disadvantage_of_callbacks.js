// pronise are special js objects that are also considered readability enhancers. They get immediately returnde from a function setup to return a promise .
// they act as a placeholder(temporary value) for a future value that we dont have yet.
// we also attach the functionallity we want to defer until the task is done and promise automatically handles execurtion of this functionallity 

// So promises do two things one inside the js and one outside the js:-

// 1.it signs a contract that says "I promise to give you a value in the future"
// it signs the process required to run the in the runtime and gives a placeholder in a js which has a value property that is initially undefined.


// Task to do:-
// 1.)wriye a function to download data from a url
// 2.) write a function to save the download data in a file aand return the filename
// 3.) write a function to upload a file written in previous step to a server 
function fetchcustom(url,fn){
    console.log("Started Downloading");
    setTimeout(()=>{
        console.log("Download Complete");
        let response ="Dummy Data"
        fn(response);   
    },3000);
}
let response=fetchcustom("www.google.com",function downloadcallback(response){
    console.log("download response is",response);
});

// in response it will give undefined because the function is not returning anything.
// Function to download data from a URL
function fetchCustom(url, callback) {
    console.log("Started Downloading");
    setTimeout(() => {
        console.log("Download Complete");
        let response = "Dummy Data"; // Simulated download data
        callback(response);   
    }, 3000);
}

// Function to save the downloaded data to a file and return the filename
function writeFile(data, callback) {
    console.log("Started writing", data);
    setTimeout(function process() { 
        console.log("Writing Complete");
        let filename = "Dummy.txt"; // Simulated filename
        callback(filename);  
    }, 5000);
}

// Function to upload the file to a server
function uploadFile(filename, url, callback) {
    console.log("Started Uploading");
    setTimeout(() => {
        console.log("Upload Complete", url, filename);
        let uploadResponse = "SUCCESS"; // Simulated upload response
        callback(uploadResponse);   
    }, 3000);
}

// Chain the operations using callbacks
fetchCustom("www.google.com", function downloadCallback(response) {
    console.log("Download response is", response);
    writeFile(response, function writeCallback(filename) {
        console.log("New file written is", filename);
        uploadFile(filename, "www.google.com", function uploadCallback(uploadResponse) {
            console.log("Successfully uploaded", uploadResponse);
        });
    });
});
