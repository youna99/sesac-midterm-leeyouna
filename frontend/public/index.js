// get("https://jsonplaceholder.typicode.com/todos").then((res) => {
//     console.log(res);
// })

// function getTodos() {
    
// }

// window.addEventListener("DOMContentLoaded", (event) => {
//     getTodos()
//   });

const btn = document.getElementById('btn');         //버튼
let addValue = document.getElementById('addValue'); //할일 입력
let result = document.getElementById('result');    //추가된 할일

function addTodo() {
    let list = document.createElement("li");
    let del = document.createElement('button');
    list.innerHTML = addValue.value;
    result.appendChild(list); //추가된 할일에 할일 리스트 추가하기
    list.appendChild(del);    //할일 리스트 추가시 삭제버튼도 추가    
    del.innerText = "x";      //삭제버튼에 들어갈 'x'자 문자
    // del.style.fontSize = "20px";
    // del.style.border = "none";
    // del.style.float = "right";
    // del.style.right = "17px";
    // del.style.marginTop = "10px";
    // del.style.cursor = "pointer";
    del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트지우기 이벤트 실행
    // del.style.position='relative';
}