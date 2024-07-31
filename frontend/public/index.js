async function getTodos() {
    try {
        const res = await axios ({
            method: 'get',
            url: "https://jsonplaceholder.typicode.com/todos"
        })
        console.log(res.data);
        let list = res.data.slice(0, 10);
        const newLi = document.createElement('li');
    } catch (error) {
        console.error(error);
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    getTodos()
  });

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

// function keyCodeCheck () { // 엔터키로 추가
// 	if(window.event.keyCode === 13 && addValue.value !== ''){
//         addTodo();
//     }
// }

// btn.addEventListener('click', () => { // + 버튼으로 추가
//     if(addValue.value !== ''){ // 빈 값 입력 방지
//         addTodo();
//     }
// })

// function addTodo() {
//     let list = document.createElement("li");
//     let del = document.createElement('button');
//     list.innerHTML = addValue.value;
//     result.appendChild(list); 
//     list.appendChild(del);      
//     del.innerText = "x";      
//     addValue.value = null
//     del.addEventListener("click", deleteList);
//     list.addEventListener('click', function() {
//         list.style.textDecoration = "line-through";
//         list.style.color = "gray";
//     })
// }

const addBtn = document.querySelector('#addBtn');

function keyCodeCheck (event) {
	if(document.event.keyCode === 13 && todoInput.value !== ''){
        addTodo();
    }
}

addBtn.addEventListener('click', () => {
    if(todoInput.value !== ''){
        addTodo();
    }
})

function addTodo () { // 할 일 추가 기능
	const todoList = document.querySelector('#todoList');
	const newLi = document.createElement('li'); // li 생성
    const newBtn = document.createElement('button'); // button 생성
	const newSpan = document.createElement('span'); // span 생성
	const todoInput = document.querySelector('#todoInput');
    let del = document.createElement('button');
    newLi.appendChild(del);
    del.innerText = "x";
    del.addEventListener("click", deleteList);
      
    newLi.appendChild(newBtn); // li안에 button 담기
	newLi.appendChild(newSpan); // li안에 span 담기
      
	newSpan.textContent = todoInput.value;
      
	todoList.appendChild(newLi);
      
	todoInput.value = '';
  
	newBtn.addEventListener('click', () => { // 체크박스 클릭시 완료 표시
		newLi.classList.toggle('complete');
    });
}

function deleteList(e){
    let removeOne = e.target.parentElement;
    removeOne.remove();
}