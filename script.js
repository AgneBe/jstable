"use strict";
const tableBody = document.querySelector("tbody");
const deleteFirst = document.querySelector("#deleteFirst");
const addLast = document.querySelector("#addLast");
const deleteLast = document.querySelector("#deleteLast");

deleteFirst.addEventListener("click", deleteFirstLine);
addLast.addEventListener("click", addLastLine);
deleteLast.addEventListener("click", deleteLastLine);

function addLastLine() {
  if ((fname.value) &&(lastName.value) && (age.value > 0)) {

    const trElement = document.createElement("tr");
    tableBody.append(trElement);

    const tdNameElement = document.createElement("td");
    tdNameElement.innerText = fname.value;
    tableBody.append(tdNameElement);

    const tdLastNameElement = document.createElement("td");
    tdLastNameElement.innerText = lastName.value;
    tableBody.append(tdLastNameElement);

    const tdAgeElement = document.createElement("td");
    tdAgeElement.innerText = age.value;
    tableBody.append(tdAgeElement);

    fname.value = "";
    lastName.value = "";
    age.value = "";

  } else {
    alert("Please enter a details");
  }
}

function deleteLastLine() {
  const rows = tableBody.querySelectorAll("tr");
  const col = tableBody.querySelectorAll("td");

  if (rows.length) {
    rows[rows.length - 1].remove();
    col[col.length-1].remove();
    col[col.length-2].remove();
    col[col.length-3].remove();
  } else {
    alert("List is empty");
  }
}

function deleteFirstLine() {
  const rows = tableBody.querySelectorAll("tr");
  const col = tableBody.querySelectorAll("td");

  if (rows.length) {
    rows[0].remove();
    col[0].remove();
    col[1].remove();
    col[2].remove();
  } else {
    alert("List is empty");
  }
}