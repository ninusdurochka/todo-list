document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = "block";

    function getRandomId() {
        return Math.random() < 0.5 ? Math.floor(Math.random() * 100) + 100 : Math.floor(Math.random() * 200);
    }

    const randomId = getRandomId()
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
            data.slice(randomId, randomId + 3).forEach(task => {
                const markup = `<li class="task">
                    <div class="task__title">
                        <h3 class="tittle-text">${task.title}</h3>
                        <span class="task-span" onclick="delNode(this)">×</span>
                    </div>
                    <div class="task__description">
                        <p class="task-description-text"></p>
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

                document.getElementById("list-container").insertAdjacentHTML('beforeend', markup);
            });
            preloader.style.display = "none";
        })
        .catch(error => {
            preloader.style.display = "none";
            const er = `<div>
                                  <p>⚠ Something went wrong</p>
                               </div>`
            document.getElementById("list-container").innerHTML = er;
            console.log(error)
        })
});