let id = "";
// localStorage.clear();

function handleData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Please insert the data"; //Shows the message
  } else {
    if (id == "") {
      let arr = JSON.parse(localStorage.getItem("crud"));
      // console.log(arr); shows null value
      if (!arr) {
        let data = [name];
        localStorage.setItem("crud", JSON.stringify(data));
      } else {
        arr.push(name);
        localStorage.setItem("crud", JSON.stringify(arr));
      }
      document.getElementById("msg").innerHTML = "Data inserted";
    } else {
    }
  }
}

function fetchData() {}

function deleteData() {}

function editData() {}
