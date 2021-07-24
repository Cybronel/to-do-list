
var addButton = document.querySelector('button')
var inputField = document.querySelector('input')
var list = document.querySelector('ul')

addButton.addEventListener('click', function() {

    var taskContainer = document.createElement('li')
    taskContainer.className = 'task-container'
    list.appendChild(taskContainer)
    var taskText = document.createElement('p')
    taskText.className = 'task'
    taskText.textContent = inputField.value
    taskContainer.appendChild(taskText)
    var taskActions = document.createElement('div')
    taskActions.className = 'task-actions'
    taskContainer.appendChild(taskActions)
    var removeBtn = document.createElement('div')
    removeBtn.className = 'remove-task'
    var removeImg = document.createElement('img')
    removeImg.className = 'icon'
    removeImg.setAttribute('src', 'icons/close.svg')
    var doneBtn = document.createElement('div')
    doneBtn.className = 'complete-task'
    var doneImg = document.createElement('img')
    doneImg.className = 'icon icon2'
    doneImg.setAttribute('src', 'icons/done.svg')
    taskActions.appendChild(removeBtn)
    taskActions.appendChild(doneBtn)
    removeBtn.appendChild(removeImg)
    doneBtn.appendChild(doneImg)
    inputField.value = ""

    var removeButtons = document.querySelectorAll(".remove-task")
    var completeButtons = document.querySelectorAll('.complete-task')
    var tasks = document.querySelectorAll('.task-container')
    var tasktext = document.querySelectorAll('.task')

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
})



