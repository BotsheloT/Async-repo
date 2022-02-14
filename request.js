/* For this code to work properly, it needs to be run in a browser */

//Function for request
let getData = (cFunc) => {
    //Request object
    const req = new XMLHttpRequest;

    //Event listener
    req.addEventListener('readystatechange', () => {
        if (req.readyState === 4 && req.status === 200){
            cFunc(undefined, req.responseText);
        } else {
            cFunc('Could not complete request', undefined);
        }
    });

    //Getting API for request
    req.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    req.send();
}

console.log(1);
//Calling function
getData((err, data) =>{
    console.log('Callback fired');
    if(err){
        console.log(err);
    }else console.log(data);
});
console.log(2);
