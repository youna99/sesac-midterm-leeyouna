async function getTodos() {
    try {
        const res = await axios ({
            method: 'get',
            url: "https://jsonplaceholder.typicode.com/todos"
        })
        console.log(res.data);
        // let list = res.data.slice(0, 10);
        let arr = res.data;
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