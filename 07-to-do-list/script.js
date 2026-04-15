// const taskList = [];

// const addTask = () => {
//     const taskInput = document.getElementById("taskInput");
//     const value = taskInput.value;

//     if (value) {
//         taskList.push(value);
//         taskInput.value = "";
//         showTask();
//     }
// };

// function showTask() {
//     const taskContainer = document.getElementById("taskContainer");
//     taskContainer.innerHTML = taskList
//         .map((task) => `	<li>${task}</li>`)
//         .join("");
// }

const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const taskInputValue = taskInput.value.trim();

    if (taskInputValue !== "") {
        const taskListUI = document.getElementById("taskContainer");
        const li = document.createElement("li");
        li.innerHTML =
            '<input type="checkbox" > ' +
            taskInputValue +
            ' <button onClick="deleteTask(this)" >Delete</button>';

        taskListUI.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please add a task");
    }
};

const deleteTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
};

const deleteAllFunc = () => {
    const taskList = document.getElementById("taskContainer");
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked',
    );

    checkboxes.forEach((checkbox) => {
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li);
    });
};
