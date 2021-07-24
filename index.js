
var removeButtons = document.querySelectorAll(".remove-task")
var completeButtons = document.querySelectorAll('.complete-task')
var tasks = document.querySelectorAll('.task-container')
var tasktext = document.querySelectorAll('.task')
var addButton = document.querySelector('button')
var list = document.querySelector('ul')
var input = document.querySelector('input')


for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', function() {
        tasks[i].remove()
    })
}

for (let j = 0; j < completeButtons.length; j++) {
    completeButtons[j].addEventListener('click', function() {
        tasktext[j].style.transition = 'background-color 500ms linear';
        tasktext[j].style['background-color'] = 'var(--green)';
        tasktext[j].style.color = 'var(--white)';
        completeButtons[j].style.display = 'none';
    })
}




