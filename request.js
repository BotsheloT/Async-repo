/* For this code to work properly, it needs to be run in a browser */

//Request object
const req = new XMLHttpRequest;

//Event listener
req.addEventListener('readystatechange', () => {
    if (req.readyState === 4){
        console.log(req.responseText);
    }
});

//Getting API for request
req.open('GET', 'https://jsonplaceholder.typicode.com/todos');
req.send();
