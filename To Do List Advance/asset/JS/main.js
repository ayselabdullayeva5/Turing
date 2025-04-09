// Custom Alert Modal
function showAlert(message, bgColor = "#ffcc00") {
  const alertBox = document.createElement("div");
  alertBox.innerText = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "150px";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.backgroundColor = bgColor;  // Burada rəngi dəyişirik
  alertBox.style.color = "#54170e";
  alertBox.style.fontWeight = "600";
  alertBox.style.padding = "25px 60px";
  alertBox.style.borderRadius = "25px";
  alertBox.style.fontSize = "19px";
  alertBox.style.fontFamily = "cursive"
  alertBox.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
  alertBox.style.zIndex = "1000";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.remove();
  }, 2000);
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

//Create  a "Edit" button
const myNode = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) {
  const editBtn = document.createElement("BUTTON");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  myNode[i].appendChild(editBtn);
}

// Click the edit butten to update list
let currentTaskElement = null;

document.querySelectorAll(".edit").forEach(button => {
  button.onclick = function () {
    currentTaskElement = this.parentElement; // Tapşırığın `li` elementini saxlayırıq
    document.getElementById("editInput").value = currentTaskElement.firstChild.textContent;
    document.getElementById("editModal").style.display = "block"; // Modalı açırıq
  };
});

document.getElementById("saveEdit").onclick = function () {
  const newText = document.getElementById("editInput").value.trim();
  
  if (newText === "") {
    alert("You must write something!"); // Boş olarsa, xəbərdarlıq göstəririk
  } else {
    currentTaskElement.firstChild.textContent = newText; // Tapşırığı yeniləyirik
    closeModal(); // Modalı bağlayırıq
  }
};

function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// Create a new list item when clicking on the "Submit" button
document.getElementById("mybutton").onclick = function () {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myinput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    showAlert("You must write something!", "#ffc0b6");
  } else {
    document.getElementById("mylist").appendChild(li);
  }
  document.getElementById("myinput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }

  const editBtn = document.createElement("BUTTON");
  editBtn.innerText = "Edit";
  editBtn.className = "edit";
  li.appendChild(editBtn);
  
  document.querySelectorAll(".edit").forEach(button => {
    button.onclick = function () {
      currentTaskElement = this.parentElement;
      document.getElementById("editInput").value = currentTaskElement.firstChild.textContent;
      document.getElementById("editModal").style.display = "block";
    };
  });
  
  document.getElementById("saveEdit").onclick = function () {
    const newText = document.getElementById("editInput").value.trim();
    
    if (newText === "") {
      alert("You must write something!");
    } else {
      currentTaskElement.firstChild.textContent = newText;
      closeModal();
    }
  };
  
  function closeModal() {
    document.getElementById("editModal").style.display = "none";
  }
  
}