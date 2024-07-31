// get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//     console.log(res);
// })

// function getTodos() {
    
// }

// window.addEventListener("DOMContentLoaded", (event) => {
//     getTodos()
//   });

const btn = document.getElementById('btn');
let addValue = document.getElementById('addValue');
let result = document.getElementById('result');

// function addTodo () {
//     if(window.event.keyCode === 13){
//         let list = document.createElement("li");
//         let del = document.createElement('button');
//         list.innerHTML = addValue.value;
//         result.appendChild(list); //추가된 할일에 할일 리스트 추가하기
//         list.appendChild(del);    //할일 리스트 추가시 삭제버튼도 추가    
//         del.innerText = "x";      //삭제버튼에 들어갈 'x'자 문자
//         addValue.value = null
//         // del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
//     }
// }

function addTodo() {
    let list = document.createElement("li");
    let del = document.createElement('button');
    list.innerHTML = addValue.value;
    result.appendChild(list); 
    list.appendChild(del);      
    del.innerText = "x";      
    addValue.value = null
    del.addEventListener("click", deleteList);
    list.addEventListener('click', function() {
        list.style.textDecoration = "line-through";
        list.style.color = "gray";
    })
}

function deleteList(e){
    let removeOne = e.target.parentElement;
    removeOne.remove();
}