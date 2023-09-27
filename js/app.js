import { productTypes } from "./productsInform.js"
import { sportCompanys } from "./productsInform.js"
import { productsAdresses } from "./productsInform.js"
const $ = document
let content = document.querySelector('#content')
let homeLink = $.querySelector('.home-link-menu')
let productsLink = $.querySelector('.products-link-menu')
let headerMenu = $.querySelector('#headerMenuDropDown')









function showSportCompanys() {
    
    let container = document.createElement('div')
    container.className = 'container'
    let innerContainer = document.createElement('div')
    innerContainer.className = 'd-flex justify-content-between mt-3 w-50 mx-auto'

    sportCompanys.forEach(company => {
        let sportBtn = document.createElement('button')
        sportBtn.className = 'btn btn-primary p-2 ms-2'
        sportBtn.setAttribute('onclick', 'showProducts()')
        sportBtn.setAttribute('id', 'companyNameBtn')
        sportBtn.innerHTML = company
        innerContainer.append(sportBtn)
        sportBtn.addEventListener('click',()=>{
            showProducts('4',company)
            
        })
    })
    
    container.append(innerContainer)
    content.innerHTML = ''
    content.append(container)
}




function DropDownGenrator(data) {
    let TypeFrangment = document.createDocumentFragment()

    data.forEach((product) => {
       
        let li = document.createElement('li')
        li.innerHTML = ` <a class="dropdown-item" href="#">${product.Type}
                                    <span class="badge mt-1 ms-3 bg-info rounded-pill text-center">${product.count}</span>
                                </a>`

        if (product.Type !== 'Sport') {
            
            li.addEventListener('click',()=>{
                console.log(product.Type.toLocaleLowerCase())
                
                showProducts(6,product.Type.toLocaleLowerCase())
            })
            
        } else {
            li.addEventListener('click',()=>{
                showSportCompanys()
            })
        }

        TypeFrangment.appendChild(li)

    })
    headerMenu.innerHTML = ''
    headerMenu.append(TypeFrangment)

}

productsLink.addEventListener('click', () => {
    DropDownGenrator(productTypes)
})


 function showProducts(col,name) {
    content.innerHTML=' '
    pageCountCalc(col, name)
}

function pageCountCalc(col, name) {
    let count = productTypes[0].count
    let pageCount = Math.ceil(count / (col * 2))

    let orderedProduct = productsAdresses.filter(product => {
        return product.name.toLocaleLowerCase() == name
    })
   
    getAdress(orderedProduct, col, pageCount, name)
}

function getAdress(orderedProduct, col, pageCount, name) {
    
    let adresses =  orderedProduct[0].addresses
    let price = orderedProduct[0].price
    let mainPicAdresses = []
    console.log(orderedProduct)

   
    for (let product in adresses) {
        let bgAdress = null
         bgAdress = adresses[product].mainPic
        mainPicAdresses.push([adresses[product].mainPic, product, bgAdress])
        
    }
   
    carouselItemGen(mainPicAdresses, col, pageCount, name, price)

}

function carouselItemGen(mainPicAdresses, col, pageCount, name, price) {




    for (let i = 1; i * (col * 2) < mainPicAdresses.length + 1 + (col * 2); i++) {

        let y = (col * 2)
        if ((y * (i - 1) + y) > mainPicAdresses.length) {
            let slicedProduct = mainPicAdresses.slice((i - 1) * (col * 2))
            ltemGen(slicedProduct, col * 2, pageCount, name, price, i)
        } else {
            let slicedProduct = mainPicAdresses.slice((i - 1) * (col * 2), (col * 2))
            ltemGen(slicedProduct, col * 2, pageCount, name, price, i)
        }


    }

   
}

let itemTransporter = document.createElement('div')
function ltemGen(array, pageItemCount, pageCount, name, price, circ) {
    let item = document.createElement('div')
    item.className = 'carousel-item w-100 h-100'
item.innerHTML = ''


    if (circ == 1) {
        item.classList.add('active')
    }
    let innerRowItem = document.createElement('div')
    innerRowItem.className = 'row  h-100 w-100 '
    item.append(innerRowItem)

    
    let allProductsForEachItem = ''
    array.forEach(inf => {
    


        allProductsForEachItem += `
 <div class=" col-sm-6 col-md-4 col-lg-2 p-1  h-50">
<div class="card h-100 w-100 overflow-hidden">
    <div class="card-header p-2">
        <h5 class="card-title">${name + inf[1]}</h5>
    </div>
    <div class="card-body" > 
    <img src="pics/${name}/${inf[1]}/${inf[2]}" class="img-fluid w-100 h-100" alt="">
    </div>
    <div class="card-footer p-3 d-flex justify-content-between align-content-center">
        <h5 class="card-title mt-2">$${price}</h5>
        <a href="#" class="btn productBtn">See More</a>
    </div>
</div>
</div>`

    })


    innerRowItem.insertAdjacentHTML('beforeend', allProductsForEachItem)

    itemTransporter.append(item)

    carouselGenrator(itemTransporter)
}

function carouselGenrator(item) {


    let carouselContainer = document.createElement('div')
    carouselContainer.className = 'product-container'
    carouselContainer.innerHTML=''
    carouselContainer.insertAdjacentHTML('beforeend', `
    <div class="carousel  slide carousel-fade h-100 w-100 " id="products-carousel" data-bs-ride="carousel">
                <div class="carousel-inner ">
                    ${item.innerHTML}
                </div>
                <button class="carousel-control-next " data-bs-slide="next" data-bs-target="#products-carousel">
                    <span class="carousel-control-next-icon"></span>
                </button>
                <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#products-carousel">
                    <span class="carousel-control-prev-icon"></span>
                </button>
            </div>
    `)

   
   

    content.appendChild(carouselContainer)
}



