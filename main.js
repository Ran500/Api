// http://dummy.restapiexample.com/api/v1/employees
const api = "https://discord.com/api/";
// https://www.breakingbadapi.com/api/

async function get() {

    const response = await fetch(api)

    const data = await response.json()

    console.log(data);

    // document.getElementById('Test').innerHTML = data[0].name;
}

get()