/* For this code to work properly, it needs to be run in a browser */

//Request object
const req = new XMLHttpRequest;

//Event listener
req.addEventListener('readystatechange', () => {
    if (req.readyState === 4 && req.status === 200){
        console.log(req.responseText);
    } else {
        console.log('Could not fetch data');
    }
});

//Getting API for request
req.open('GET', 'https://jsonplaceholder.typicode.com/todos');
req.send();
