let btnDOM = document.querySelector("#liveToastBtn")

let ulDOM = document.querySelector("#list")

let allLiDOM = document.querySelectorAll("li");

let todoList = []

setLocalStorage()

let closeButton = `<button 
onclick="removeElement(parentNode)" 
style="padding: 13px;" type="button" 
class="close" 
data-dismiss="toast"
aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`

var id = 0
function newElement(event) {

    let taskInputDOM = document.querySelector('#task')
    let checkEmptyResult = checkEmpty(taskInputDOM.value)
    console.log(checkEmptyResult)

    if (checkEmptyResult == true) {
        id++
        const liDOM = document.createElement("li")
        liDOM.innerHTML = `${taskInputDOM.value}${closeButton}`
        liDOM.setAttribute("id", id)
        liDOM.addEventListener("click", markElement)
        ulDOM.appendChild(liDOM)

        setLocalStorage(taskInputDOM.value)
        $(".success").toast('show')
        taskInputDOM.value = ""


        // liDOM.addEventListener("click", markElement)
        // const allList = document.querySelector("#list")
        // console.log(allList)
    } else {
        console.log("boş değer giremezsiniz")
        $(".error").toast('show')
    }
}


function checkEmpty (input) {
    if (!input || !input.trim()) {
        return false
    } else {
        return true
    }
}

function removeElement(parentNode) {
    parentNode.remove();
    $(".remove").toast('show')
    
}


function markElement() {
    this.classList.toggle("checked");
    // console.log("list item id :", event)
    // console.log(this.classList)
    // event.srcElement.classList.toggle("checked")
    // this.classList.add("checked");
}

function setArray()  {
    if (localStorage.getItem("todoList") == null){
        todoList = []
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"))
    }
}

function setLocalStorage(input) {
    input == null ?  setArray() : todoList.push(input)
    localStorage.setItem("todoList", JSON.stringify(todoList))
}