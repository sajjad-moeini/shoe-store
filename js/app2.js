import { productTypes } from "./productsInform.js"
import { sportCompanys } from "./productsInform.js"
import { productsAdresses } from "./productsInform.js"
import { allProduct } from "./productsInform.js"
import { modalLoader } from "./productModal.js"
const $ = document
let content = $.querySelector('#content')
let homeLink = $.querySelector('.home-link-menu')
let productsLink = $.querySelector('.products-link-menu')
let headerMenu = $.querySelector('#headerMenuDropDown')
let navBar = $.querySelector('#myMainNav')
let innerNav = $.querySelector('.navbar-collapse')
let navLinks = $.querySelectorAll('.nav-link')
let registerationLink = $.querySelector('#registerationLink')
let col

function colCalc() {
    if (window.innerWidth > 1200 || window.innerWidth == 1200) {
        col = 6
    } else if (window.innerWidth > 992 || window.innerWidth == 992) {
        col = 3
    } else if (window.innerWidth > 768 || window.innerWidth == 768) {
        col = 2
    } else if (window.innerWidth < 768) {
        col = 1
    }
}

window.onload = () => { colCalc() }
window.onresize = () => colCalc()





productsLink.addEventListener('click', () => {
    DropDownGenrator(productTypes)
    
})
function DropDownGenrator(data) {
    let TypeFrangment = document.createDocumentFragment()

    data.forEach((product) => {

        let li = document.createElement('li')
        li.innerHTML = ` <a class="dropdown-item" href="#" data-name="${product.Type}" data-count="${product.count}" >${product.Type}
                                    <span class="badge p-2 me-2 mt-1 ms-3 bg-info rounded-pill text-center">${product.count}</span>
                                </a>`

        if (product.Type !== 'Sport') {
            li.addEventListener('click', (e) => {
                let name = e.target.dataset.name.toLowerCase()
                let count = e.target.dataset.count.toLowerCase()
                showProducts(productsAdresses, name, count, col)
                paginationAllProduct(productsAdresses, name, count, col)
                innerNav.classList.toggle('show')
                if(product.Type.toLocaleLowerCase() == 'home'){
                    homeLoader()
                }
            
            })

        } else {
            li.addEventListener('click', (e) => {
                showSportCompany(sportCompanys)
                innerNav.classList.toggle('show')
            })
        }



        TypeFrangment.appendChild(li)

    })
    headerMenu.innerHTML = ''
    headerMenu.append(TypeFrangment)

}



function showSportCompany(Companys) {
    let btnContainer = document.createElement('div')
    btnContainer.className = 'w-75 m-auto mt-5'
    let btnInnerContainer = document.createElement('div')
    btnInnerContainer.className = 'd-flex flex-column flex-md-row justify-content-md-between align-content-center'
    btnContainer.append(btnInnerContainer)
    let i = 0
    Companys.forEach((company) => {
        let count = company.count
        let name = company.name
        let btn = document.createElement('button')
        btn.className = 'btn col sport-companyBtn'
        btn.innerHTML = name.toUpperCase()
        btn.addEventListener('click', () => {
            showProducts(productsAdresses, name, count, col)
            paginationAllProduct(productsAdresses, name, count, col)
        })
        btnInnerContainer.append(btn)
        i++
    })

    content.innerHTML = ''
    content.append(btnContainer)
}

let paginationNav

function paginationAllProduct(productsAdresses, name, count, col) {
    let allProductPaginationContainer = document.createElement('div')
    allProductPaginationContainer.className = 'row allProductPagination'
    

    allProduct.forEach(product => {

        let btn = document.createElement('button')
        btn.className = 'col btn p-2 text-capitalize'
        btn.innerHTML = product.Type
        allProductPaginationContainer.append(btn)
       

        if(product.Type.toLocaleLowerCase() == name){
            btn.classList.add('allProductPaginationBtnSelect')
        }

        btn.addEventListener('click',(btnn)=>{
            
            allProductPaginationContainer.querySelectorAll('button').forEach(butn=>{
              if(butn.classList.contains('allProductPaginationBtnSelect')){
                butn.classList.remove('allProductPaginationBtnSelect')
              }
                
              
            })
            
            btnn.target.classList.add('allProductPaginationBtnSelect')
            showProducts(productsAdresses,btn.innerHTML.toLocaleLowerCase(), count, col)
        })
     
    })

    
    paginationNav  =allProductPaginationContainer

    navBar.classList.add('h-6vh')
    document.body.append(allProductPaginationContainer)
}




function showProducts(infoContainer, productsName, ProductCount, col) {
   
    let CarouselItemCount = Math.ceil(ProductCount / (col * 2))
    let allPrInfArry = Object.entries(infoContainer)

    let selectedItem = allPrInfArry.filter(product => {

        return product[1].name.toLocaleLowerCase() == productsName
    })

    let orderedPrInfo = selectedItem[0][1]



    let picAllAdress = caroselItemPicGenrator(productsName, orderedPrInfo)

    let carouselPicSeprated = caroselItemGenrator(CarouselItemCount, col, productsName, picAllAdress[0])

    let carouselItemCodes = itemCodesGenrator(carouselPicSeprated, productsName, picAllAdress[1])

    carouselGenrator(carouselItemCodes)

   
}

function caroselItemPicGenrator(productsName, orderedPrInfo) {
    let prAllMainPicAd = []
    let productAllPics = []
    let prAllPicAdress = Object.entries(orderedPrInfo)[2][1]
    let prAllPicsArray = Object.entries(prAllPicAdress)
    prAllPicsArray.forEach(product => {
        let ad = 'pics/' + productsName + '/' + product[0] + '/' + product[1].mainPic
        productAllPics.push(product[1].allPics)
        prAllMainPicAd.push(ad)
    })

    return [prAllMainPicAd, productAllPics]
}
function caroselItemGenrator(CarouselItemCount, col, productsName, picAllAdress) {

    let sepratePicsForItems = []
    let z = 0
    let q = 1

    for (let i = 0; i < CarouselItemCount; i++) {
        sepratePicsForItems.push(picAllAdress.slice(z, (q * col * 2)))
        z = z + (col * 2)
        q++
    }

    return sepratePicsForItems


}

function itemCodesGenrator(sepratePicsForItems, productsName, productAllPic) {

    let productItemsFragment = document.createDocumentFragment()
    let i = 1
    let c = 0
    sepratePicsForItems.forEach(itemPics => {
        let carouselItem = document.createElement('div')
        carouselItem.className = 'carousel-item  w-100 h-100'
        if (i == 1) { carouselItem.classList.add('active') }

        let itemInnerContainer = document.createElement('div')
        itemInnerContainer.className = 'row justify-content-center align-content-center h-100 w-100'
        carouselItem.append(itemInnerContainer)


        itemPics.forEach(item => {
            let allPic = productAllPic[c]
            c++
            let cardContainer = document.createElement('div')
            cardContainer.className = 'col-sm-6 col-md-3 col-lg-2 p-1  h-50'
            cardContainer.insertAdjacentHTML('beforeend', `
<div class="card h-100 w-100 overflow-hidden">
<div class="card-header p-2">
    <h5 class="card-title">${productsName.toUpperCase() + c}</h5>
</div>
<div class="card-body" >
    <img src="${item}" class="img-fluid w-100 h-100" alt="">
</div>
<div class="card-footer p-3 d-flex justify-content-between align-content-center">
    <h5 class="card-title mt-2">$7</h5>
    <button type=""button href="#" class="btn productBtn">See More</button>
</div>
</div>

`)
            let cardBtn = cardContainer.querySelector('.productBtn')


            let x = c
            cardBtn.addEventListener('click', () => {

                showProductInfo(allPic, productsName, x)
            })
            itemInnerContainer.append(cardContainer)

        })
        i++
        productItemsFragment.append(carouselItem)
    })

    return productItemsFragment


}



function carouselGenrator(itemFrg) {

    let carouselContainer = document.createElement('div')
    carouselContainer.className = 'product-container'
    carouselContainer.insertAdjacentHTML('beforeend', `
<div class="carousel slide carousel-fade h-100 w-100 " id="products-carousel" data-bs-ride="carousel">

                <div class="carousel-inner">
                    
                </div>

                <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#products-carousel">
                    <span class="carousel-control-next-icon"></span>
                </button>
                <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#products-carousel">
                    <span class="carousel-control-prev-icon"></span>
                </button>

            </div>
`)
    carouselContainer.querySelector('.carousel-inner').append(itemFrg)

    content.innerHTML = ''
    content.append(carouselContainer)
   


}


function showProductInfo(allPic, name, productNum) {

    let modalCarouItem = Math.ceil(allPic.length / 4)
    let modalFrg = modalGenForProduct(modalCarouItem, allPic, name, productNum)
    content.append(modalFrg)
    modalLoader()
}

function modalGenForProduct(carouselItemCount, pics, name, productNum) {
    let sepImgsForModal = modalPicGen(carouselItemCount, pics)
    let modalFrg = modalItemGen(sepImgsForModal, name, productNum)

    return modalFrg
}

function modalPicGen(carouselItemCount, pics) {
    let x = 0
    let sepPicForModal = []
    for (let i = 0; i < carouselItemCount; i++) {
        sepPicForModal.push(pics.slice(x, x + 4))
        x = x + 4
    }
    return sepPicForModal
}


function modalItemGen(pics, name, productNum) {
    let allPicAD = pics[0]
    let modalFrg = productModalGen(allPicAD, name, productNum)
    return modalFrg
}

function productModalGen(allPicAD, name, productNum) {
    let modalFrg = document.createDocumentFragment()
    let picsSection = modalPicCodeGen(allPicAD, name, productNum)

    let mainProducrPicContainer = document.createElement('div')
    mainProducrPicContainer.append(picsSection)



    let modalContainer = document.createElement('div')
    modalContainer.className = 'productBox'
    modalContainer.id = 'productInfoBox'

    modalContainer.insertAdjacentHTML('beforeend', `
<div class="productBox-Header d-flex justify-content-between ps-5 pt-3">
<div class="h1 text-light text-capitalize">${name + productNum}</div>
<button class=" btn-close pe-5 fs-3 modalCloseBtn"></button>

</div>
<div class="info p-5">
<div class="h2 text-capitalize text-light">something about ${name + productNum}</div>
<p class="text-light px-5 pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum distinctio
    illum repellat, explicabo, assumenda officiis quibusdam soluta eius repellendus quos nisi
    exercitationem laudantium natus id voluptatibus doloremque corporis voluptatem doloribus! Lorem,
    ipsum dolor sit amet consectetur adipisicing elit. Totam aut dolorum quisquam, hic autem sint.</p>
</div>
<div class="productBox-body">
<div class="row w-100 h-100 allbody">
    ${mainProducrPicContainer.innerHTML}

    <div class="col col-md-6 product-size-box">
        <div class="h2 text-light text-capitalize pt-4 ps-5">select sizes : </div>
        <table class="table sizeTable">
            <tr class="border-0">
                <td><button class="btn sizezBtn">32</button></td>
                <td><button class="btn sizezBtn">33</button></td>
                <td><button class="btn sizezBtn">34</button></td>
                <td><button class="btn sizezBtn">35</button></td>
                <td><button class="btn sizezBtn">36</button></td>
                <td><button class="btn sizezBtn">37</button></td>
                <td><button class="btn sizezBtn">38</button></td>
            </tr>
            <tr class="border-0">
                <td><button class="btn sizezBtn">39</button></td>
                <td><button class="btn sizezBtn">40</button></td>
                <td><button class="btn sizezBtn">41</button></td>
                <td><button class="btn sizezBtn">42</button></td>
                <td><button class="btn sizezBtn">43</button></td>
                <td><button class="btn sizezBtn">44</button></td>
                <td><button class="btn sizezBtn">45</button></td>
            </tr>
        </table>

        <div class="selectedProduct mt-5">
            <div class="selectedProductBtnBox p-3 w-75 mx-auto row " data-flg = '0' >

            </div>
            <div class="h5 text-light ps-4 totalPrice">Total Price :</div>
        </div>


    </div>
</div>
</div>
<div class="mymodal-btn">
<button class="btn btn-danger closeBtn">Close</button>
<button class="btn btn-success addBtn addBtnAnim">Add To Card</button>


</div>
`)



    modalFrg.append(modalContainer)

    return modalFrg

}

function modalPicCodeGen(allPicAD, name, productNum) {

    let allPicContainer = document.createElement('div')
    allPicContainer.className = 'col col-md-6'


    let mainPicSrc = `pics/${name}/${productNum}/${allPicAD[0]}`
    let smPicsSmContainer = document.createElement('div')
    smPicsSmContainer.className = 'row h-100 w-100'
    let smPicsMainContainer = document.createElement('div')
    smPicsMainContainer.className = 'row w-100 h-25 overflow-hidden'

    let mainPicContainer = document.createElement('div')
    mainPicContainer.className = 'row h-75 w-100 pb-1 '
    mainPicContainer.insertAdjacentHTML('beforeend', `
<img src="${mainPicSrc}"
        class="img-fluid w-100 h-100 object-fit-cover mainPicProduct" alt="">
`)




    allPicAD.forEach(pic => {



        let eachPicContainer = document.createElement('div')
        eachPicContainer.className = 'h-100 col-3'
        eachPicContainer.insertAdjacentHTML('beforeend', `
    <img src="pics/${name}/${productNum}/${pic}" alt=""
    class="img-fluid h-100 smPic">
    `)
        smPicsSmContainer.append(eachPicContainer)
    })


    smPicsMainContainer.insertAdjacentHTML('beforeend', `
<div class="row h-100">
<div class=" h-100 w-100 allsmpic "></div>
</div>
`)
    smPicsMainContainer.querySelector('.allsmpic').append(smPicsSmContainer)
    allPicContainer.append(mainPicContainer)
    allPicContainer.append(smPicsMainContainer)

    return allPicContainer

}

homeLink.addEventListener('click', e => {
    homeLoader()
})

function homeLoader(){
    content.innerHTML = ''
    content.innerHTML = ` <div class="wellcomeTitle ">

<div class="h1 wellcomeTitle-text">WellCome</div>
<div class="h1 wellcomeTitle-text">to</div>
<div class="h1 wellcomeTitle-text">Rad Shoe Store</div>
<div class="justify-content-center align-content-center"></div>
</div>`

console.log(navBar)
navBar.classList.remove('h-6vh')
if(paginationNav){

    paginationNav.remove()
}
}

navLinks.forEach(link=>{
    let name = link.innerHTML.trim()
    if((name !== 'Products') && (name !== 'Login/Sign UP')){
       link.addEventListener('click',()=>{
        innerNav.classList.toggle('show')
       })
    }
})



registerationLink.addEventListener('click',event=>{
    event.preventDefault()
    createReisterPage()
    innerNav.classList.toggle('show')
})

function createReisterPage(){
        let registerPage = document.createElement('div')
    registerPage.className='register'
    registerPage.innerHTML = `
    <div class="row registerHeader">
    <div class="col-md-2
    order-md-2 closeBtnRegisterCon ">
    <button class="btn-close me-3 fs-5  closeBtnRegister mt-2 "></button>
    </div>
    <div class="  col-md-10 h5 text-capitalize rigisterPageTitle d-flex align-items-center text-light ps-4">please enter your information to join us</div>
    
</div>
 <div class="row formContainer mt-2">
    <div  class="form-control p-3">
        <input type="text" placeholder="Fname" class="form-control p-2">
        <input type="text" placeholder="Lname" class="form-control mt-3 p-2">

        <label for="birthdayElem :" class="mt-3 form-label">Birthday :</label>
        <input type="date" id="birthdayElem"  class="form-control p-2">
        <input type="email" placeholder="Email"  class="form-control mt-3 p-2">
        <input type="password" placeholder="Password"  class="form-control mt-3 p-2" id="passwordElem" minlength="8">
        <span class="form-text" id="passwordElemControl">must be more than 8 char</span>

        <button class="btn btn-primary d-block mt-4 ms-auto p-1">Register</button>

    </div>
 </div>
   
    `

    content.innerHTML = ''
    content.append(registerPage)

    let passwordElem = registerPage.querySelector('#passwordElem')
    let closeBtnRegister = registerPage.querySelector('.closeBtnRegister')
let passwordElemControl = registerPage.querySelector('#passwordElemControl')
    
        passwordElem.addEventListener('input',()=>{
            if(passwordElem.value.length < 8 || passwordElem.value.length == 8){
                passwordElemControl.classList.add('text-danger')
            }else{
                passwordElemControl.classList.remove('text-danger')
                passwordElemControl.classList.add('text-success')
            }
        })
        
        closeBtnRegister.addEventListener('click',()=>{
            registerPage.remove()
            homeLoader()
        })
    
}




