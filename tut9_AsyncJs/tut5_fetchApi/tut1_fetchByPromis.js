const url = `https://random-data-api.com/api/address/random_address?size=3`;

const promise = fetch(url)
  .then((response) => {
    console.log("Server response", response); // response object
    return response.json();
  })
  .then((data) => {
    console.log("actual data", data);
  })
  .catch((error) => {
    console.log(error.message);
  });
