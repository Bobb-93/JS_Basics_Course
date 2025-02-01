console.log('sadsadfsdsgrw4');

var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.example.com/data', true);
xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var data = JSON.parse(xhr.responseText);
    console.log('Ala-bala');
    
    console.log(data);
  } else if (xhr.readyState === 4) {
    console.error('Error:', xhr.statusText);
  }
};

// const xhr = new XMLHttpRequest();
// const method = "GET";
// const url = "https://developer.mozilla.org/";

// xhr.open(method, url, true);
// xhr.onreadystatechange = () => {
//   // In local files, status is 0 upon success in Mozilla Firefox
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     const status = xhr.status;
//     if (status === 0 || (status >= 200 && status < 400)) {
//       // The request has been completed successfully
//       console.log(xhr.responseText);
//     } else {
//       // Oh no! There has been an error with the request!
//     }
//   }
// };
// xhr.send();