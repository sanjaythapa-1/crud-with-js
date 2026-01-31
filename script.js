let id = "";
// localStorage.clear();
fetchData();

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
    fetchData();
  }
}

function fetchData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  if (arr) {
    let html = "";
    let sno = 1;
    for (let i in arr) {
      html += `<tr><td>${sno}</td><td>${arr[i]}</td><td><a href ="javascript:void(0)" onclick ="deleteData(${i})">Delete</a></td></tr>`; //javascript:void(0) prevents reload in page
    }
    document.getElementById("user").innerHTML = html;
  }
}

function deleteData(recordData) {
  let arr = JSON.parse(localStorage.getItem("crud"));
  arr.splice(recordData, 1); //used to remove data from the index
  localStorage.setItem("crud", JSON.stringify(arr));
  fetchData();
}

function editData() {}
