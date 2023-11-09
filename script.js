const addDivWork = () => {
    const div = document.createElement('div')
    div.innerText = 'Работа с DOM'
    document.body.prepend(div)
}

const addLinkToMain = () => {
    const main = document.getElementById('main')
    const a = document.createElement('a')
    a.href = 'https://learn.javascript.ru/dom-nodes'
    a.innerText = 'DOM'
    a.target = '_blank'
    main.append(a)
}

const changeBackgroundColor = color => {
    document.body.style.backgroundColor = color
}

const addLi = text => {
    const li = document.createElement('li')
    li.innerText = text
    const list = document.getElementById('list')
    list.append(li)
}

const removeCopyrightDiv = () => {
    const copyrightDiv = document.getElementById('copyright')
    copyrightDiv.remove()
}