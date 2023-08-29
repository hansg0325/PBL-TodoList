document.addEventListener('DOMContentLoaded', () => {
  const toDo = document.querySelector('#toDo')
  const addButton = document.querySelector('#addButton')
  const toDoList = document.querySelector('#toDoList')

  addButton.addEventListener('click', (event) => {
    const item = document.createElement('div') //영역 생성

    const checkBox = document.createElement('input') //체크박스생성
    checkBox.setAttribute('type', 'checkbox')

    const text = document.createElement('span') //span생성 후 toDo.value로 초기화
    text.textContent = toDo.value

    const removeButton = document.createElement('button') //삭제버튼 생성
    removeButton.textContent = '삭제'

    //삭제버튼 클릭 시  삭제
    removeButton.addEventListener('click', (event) => {
      event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
    })

    checkBox.addEventListener('change', (event) => {
      if(checkBox.checked){
        text.style.textDecorationLine = "line-through"
      }else{
        text.style.textDecorationLine = "none"
      }
    })

    item.appendChild(checkBox)
    item.appendChild(text)
    item.appendChild(removeButton)

    toDoList.appendChild(item)
    toDo.value = ''
  })
})