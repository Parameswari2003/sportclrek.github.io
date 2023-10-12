const wrapper = document.querySelector(".sliderWrapper");

const menuItem = document.querySelectorAll(".menuItem")

const product = [
    {
        id:1,
        title:"adidas",
        price:2999,
        color:[
            {
                code:"black",
                img:"image/a1.jpg",
            },
            {
                code:"green",
                img:"image/a7.jpg",
            },
        
        ],
    },
    {
        id:2,
        title:"NIKE",
        price:1599,
        color:[
            {
                code:"white",
                img:"image/nike1.jpg",
            },
            {
                code:"brown",
                img:"image/nike2.png",
            },
        ],
    },
    {
        id:3,
        title:"PUMA",
        price:2599,
        color:[
            {
                code:"lightblue",
                img:"image/p6.png",
            },
            {
                code:"grey",
                img:"image/p8.jpg",
            },
        ],
    },
    {
        id:4,
        title:"REEBOK",
        price:1789,
        color:[
            {
                code:"black",
                img:"image/reebok1.jpg",
            },
            {
                code:"lightblue",
                img:"image/reebok.png",
            },
        ],
    },
    {
        id:5,
        title:"ASICS",
        price:1599,
        color:[
            {
                code:"blue",
                img:"image/ava1.jpg",
            },
            {
                code:"lightblue",
                img:"image/avasics.jpg",
            },
        ],
    },

];

let choosenProduct = product[0]

const currentProductImg =document.querySelector(".productImg");
const currentProductTitle =document.querySelector(".productTitle");
const currentProductPrice =document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItem.forEach((item, index)=> {
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the choosen product

        choosenProduct = product[index];

        // change text of current product

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.color[0].img;


        currentProductColor.forEach((color, index) => {

            color.style.backgroundColor = choosenProduct.color[index].code;
        })
    });

});


currentProductColor.forEach((color, index) =>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.color[index].img
    });
});

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", ()=>{
        currentProductSizes .forEach((size) =>
        {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close")

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
});

close.addEventListener("click", ()=>{
    payment.style.display = "none"
});

  var popupViews = document.querySelectorAll('.popup-view');
  var popupBtns = document.querySelectorAll('.popup-btn');
  var closeBtns = document.querySelectorAll('.close-btn');
  //javascript for quick view button
  var popup = function(popupClick) {
    popupViews[popupClick].classList.add('active');
  }
  popupBtns.forEach((popupBtn, i) => {
    popupBtn.addEventListener("click", () => {
      popup(i);
    });
  });
  //javascript for close button
  closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
      popupViews.forEach((popupView) => {
        popupView.classList.remove('active');
      });
    });
  });
