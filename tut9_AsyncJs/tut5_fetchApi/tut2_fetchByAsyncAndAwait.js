let arr = [];

let fetchDataHandler = async function () {
  const url = `https://random-data-api.com/api/address/random_address?size=3`;
  try {
    let response = await fetch(url);
    let result = await response.json();
    arr = result;
    showData();
  } catch (error) {
    console.log(error);
  }
};

function showData() {
  console.log(arr);
}

fetchDataHandler();
// console.log(arr);
// alawy send data to function you can not access directely beacuse of async nature
