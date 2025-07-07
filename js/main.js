// (function getApi() {

//   let xhttp = new XMLHttpRequest;

//   let all = "";

//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       let response = JSON.parse(this.responseText).recipes;

//       for (let i = 0; i < response.length; i++) {
//         let div = `<div class="col-md-4 text-center api  wow animate__backInUp " data-wow-duration="1s" >
//         <img src="${response[i].image_url}" alt="" class="w-100 border rounded img-api wow animate__backInRight"  data-wow-delay="1s" />
//         <h4 class="text-center">${response[i].title}</h4>
//         <p class="text-center">${response[i].recipe_id}</p>
//       </div>
//       `;
//         all += div;
//       }
//       document.querySelector(".test").innerHTML = all;
//     }
//   };

//   xhttp.open(
//     "GET",
//     "https://forkify-api.herokuapp.com/api/search?q=pizza",
//     true
//   );

//   xhttp.send();
// })();

// //================================================================================================================================
// //================================================================================================================================

// (function getApi2() {
//   fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
//     .then((res) => res.json())
//     .then((handl) => handl.recipes)
//     .then((data) => {
//       all2 = "";
//       for (let i = 0; i < data.length; i++) {
//         let div2 = `<div class="col-md-4 text-center api wow animate__backInRight" >
//         <img src="${data[i].image_url}" alt="" class="w-100 border rounded img-api wow animate__backInRight"  data-wow-delay="1s" />
//         <h4 class="text-center">${data[i].title}</h4>
//         <p class="text-center">${data[i].recipe_id}</p>
//       </div>
//       `;
//         all2 += div2;
//       }

//       document.querySelector(".test2").innerHTML = all2;
//     });
// })()

// //================================================================================================================================
// //================================================================================================================================

// (async function getApi3() {
//   let res = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
//   let handl = await res.json();
//   let data = await handl.recipes;

//   let all3 = "";
//   for (let i = 0; i < data.length; i++) {
//     let div3 = `<div class="col-md-4 text-center api wow animate__backInLeft  " >
//         <img src="${data[i].image_url}" alt="" class="w-100 border rounded img-api wow animate__backInLeft  "  data-wow-delay="1s"/>
//         <h4 class="text-center">${data[i].title}</h4>
//         <p class="text-center">${data[i].recipe_id}</p>
//       </div>
//       `;
//     all3 += div3;
//   }
//   document.querySelector(".test3").innerHTML = all3;
// })()

// //================================================================================================================================
// //================================================================================================================================

//get elements from the DOM
let Name = document.querySelector(".name");
let Phone = document.querySelector(".phone");
let Agency = document.querySelector(".agency");
let Type = document.querySelector(".type");
let Link = document.querySelector(".link");
let Note = document.querySelector(".notes");
let btn = document.querySelector(".btn-outline-success");
let btnEdit = document.querySelector(".btn-outline-primary");
let inputs = document.querySelectorAll("input");

//intialise a data array

let dataArray = [];

//add data from localStorage if it exists

if (localStorage.getItem("dataArray")) {
  dataArray = JSON.parse(localStorage.getItem("dataArray"));

  // Populate the list with existing data
  dataArray.forEach((data, index) => {
    let content = document.querySelector(".data");

    let ul = document.createElement("ul");

    ul.className =
      "list-unstyled d-flex flex-wrap justify-content-between text-center text-capitalize fw-bold size-5 py-2 border border-1 rounded-2 mb-3";

    let liNum = document.createElement("li");

    liNum.className = "col-1";

    liNum.textContent = index + 1;

    let liName = document.createElement("li");

    liName.className = "col-1";

    liName.textContent = data.name;

    liName.setAttribute("data-type", "name");

    let liPhone = document.createElement("li");

    liPhone.className = "col-2";

    liPhone.textContent = data.phone;

    liPhone.setAttribute("data-type", "phone");

    let liType = document.createElement("li");

    liType.className = "col-2";

    liType.textContent = data.type;

    liType.setAttribute("data-type", "type");

    let liAgency = document.createElement("li");

    liAgency.className = "col-2";

    liAgency.textContent = data.agency;

    liAgency.setAttribute("data-type", "agency");

    let liLink = document.createElement("li");

    liLink.className = "col-1";

    liLink.innerHTML = `<a href="${data.link}" target="_blank">${data.link}</a>`;

    liLink.setAttribute("data-type", "link");

    let liNote = document.createElement("li");

    liNote.className = "col-2";

    liNote.textContent = data.note;

    liNote.setAttribute("data-type", "note");

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm col-1";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      // Remove the ul element from the content div
      content.removeChild(ul);
      // Remove the data from the dataArray
      dataArray = dataArray.filter((item) => item.id !== data.id);
      // Update localStorage
      localStorage.setItem("dataArray", JSON.stringify(dataArray));
      // Update the counter value
      x--;
      localStorage.setItem("x", JSON.stringify(x));
    });

    //create edit button
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm col-1 d-none";
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {
      // Show the input fields with the current data
      Name.value = data.name;
      Phone.value = data.phone;
      Agency.value = data.agency;
      Type.value = data.type;
      Link.value = data.link;
      Note.value = data.note;

      // Remove the ul element from the content div
      content.removeChild(ul);

      // Remove the data from the dataArray
      dataArray = dataArray.filter((item) => item !== data);

      // Update localStorage
      localStorage.setItem("dataArray", JSON.stringify(dataArray));

      // Update the counter value
      x--;
      localStorage.setItem("x", JSON.stringify(x));
    });

    btnEdit.addEventListener("click", function () {
      editBtn.classList.toggle("d-none");
      deleteBtn.classList.toggle("d-none");
    });

    ul.appendChild(liNum);
    ul.appendChild(liName);
    ul.appendChild(liPhone);
    ul.appendChild(liType);
    ul.appendChild(liAgency);
    ul.appendChild(liLink);
    ul.appendChild(liNote);
    ul.appendChild(deleteBtn);
    ul.appendChild(editBtn);
    content.appendChild(ul);
  });
}

// Check if the counter value exists in localStorage

if (localStorage.getItem("x")) {
  x = JSON.parse(localStorage.getItem("x"));
} else {
  x = 1;
}

//add event listener to the button

btn.addEventListener("click", function () {
  if (Phone.value == "" || Agency.value == "" || Type.value == "") {
    Phone.classList.add("border-danger", "border-2");
    Agency.classList.add("border-danger", "border-2");
    Type.classList.add("border-danger", "border-2");
  } else {
    // Remove the error classes if inputs are valid

    Phone.classList.remove("border-danger", "border-2");
    Agency.classList.remove("border-danger", "border-2");
    Type.classList.remove("border-danger", "border-2");

    // Create a new data object with the input values

    let data = {
      name: Name.value,
      phone: Phone.value,
      agency: Agency.value,
      type: Type.value,
      link: Link.value,
      note: Note.value,
      deleteBtn: "Delete",
      id: Date.now(),
    };

    let content = document.querySelector(".data");

    // Create a new ul element for the new data

    let ul = document.createElement("ul");

    ul.className =
      "list-unstyled d-flex flex-wrap justify-content-between text-center text-capitalize fw-bold size-5  py-2 border border-1 rounded-2 mb-3";
    ul.classList.add("wow", "animate__fadeInUp");
    ul.setAttribute("data-wow-duration", "1s");

    // Create li elements for each data field

    let liNum = document.createElement("li");

    liNum.className = "col-1";

    liNum.textContent = x;

    x++;

    let liName = document.createElement("li");

    liName.className = "col-1";

    liName.textContent = data.name;

    liName.setAttribute("data-type", "name");

    let liPhone = document.createElement("li");

    liPhone.className = "col-2";

    liPhone.textContent = data.phone;

    liPhone.setAttribute("data-type", "phone");

    let liType = document.createElement("li");

    liType.className = "col-2";

    liType.textContent = data.type;

    liType.setAttribute("data-type", "type");

    let liAgency = document.createElement("li");

    liAgency.className = "col-2";

    liAgency.textContent = data.agency;

    liAgency.setAttribute("data-type", "agency");

    let liLink = document.createElement("li");

    liLink.className = "col-1";

    liLink.innerHTML = `<a href="${data.link}" target="_blank">${data.link}</a>`;

    liLink.setAttribute("data-type", "link");

    let liNote = document.createElement("li");

    liNote.className = "col-2";

    liNote.textContent = data.note;

    liNote.setAttribute("data-type", "note");

    //create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm col-1";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      // Remove the ul element from the content div
      content.removeChild(ul);
      // Remove the data from the dataArray
      dataArray = dataArray.filter((item) => item !== data);
      // Update localStorage
      localStorage.setItem("dataArray", JSON.stringify(dataArray));
      // Update the counter value
      x--;
      localStorage.setItem("x", JSON.stringify(x));
    });

    //----------------------------------------------------------------------

    //create edit button
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm col-1 d-none";
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {
      // Show the input fields with the current data
      Name.value = data.name;
      Phone.value = data.phone;
      Agency.value = data.agency;
      Type.value = data.type;
      Link.value = data.link;
      Note.value = data.note;

      // Remove the ul element from the content div
      content.removeChild(ul);

      // Remove the data from the dataArray
      dataArray = dataArray.filter((item) => item !== data);

      // Update localStorage
      localStorage.setItem("dataArray", JSON.stringify(dataArray));

      // Update the counter value
      x--;
      localStorage.setItem("x", JSON.stringify(x));

      // Toggle the visibility of the edit and delete buttons
      let btnsEdit = document.querySelectorAll(".btn-primary");
      let btnsDelete = document.querySelectorAll(".btn-danger");
      btnsEdit.forEach((i) => {
        i.classList.toggle("d-none");
      });
      btnsDelete.forEach((i) => {
        i.classList.toggle("d-none");
      });
    });

    btnEdit.addEventListener("click", function () {
      editBtn.classList.toggle("d-none");
      deleteBtn.classList.toggle("d-none");
    });

    // Append the li elements to the ul

    ul.appendChild(liNum);

    ul.appendChild(liName);

    ul.appendChild(liPhone);

    ul.appendChild(liType);

    ul.appendChild(liAgency);

    ul.appendChild(liLink);

    ul.appendChild(liNote);

    ul.appendChild(deleteBtn);

    ul.appendChild(editBtn);
    //----------------------------------------------------------------------
    // Append the ul to the content div
    content.appendChild(ul);

    // Add the data to the dataArray
    dataArray.push(data);

    // Store the dataArray in localStorage
    localStorage.setItem("dataArray", JSON.stringify(dataArray));

    //store the counter value
    localStorage.setItem("x", JSON.stringify(x));
    // Clear the input fields after submission
    inputs.forEach((input) => {
      input.value = "";
    });
  }
});

// Add animation classes to the ul elements

ul = document.querySelectorAll("ul");
ul.forEach((item, i) => {
  if (i != 0) {
    item.classList.add("wow", "animate__fadeInUp");
    item.setAttribute("data-wow-duration", "1s");
  }
});
