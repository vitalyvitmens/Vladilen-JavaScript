//! innerHTML
const bodyInnerHTML = document.querySelector('body')
bodyInnerHTML.innerHTML = `
<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">Подтвердить</button>
</form> 
</br>
`

//! document.createElement()
const body = document.querySelector('body')

const form = document.createElement('form')
form.className = 'create-user-form'
body.append(form)

const label1 = document.createElement('label')
label1.textContent = ' Имя '
form.prepend(label1)

const input1 = document.createElement('input')
input1.type = 'text'
input1.name = 'userName'
input1.placeholder = 'Введите ваше имя'
label1.append(input1)

const label2 = document.createElement('label')
label2.textContent = ' Пароль '
form.append(label2)

const input2 = document.createElement('input')
input2.type = 'password'
input2.name = 'password'
input2.placeholder = 'Придумайте Пароль'
label2.append(input2)

const button = document.createElement('button')
button.type = 'submit'
button.textContent = 'Подтвердить'
form.append(button)
