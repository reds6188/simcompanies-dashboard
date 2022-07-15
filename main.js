myUrl = 'https://www.simcompanies.com/api/v2/market/101/';

const myRequest = new Request(myUrl);

fetch(myRequest, {
    method: 'GET',
    //mode: 'no-cors',
    //cache: 'no-cache',
    //credentials: 'same-origin',
    headers: {
      //'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'it-IT,it;q=0.9'
    },
    //referrerPolicy: 'no-referrer'
    //referrerPolicy: 'strict-origin-when-cross-origin'
})
.then(response => {
    //handle response            
    console.log(response);
    return response.json();
  })
  .then(data => {
    //handle data
    console.log(`Data: ${data}`);
  })
  .catch(error => {
    //handle error
    console.error(error);
  });