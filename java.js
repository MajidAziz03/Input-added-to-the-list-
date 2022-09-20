const btn = document.querySelector('button')

const input = document.querySelector('input')
const ul = document.querySelector('ul')

btn.addEventListener('click', ()=> {
    const li = document.createElement('li')
    li.innerHTML = input.value;
    ul.append(li);

})

const btn2 = document.querySelector('#btnConti')
const market = document.querySelector('market')
const forNew = document.querySelector('forNew')


btn2.addEventListener('click', () => {
forNew.classList.contains('forNew')
forNew.classList.add('market')
    
})
