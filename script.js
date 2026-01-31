let id = "";
localStorage.clear();
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
      html += `<tr><td>${sno}</td><td>${arr[i]}</td></tr>`;
    }
    document.getElementById("user").innerHTML = html;
  }
}

function deleteData() {}

function editData() {}
