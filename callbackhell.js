//callbaclhell is a situation where you have a lot of nested callbacks
// and it becomes difficult to read and maintain the code
// this is a simple example of callback hell
// e.g:-

function fetchData(callback) {
    setTimeout(() => {
        callback('data');
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        callback(data + ' processed');
    }, 1000);
}

function saveData(data, callback) {
    setTimeout(() => {
        callback(data + ' saved');
    }, 1000);
}

fetchData(function(data) {
    console.log('Fetched:', data);
    processData(data, function(processedData) {
        console.log('Processed:', processedData);
        saveData(processedData, function(savedData) {
            console.log('Saved:', savedData);
        });
    });
});

// Inversion of control is a design principle in which the control of objects or portions of a program is transferred to a container or framework.

// if there is some part of code whose control we are passing to someone else and we dont know how that part will be executed, then it is called inversion of control.

// e.g:-
