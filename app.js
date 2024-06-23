let listContainer = document.getElementById('list-container')
let inputBox = document.getElementById('input-box')
function addTask(){
    if(inputBox.value===''){
        alert('Add your Task')
    }
    else{
        let item = document.createElement('li')
        item.textContent = inputBox.value
        let span = document.createElement('span')
        span.textContent = '\u00d7'
        item.appendChild(span)
        listContainer.appendChild(item)
        
    }
    inputBox.value = ""
    saveData()
}
listContainer.addEventListener('click',(el)=>{
    if(el.target.tagName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tagName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("tasks",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("tasks")
}

showData()