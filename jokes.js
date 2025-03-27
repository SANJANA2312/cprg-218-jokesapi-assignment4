//random joke
fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    document.getElementById('joke').textContent = data.joke || data.setup + "..." + data.delivery;
   
    
    });

//Category jokes
//Programming
document.getElementById('programming').addEventListener('click', function() {
fetch("https://v2.jokeapi.dev/joke/programming?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    document.getElementById('joke').textContent = data.joke || data.setup + "..." + data.delivery;
    document.getElementById('titleofthepage').textContent = 'A Random Programming Joke'; })
});
  
//pun
document.getElementById('pun').addEventListener('click', function() {

fetch("https://v2.jokeapi.dev/joke/pun?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    document.getElementById('joke').textContent = data.joke || data.setup + "..." + data.delivery;
    document.getElementById('titleofthepage').textContent = 'A Random Pun'; })
});

//christmas
document.getElementById('christmas').addEventListener('click', function() {
fetch("https://v2.jokeapi.dev/joke/christmas?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    document.getElementById('joke').textContent = data.joke || data.setup + "..." + data.delivery;
    document.getElementById('titleofthepage').textContent = 'A Random Christmas Joke';})
});

//Misc
document.getElementById('misc').addEventListener('click', function() {
fetch("https://v2.jokeapi.dev/joke/misc?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    document.getElementById('joke').textContent = data.joke || data.setup + "..." + data.delivery;
    document.getElementById('titleofthepage').textContent = 'A Random Miscellaneous Joke'; })
});


//Spooky
document.getElementById('spooky').addEventListener('click', function() {
fetch("https://v2.jokeapi.dev/joke/spooky?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.joke);
    document.getElementById('joke').textContent = data.joke || data.setup + "..." + data.delivery;
    document.getElementById('titleofthepage').textContent = 'A Random Spooky Joke'; })
});

