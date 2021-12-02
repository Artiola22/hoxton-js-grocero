// Deliverables
// - A user can view a selection of items in the store
// - From the store, a user can add an item to their cart
// - From the cart, a user can view and adjust the number of items in their cart
// - If an item's quantity equals zero it is removed from the cart
// - A user can view the current total in their cart

const state = {

  items: [{
      id: 1,
      name: "beetroot",
      price: 0.35,
      amount: 0

    },
    {
      id: 2,
      name: "carrot",
      price: 0.40,
      amount: 0
    },
    {
      id: 3,
      name: "apple",
      price: 1.60,
      amount: 0
    },
    {
      id: 4,
      name: "apricot",
      price: 2.00,
      amount: 0
    },
    {
      id: 5,
      name: "avocado",
      price: 4.00,
      amount: 0
    },
    {
      id: 6,
      name: "bananas",
      price: 1.35,
      amount: 0
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 3.35,
      amount: 0
    },
    {
      id: 8,
      name: "berry",
      price: 3.10,
      amount: 0
    },
    {
      id: 9,
      name: "blueberry",
      price: 3.20,
      amount: 0
    },
    {
      id: 10,
      name: "eggplant",
      price: 1.50,
      amount: 0
    }

  ],

  total: 0
}

console.log('state')

function addNewItems(item) {


  item.amount++

}

function removeItems(item) {
  item.amount--
}

function totalSum() {
  state.total = 0
  for (const item of state.items) {
    state.total += item.price * item.amount
  }
  const totalNumber = document.querySelector('.total-number')
  totalNumber.textContent = `£${state.total.toFixed(2)}`
}


function render() {
  renderStoreProduct()
  totalSum()
}
const itemsList = document.querySelector(`.item-list.store--item-list`)
const cartItemsList = document.querySelector(`.cart--item-list`)

function productOfStore(item) {


  const liEl = document.createElement('li')
  const divEl = document.createElement('div')
  divEl.setAttribute('class', 'store--item-icon')


  const imageEl = document.createElement('img')

  imageEl.setAttribute('src', `assets/icons/00${item.id}-${item.name}.svg`)
  imageEl.setAttribute('alt', `${item.name}`)

  const addButton = document.createElement('button')
  addButton.textContent = 'Add to cart'

  divEl.append(imageEl)
  liEl.append(divEl, addButton)

  itemsList.append(liEl)
  addButton.addEventListener('click', function () {
    addNewItems(item)
    render()
  })
}


function renderStoreProduct() {
  itemsList.innerHTML = ''
  cartItemsList.innerHTML = ''

  for (const item of state.items) {
    productOfStore(item)
    addItemsToCard(item)

  }
}


function addItemsToCard(item) {
  if (item.amount > 0) {

    const liEl = document.createElement('li')

    const imageEl = document.createElement('img')
    imageEl.setAttribute('class', 'cart--item-icon')
    imageEl.setAttribute('src', `assets/icons/00${item.id}-${item.name}.svg`)
    imageEl.setAttribute('alt', `${item.name}`)

    const pEl = document.createElement('p')
    pEl.textContent = item.name

    const removeButton = document.createElement('button')
    removeButton.setAttribute('class', 'quantity-btn remove-btn center')
    removeButton.textContent = `-`
    removeButton.addEventListener('click', function () {
      removeItems(item)
      render()
    })

    const spanEl = document.createElement('span')
    spanEl.setAttribute('class', 'quantity-text center')
    spanEl.textContent = item.amount


    const addButton = document.createElement('button')
    addButton.setAttribute('class', 'quantity-btn add-btn center')
    addButton.textContent = '+'
    addButton.addEventListener('click', function () {
      addNewItems(item)
      render()
    })


    liEl.append(imageEl, pEl, removeButton, spanEl, addButton)
    cartItemsList.append(liEl)
  }
}

render()