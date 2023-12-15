// todo eleman ekleme


// eleman secimi 

 const form = document.querySelector("form");
 const input = document.querySelector("#txtTaskName");
 const btnAddNewTask = document.querySelector("#btnAddNewTask");
 const btnDeleteAll = document.querySelector("#btnDeleteAll");
 const taskList = document.querySelector("#task-list");
 let todos ;






// load items
loadItems();




eventListeners();

function eventListeners() {
    // submit event 

    form.addEventListener("submit", AddNewItem);
    // delete an item 
    taskList.addEventListener("click", deleteItem);
    //  delete all item
    btnDeleteAll.addEventListener("click", deleteAllItem);




}

function loadItems() {
    todos = getItemsFromLS();
    todos.forEach(function (item) {
        creatItem(item);
    })


}
// getitemsfromls get items from local strorage

function getItemsFromLS() {
    if (localStorage.getItem("todos") === null){
        todos = [];
    }

    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;


}
// set item to local stroge

function setItemtoLS(newtodo) {
    todos = getItemsFromLS();
    todos.push(newtodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function creatItem(newtodo) {

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";

    li.appendChild(document.createTextNode(newtodo));

    // a olusturmak

    const a = document.createElement("a");

    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';


    li.appendChild(a);

    taskList.appendChild(li);
}




function AddNewItem(e) {


    if (input.value === '') {
        alert("add new item");
        //  console.log("submit");
    }

    // create item

    creatItem(input.value);
    setItemtoLS(input.value);




    input.value = "";

    e.preventDefault();




}

// Eleman Silme

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("silmek istediginize emin misiniz ?")) {
            //     console.log(e,target);
            e.target.parentElement.parentElement.remove();
        }


    }

    e.preventDefault();
}


// Tum elemanlari silmek

function deleteAllItem(e) {

    if (confirm("silmek istediginize eminmisiniz")) {
        taskList.childNodes.forEach(function (item) {
            // console.log(item);
            if (item.nodeType === 1) {
                item.remove();
            }
        })

    }

    // taskList.innerHTML="";

}



// //  burdan sonraki yapilan yazilimlar kendime ait deneme alistirma 


// //todo eleman ekleme


// // eleman secimi 

// const form = document.querySelector("form");
// const input = document.querySelector("#txtTaskName");
// const btnAddNewTask = document.querySelector("#btnAddNewTask");
// const btnDeleteAll = document.querySelector("#btnDeleteAll");
// const tasklist = document.querySelector("#task-list");
// let todos;

// // load items

// loadItems();




// eventListeners();

// function eventListeners() {
//     // submit event 

//     form.addEventListener("submit", AddNewItem);
//     // delete an item 
//     tasklist.addEventListener("click", deleteItem);
//     //  delete all item
//     btnDeleteAll.addEventListener("click", deleteAllItem);




// }

// function loadItems() {
//     todos = getItemsFromLS();
//     todos.forEach(function (item) {
//         creatItem(item);
//     })


// }

// // get items from local storage
// function getItemsFromLS() {
//     if (localStorage.getItem("todos") === null) {
//         todos = [];

//     }
//     else (todos = JSON.parse(localStorage.getItem("todos")));

//     return todos;

// }

// // set items to local storage 

// function setItemsToLS(newtodo) {
//     todos = getItemsFromLS();
//     todos.push(newtodo);
//     localStorage.setItem("todos", JSON.stringify(todos));

// }


// function creatItem(newtodo) {

//     const li = document.createElement("li");
//     li.className = "list-group-item list-group-item-secondary";

//     li.appendChild(document.createTextNode(newtodo));

//     // a olusturmak

//     const a = document.createElement("a");

//     a.classList = "delete-item float-right";
//     a.setAttribute("href", "#");
//     a.innerHTML = '<i class="fas fa-times"></i>';


//     li.appendChild(a);

//     tasklist.appendChild(li);
// }




// function AddNewItem(e) {


//     if (input.value === '') {
//         alert("add new item");
//         //  console.log("submit");
//     }

//     // create item

//     creatItem(input.value);

//     setItemsToLS(input.value);


//     input.value = '';

//     e.preventDefault();




// }

// Eleman Silme

function deleteItem(e) {

    if (e.target.className === "fas fa-times") {
        if (confirm("silmek istediginize emin misiniz ?")) {
            //     console.log(e,target);
            e.target.parentElement.parentElement.remove();
deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }


    }

    e.preventDefault();
}

function deleteTodoFromStorage (deletodo){
let todos = getItemsFromLS();
todos.forEach(function(todo,index){
    if(todo=== deletodo){
        todos.splice(index, 1);

    }
})
localStorage.setItem("todos",JSON.stringify());


}


// Tum elemanlari silmek

function deleteAllItem(e) {

    if (confirm("silmek istediginize eminmisiniz")) {
        while(tasklist.firstChild){
            tasklist.removeChild(tasklist.firstChild);
        }
    }
      
    localStorage.clear();
       


    // tasklist.innerHTML="";

}






