//console.log( document )

// getElementById
// getElementsByClassName
// querySelector
// querySelectorAll

// let elem = document.getElementById('title1')
// let elem = document.querySelector('#title1')

// // elem.style.color = 'yellow';
// // elem.style.marginLeft = '80px'

// elem.classList.add('myClass')
// elem.classList.add('myClass1')
// elem.classList.add('myClass3')

// elem.classList.remove('myClass')

// let para = document.querySelectorAll('p')

// console.log(para)

// para.forEach((elem) => {
//     // elem.innerHTML = 'Hey I\'m Manish'
//     // elem.innerHTML = `<button>Submit</button>`
//     console.log(elem.innerText)
//     elem.style.color = 'blue'
//     elem.innerHTML = elem.innerHTML.toUpperCase()
// })

// querySelector always fetches the first matching element

// querySelectorAll  fetches all  the matching elements


// elem2.forEach(() => {
//     console.log('Hello')
// })


// --------------Activity -----------------

// 1: Get the node with the  main title

//let mainTitle = document.querySelector('h1')
//console.log(mainTitle)

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

//console.log( mainTitle.innerText )

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

  //let fruitList = document.getElementsByClassName('fruit-item')  
  //console.log(fruitList)  

// => HTMLCollection(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text

    //forEach
    // map
    // reduce etc . . . .
    //NodeList - Data type Symbol

    // Array
    // let fruits = document.querySelector('.fruits')
    // console.log(fruits.innerText)
    // let veggieList = document.querySelectorAll('.veggie-item')
    // let veggieListStr = veggieList.for((elem) => {
    //     return elem.innerText
    // })
    // console.log(veggieListStr)
    // let veggieListStr = ''
    // veggieList.forEach((elem) => {
    //     veggieListStr += elem.innerText + ' '
    // })
    // console.log(veggieListStr)

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Get the subtitle in the veggies section

//let subtitle = document.querySelector('.list-veggies h2')
//console.log(subtitle.textContent) // innerText
// => Veggies
// ----------------------------------------------

// 6: Add an ID 'fruit-title' to the first subtitle (in the Fruit section)

    // let title = document.querySelector('.list-fruits h2')
    // title.id = 'fruit-title'

// => fruit-title
// ----------------------------------------------

// 7: Add a class 'best-fruit' to the 1st and the 3rd fruit

// let allFruits = document.querySelectorAll('.fruit-item')

// allFruits.forEach((elem, index) => {
//     if (index == 0 || index == 2) {
//         elem.classList.add('best-fruit')
//     }
// })

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 8: Remove class 'veggies' from the unordered list of veggies

//let veggiesUL = document.querySelector('.veggies')
// veggiesUL.classList.remove('veggies')
// console.log(veggiesUL)

// => <ul>...</ul>
// ----------------------------------------------

// 9: Add a class 'veggie-love' to all the veggies

// let veggies = document.querySelectorAll('.veggie-item')

// veggies.forEach((elem) => {
//     elem.classList.add('veggie-love')
// })
// console.log(veggies)
// => <li class="veggie-item veggie-love">Broccoli</li> ...
// ----------------------------------------------

// 10: Remove class 'veggie-item' from 'spinach'

// veggies.forEach((elem) => {
//     console.log(typeof elem.innerText)
//     if (elem.innerText === 'Spinach ') {
//         elem.classList.remove('veggie-item')
//     }
    
// })

// => ... <li class="veggie-love">Spinach</li>



// event listeners 


// let title = document.querySelector('h1')


// title.addEventListener( 'mouseover', () => {
//     title.classList.add('blue-class')
//    //title.style.fontSize = '40px';
// })


// title.addEventListener( 'mouseout', () => {
//     title.classList.remove('blue-class')
//     title.innerHTML = 'Fruits and veggies'
// })

// title.addEventListener( 'click', () => {
//     title.innerHTML = 'Fruits and Pokemons'
//    //title.style.fontSize = '40px';
// })

const submitEventHandler = () => {
    let myForm = document.querySelector('#my-form')
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //console.log(event.target)
        let input = document.querySelector('#fruit-input')
        //console.log(input.value)
        let ul = document.querySelector('.fruits')
        // we need to add  <li class="fruit-item">Grapes</li>
        let li = document.createElement('li')
        li.setAttribute('name', 'Some random Name')
        console.log(li)
        li.removeAttribute('name')
        li.classList.add('fruit-item')
        li.innerHTML = `${input.value} <button class="delete-btn">Delete</button>`
        console.log(li)
        let deleteBtn = li.querySelector('.delete-btn')
        deleteBtn.addEventListener('click', (event) => {
            console.log('Delete clicked')
            let myLi = event.target.parentNode
            myLi.parentNode.removeChild(myLi)
        })
        // addingEventOnDelete(deleteBtn)
        ul.appendChild(li)
        input.value = ''
    })
}

// const addingEventOnDelete = (btnElem) => {
//     btnElem.addEventListener('click', (event) => {
//         console.log('Delete clicked')
//         let myLi = event.target.parentNode
//         myLi.parentNode.removeChild(myLi)
//     })
//     console.log(btnElem)
// }

const deleteBtnEventListener = () => {
    
    let deleteBtn = document.querySelectorAll('.delete-btn')
    console.log(deleteBtn)

    deleteBtn.forEach((elem) => {
        //addingEventOnDelete(elem)
        elem.addEventListener('click', (event) => {
            console.log('Delete clicked')
            let myLi = event.target.parentNode
            myLi.parentNode.removeChild(myLi)
        })
    })
}

window.addEventListener('load', () => {
    submitEventHandler();
    deleteBtnEventListener();
})











