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
let search = document.querySelector(".search");
let searchPlace = document.querySelector(".search-place");
let btnMode = document.querySelector(".change-mode");
let border = document.querySelector(".data");
let myName = document.querySelector(".my-name");
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
      "list-unstyled d-flex flex-wrap justify-content-between text-center text-capitalize fw-bold size-5 py-2 border border-1 rounded-2 mb-3 align-items-center";

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

    liLink.innerHTML = `<a href="${data.link}" target="_blank">link</a>`;

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
      "list-unstyled d-flex flex-wrap justify-content-between text-center text-capitalize fw-bold size-5  py-2 border border-1 rounded-2 mb-3 align-items-center";
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

    liLink.innerHTML = `<a href="${data.link}" target="_blank">link</a>`;

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

// Add search functionality for type----------------------------------------------------
search.addEventListener("keyup", function () {
  let searchValue = search.value.toLowerCase();
  let ulElements = document.querySelectorAll(".data ul");
  ulElements.forEach((ul) => {
    let liType = ul.querySelector("li[data-type='type']");
    if (liType) {
      if (liType.textContent.toLowerCase().includes(searchValue)) {
        ul.classList.remove("d-none");
      } else {
        ul.classList.add("d-none");
      }
    } else {
      return null;
    }
  });
});

// Add search functionality for place---------------------------------------------------
searchPlace.addEventListener("keyup", function () {
  let searchValue = searchPlace.value.toLowerCase();
  let ulElements = document.querySelectorAll(".data ul");
  ulElements.forEach((ul) => {
    let liPlace = ul.querySelector("li[data-type='name']");
    if (liPlace) {
      if (liPlace.textContent.toLowerCase().includes(searchValue)) {
        ul.classList.remove("d-none");
      } else {
        ul.classList.add("d-none");
      }
    } else {
      return null;
    }
  });
});

//start change mode functionality ---------------------------------------------------------
let night = true;

btnMode.addEventListener("click", function () {
  //start night mode
  if (night) {
    //change the back ground
    document.body.style.background = "black";

    myName.style.color = "white";

    // change the theme of the button
    btnMode.innerHTML = "Light Mode";
    btnMode.classList.add("bg-light", "text-dark");
    btnMode.classList.remove("bg-dark", "text-light");

    //change inputs themes
    let inputs = document.querySelectorAll("input");
    inputs.forEach((i) => {
      i.classList.remove("text-dark");
      i.classList.add("text-light");
      i.style.borderColor = "white";
      i.style.backgroundColor = "black";
      i.style.color = "white";
    });

    //change the ul themes
    let uls = document.querySelectorAll("ul");
    uls.forEach((e, i) => {
      let lis = e.querySelectorAll("li");
      if (i != 0) {
        lis.forEach((liItem) => {
          liItem.classList.add("text-light");
          liItem.classList.remove("text-dark");
        });
      }
    });

    border.style.borderColor = "white";

    night = false;
  }
  //start light mode
  else {
    //change the back ground
    document.body.style.background = "white";

    myName.style.color = "black";

    // change the theme of the button
    btnMode.innerHTML = "Night Mode";
    btnMode.classList.remove("bg-light", "text-dark");
    btnMode.classList.remove("bg-dark", "text-light");

    //change inputs themes
    let inputs = document.querySelectorAll("input");
    inputs.forEach((i) => {
      i.classList.remove("text-light");
      i.classList.add("text-dark");

      i.style.borderColor = "black";
      i.style.backgroundColor = "white";
      i.style.color = "black";
    });

    //change the ul themes
    let uls = document.querySelectorAll("ul");
    uls.forEach((e, i) => {
      let lis = e.querySelectorAll("li");
      if (i != 0) {
        lis.forEach((liItem) => {
          liItem.classList.remove("text-light");
          liItem.classList.add("text-dark");
        });
      }
    });

    border.style.borderColor = "black";

    night = true;
  }
});
