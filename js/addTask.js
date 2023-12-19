const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('taskModal');
const addTaskButton = document.getElementById('addTaskButton');
const xmlns = "http://www.w3.org/2000/svg";

function delNode(el){
    el.parentNode.parentNode.remove()
    console.log(el.parentNode.firstElementChild.textContent)
    console.log(localStorage)
    localStorage.removeItem(el.parentNode.firstElementChild.textContent)
}
function displayItems(){
    let items = ""
    for(let i = 0; i < localStorage.length; i++){
        let storedValue = localStorage.key(i);
        let v = localStorage.getItem(storedValue)
        items += `<li class="task">
                    <div class="task__title">
                        <h3 class="tittle-text">${storedValue}</h3>
                        <span class="task-span" onclick="delNode(this)">×</span>
                    </div>
                    <div class="task__description">
                        <p class="task-description-text">${v}</p>
                    </div>
                    <div class="task__options">
                        <label class="checkbox">
                            <input class="checkbox-input" type="checkbox">
                            <svg class="checkbox-icon" viewBox="0 0 22 22">
                                <rect width="21" height="21" x=".5" y=".5" fill="#FFF9DE" stroke="#69665C" rx="6"></rect>
                                <path class="tick" stroke="#69665C" fill="none" stroke-linecap="round" stroke-width="2.5" d="M4 10l5 5 9-9"></path>
                            </svg>
                            <span class="checkbox-label">Done</span>
                        </label>
                    </div>
                  </li>`
    }
    document.getElementById("list-container").innerHTML = items
}


openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
    const textarea = document.querySelector(".textarea")
    const result = document.querySelector(".result")
    const limit = 250

    result.textContent = 0 + "/" + limit

    textarea.addEventListener('input', () => {
        const textLength = textarea.value.length
        result.textContent = textLength + "/" + limit

        if(textLength > limit) {
            addTaskButton.disabled = true
        } else {
            addTaskButton.disabled = false
        }
    })
});

document.querySelector('.form-task').addEventListener('submit', function(event) {
    event.preventDefault();
    displayItems()
});

addTaskButton.addEventListener('click', function(event) {
    const taskText = document.getElementById('taskInput').value;
    const textarea = document.querySelector(".textarea").value;
    if (taskText.trim() !== '') {
        modal.style.display = 'none';
        localStorage.setItem(taskText, textarea)
    }
    document.getElementById('taskInput').value = '';
    document.querySelector(".textarea").value = '';
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }

};

window.onload = function() {
    displayItems()
};