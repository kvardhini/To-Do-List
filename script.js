const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const prioritySelector = document.getElementById("prioritySelector");

function addTask() {
    const priority = prioritySelector.value;

    if (inputBox.value === '' || priority === 'all') {
        alert("Please enter a task and select a priority");
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        li.classList.add(priority); // Add priority class

        // Store priority as data attribute for filtering
        li.setAttribute('data-priority', priority);

        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = "";
        prioritySelector.value = "all"; // Reset dropdown
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();
