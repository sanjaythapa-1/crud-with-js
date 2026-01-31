let id = "no";
// localStorage.clear();
fetchData();

function handleData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Please insert the data"; //Shows the message
  } else {
    if (id == "no") {
      let arr = getCrudData();
      // console.log(arr); shows null value
      if (!arr) {
        let data = [name];
        setCrudData(data);
      } else {
        arr.push(name);
        setCrudData(arr);
      }
      document.getElementById("msg").innerHTML = "Data inserted";
    } else {
      let arr = getCrudData();
      arr[id] = name;
      setCrudData(arr);
      document.getElementById("msg").innerHTML = "Data updated";
    }
    document.getElementById("name").value = "";
    fetchData();
  }
}

function fetchData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  if (arr) {
    let html = "";
    let sno = 1;
    for (let i in arr) {
      html += `<tr><td>${sno}</td><td>${arr[i]}</td><td><a href ="javascript:void(0)" onclick ="editData(${i})">Edit</a>&nbsp;<a href ="javascript:void(0)" onclick ="deleteData(${i})">Delete</a></td></tr>`; //javascript:void(0) prevents reload in page
      sno++;
    }
    document.getElementById("user").innerHTML = html;
  }
}

function deleteData(recordData) {
  let arr = getCrudData();
  arr.splice(recordData, 1); //used to remove data from the index
  setCrudData(arr);
  fetchData();
}

function editData(recordData) {
  id = recordData;
  let arr = getCrudData();
  document.getElementById("name").value = arr[recordData];
}

function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}
function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
