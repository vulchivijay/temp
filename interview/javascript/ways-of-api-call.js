

async function getUsers() {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  let data = await response.json();
    return data;
  }
getUsers().then(data => console.log(data));

or

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
  console.log(request);
  if (request.status === 200) {
    // by default the response comes in the string format, we need to parse the data into JSON
    console.log(JSON.parse(request.response));
  } else {
    console.log(`error ${request.status} ${request.statusText}`);
  }
};

or 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET",
  success: function(result) {
    console.log(result);
  },
  error: function(error) {
    console.log(error);
  }
});
</script>

or

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
  axios
 .get("https://jsonplaceholder.typicode.com/users")
 .then(response => {
   console.log(response.data);
 })
 .catch(error => console.error(error));
</script>
