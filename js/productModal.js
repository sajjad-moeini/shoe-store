let shoeMmodelAndSizeSelected = []
function modalLoader() {
    let sizezBtns = document.querySelectorAll('.sizezBtn')
    let selectedProductBtnBox = document.querySelector('.selectedProductBtnBox')
    let totalPrice = document.querySelector('.totalPrice')
    let mainPic = document.querySelector('.mainPicProduct')
    let smallPics = document.querySelectorAll('.smPic')
    let addBtn = document.querySelector('.addBtn')
    let closeBtn = document.querySelector('.closeBtn')
    let modalCloseBtn = document.querySelector('.modalCloseBtn')
    let productBox = document.querySelector('.productBox')
    let content = document.querySelector('#content')
    let cartElem = document.querySelector('#shopping-cart')
    let cartBadge = document.querySelector('.cart-badge')
    let allProductPagination = document.querySelector('.allProductPagination')
    let navBar = document.querySelector('#myMainNav')


    modalCloseBtn.addEventListener('click', () => productBox.remove())
    closeBtn.addEventListener('click', () => productBox.remove())

    let btns = []

    sizezBtns.forEach(sizeBtn => {
        sizeBtn.addEventListener('click', (e) => {
            let size = e.target.innerText
            let choosenBtn = []
            sizeBtn.classList.toggle('confirmSize')


            if (sizeBtn.classList.contains('confirmSize') && !btns.includes(size)) {
                createChoosedBtn(size)
                addBtn.classList.add('addBtnChooseAnim')


                btns.push(size)
            } else {
                document.querySelectorAll('.selectedBtn').forEach(btn => {
                    if (btn.dataset.size == size) {
                        btn.remove()
                        addBtn.style.animation = 'addBtnAnim 1s alternate infinite;'
                    }


                    if (selectedProductBtnBox.querySelectorAll('.selectedBtn').length == 0) {
                        addBtn.classList.remove('addBtnChooseAnim')
                        addBtn.classList.add('addBtnAnim')
                    }
                })


                btns.forEach(btn => {
                    if (btn !== size) {
                        choosenBtn.push(btn)
                    }
                })

                btns = []
                btns = [...choosenBtn]

            }


        })


    })

    function createChoosedBtn(size) {
        let btn = document.createElement('button')
        btn.className = 'btn ms-4 selectedBtn'
        btn.dataset.size = size
        btn.insertAdjacentHTML('beforeend', `
    ${size}
                                  <span class="badge countBadge">
                                      <input type="number" class="form-control form-control-sm sizeCount"
                                      value="0"
                                      data-size="${size}"
                                      "
                                      >
                                      <span class="d-none productTotalPrice"></span>
                                  </span>
    `)

        let productPrice = btn.querySelector('.productTotalPrice')

        let inputElem = btn.querySelector('.sizeCount')
        inputElem.addEventListener('input', (event) => {
            calcTotalPrice(productPrice, event)
            inputElem.setAttribute('value', event.target.value)


        })


        selectedProductBtnBox.append(btn)
        selectedProductBtnBox.dataset.flg = 1



    }



    smallPics.forEach(pic => {
        pic.addEventListener('mouseenter', (e) => {
            let src = pic.getAttribute('src')
            mainPic.src = src
        })
    })






    function calcTotalPrice(productPrice, event) {

        productPrice.innerHTML = event.target.value * 7
        let priceSpan = selectedProductBtnBox.querySelectorAll('.productTotalPrice')
        let total = 0
        if (event.target.value > -1) {
            priceSpan.forEach(span => {

                let priceNum = Number(span.innerHTML)
                total += priceNum
            })
            totalPrice.innerHTML = 'Total Price : $' + total
        }

    }



    addBtn.addEventListener('click', (e) => {

        if(selectedProductBtnBox.childElementCount){
            cartInfoGetter()
            console.log(selectedProductBtnBox.hasChildNodes())

        }

        addProduct()

    })

    function addProduct() {
        let inputs = selectedProductBtnBox.querySelectorAll('.sizeCount')

        let inputFlg = true

        inputs.forEach(input => {
            if (input.value < 1) {
                inputFlg = false
                emptyCartAlert()
            }
        })

        if (selectedProductBtnBox.querySelectorAll('.selectedBtn').length !== 0) {



            if (Number(selectedProductBtnBox.dataset.flg) && inputFlg) {

                document.querySelector('.cart-badge').classList.add('d-flex')


                addBtn.classList.add('clickAddbtn')
                addBtn.innerHTML = 'Added'

                selectedProductBtnBox.innerHTML = ''
                btns = []

                sizezBtns.forEach(btn => {

                    if (btn.classList.contains('confirmSize')) {
                        btn.classList.remove('confirmSize')
                    }



                })

                totalPrice.innerHTML = ''


                let successAdded = document.createElement('div')
                successAdded.className = 'successAdded'
                successAdded.insertAdjacentHTML('beforeend', `
<div class="h1">Successfully Added :) </div>
    <button class="btn btn-success">Ok</button>
`)

                content.append(successAdded)

                successAdded.querySelector('button').addEventListener('click', (e) => {
                    addBtn.className = 'btn btn-success addBtn addBtnAnim'
                    addBtn.innerHTML = 'Add To Card'
                    successAdded.remove()
                    mainPic.src = smallPics[0].src

                    document.querySelector('.productBox').remove()

                })

            }
        } else {

            emptyCartAlert()
        }
    }









    function emptyCartAlert() {
        let emptyCartAlert = document.createElement('div')
        emptyCartAlert.className = 'emptyCart'
        emptyCartAlert.insertAdjacentHTML('beforeend', `
    <div class="emptyCardTexts">
<div class="h4 text-capitalize">you didn't choose any product</div>
<div class="h1">Or</div>
<div class="h4 text-capitalize">
    there is product with zero count
</div>
</div>
<button class="btn  emptyCartBtn">Close</button>
    `)
        emptyCartAlert.querySelector('.emptyCartBtn').addEventListener('click', () => emptyCartAlert.remove())
        content.append(emptyCartAlert)

    }

    let allCartP = []
    function cartInfoGetter() {
        let addFlg = true
      let inputs =  selectedProductBtnBox.querySelectorAll('.sizeCount')
      Array.from(inputs).map(input => {
            if (input.value == 0 || input.value < 0 || !selectedProductBtnBox.hasChildNodes() ) {
                addFlg = false
            }

        })
        if (addFlg) {
            shoeMmodelAndSizeSelected.push(selectedProductBtnBox)
           
            let productImgSrc = smallPics[0].getAttribute('src')
            let productName = productBox.querySelector('.productBox-Header').querySelector('.h1').innerHTML

            cartGenrator(productImgSrc, productName, shoeMmodelAndSizeSelected)
        }


    }


    function cartGenrator(productImgSrc, productName, shoeMmodelAndSizeSelected) {
        let cardFlg = true
        if (document.body.querySelector('.cart')) { cardFlg = false }

        if (cardFlg) {
            let cartContainer = document.createElement('div')
            cartContainer.className = 'cart'
            cartContainer.insertAdjacentHTML('beforeend', `
    <div class="h1 text-capitalize p-4 text-light">
    this is all you selected
    </div>
    <button class="btn-close closeCart"></button>
    <hr class="text-light">
    <div class="row cartInfoBar mt-3 ">
    <div class="h3 col-3 text-center text-light">Product</div>
    <div class="h3 col-6 text-center text-light">Size</div>
    <div class="h3 col-3 text-center text-light">Price</div>
    </div>
    <button class="btn btn-outline-primary purseBtn">Pay</button>
    <div class="h2 totalPriceCart"></h2>
    `)
            addPR(cartContainer)
        } else {
            let cartContainer = document.body.querySelector('.cart')
            addPR(cartContainer)
        }

        function addPR(cartContainer) {

            let orderedPr = document.createElement('div')
            orderedPr.className = 'selectedPr row'



            orderedPr.insertAdjacentHTML('beforeend', `
    <div class=" col-3 text-center text-light d-flex justify-content-start mt-3">
    <img src="${productImgSrc}" width="50vw" height="50vw" alt="" class="img-fluid ms-2">
    <div class="h5 align-self-center ms-2">
        ${productName}
    </div>
    </div>
    <div class=" col-6   mt-3 cartBtnContainer  d-flex "></div>
    <div class=" col-3 text-center text-light mt-3 thisTypePrice"></div>
    
    `)




            shoeMmodelAndSizeSelected.forEach(btn => {

                orderedPr.querySelector('.cartBtnContainer').innerHTML = btn.innerHTML

            })
            let priceElem = orderedPr.querySelector('.thisTypePrice')

            let sizes = orderedPr.querySelectorAll('.selectedBtn')
            let price = 0
            sizes.forEach(btn => {
                btn.addEventListener('click', () => {
                    btn.remove()

                    price -= btn.querySelector('.sizeCount').value * 7
                    calcPrice()
                    allCartP = []
                    calcAllPrice()


                    if (orderedPr.querySelector('.cartBtnContainer').childElementCount == 0) {
                        orderedPr.remove()

                    }

                })
                let btnInputElem = btn.querySelector('.sizeCount')
                btnInputElem.setAttribute('disabled', '')
                price += btnInputElem.value * 7

                calcPrice()

            })
            function calcPrice() {
                priceElem.innerHTML = '$' + price



            }

            function homeLoader() {
                content.innerHTML = ''
                content.innerHTML = ` <div class="wellcomeTitle ">
            
            <div class="h1 wellcomeTitle-text">WellCome</div>
            <div class="h1 wellcomeTitle-text">to</div>
            <div class="h1 wellcomeTitle-text">Rad Shoe Store</div>
            <div class="justify-content-center align-content-center"></div>
            </div>`

                if (allProductPagination) {
                    allProductPagination.remove()

                }
                navBar.classList.remove('h-6vh')

            }
            cartContainer.querySelector('.closeCart').addEventListener('click', () => {
                cartContainer.style.opacity = '0'
                cartContainer.style.zIndex = '0'
            })

            cartContainer.querySelector('.purseBtn').addEventListener('click', (e) => {
                cartContainer.remove()
                cartBadge.classList.toggle('d-flex')
                homeLoader()
            })



            cartContainer.append(orderedPr)
            document.body.append(cartContainer)


            cartElem.addEventListener('click', () => {
                cartContainer.style.opacity = '1'
                cartContainer.style.zIndex = '1000'
            })




        }

        let cartt = document.body.querySelector('.cart').querySelectorAll('.thisTypePrice')
        function calcAllPrice() {
            let totalPriceCartElem = document.body.querySelector('.cart').querySelector('.totalPriceCart')


            cartt.forEach(product => {

                let stringPrice = product.innerHTML.slice(1)
                allCartP.push(Number(stringPrice))

                product.addEventListener('change', () => {
                    console.log('rem')
                })
            })

            let ALL = allCartP.reduce((last, next) => {
                return last + next
            })
            totalPriceCartElem.innerHTML = 'Total Price :$' + ALL
        }

        calcAllPrice()

    }











}

export { modalLoader } 