// Object with discount coupons

let discountsCoupons = [
    {
        codeCoupon: "discount_1",
        discountCoupon: 15
    },
    {
        codeCoupon:"discount_2",
        discountCoupon: 20
    },
    {
        codeCoupon:"discount_3",
        discountCoupon: 30
    }
]

// Calculating discount

function calculateDiscount(price, discount){
    let priceDiscount = 100 - discount;
    let finalPrice = (price*priceDiscount)/100;
    return finalPrice.toFixed(2);
}

function insertCalculateDiscount(discountCode){
    let priceOriginalContainer = document.getElementById("product_price_discount_priceAfter");
    let priceOriginal = parseFloat(priceOriginalContainer.textContent);
    let priceFinal = calculateDiscount(priceOriginal, discountCode);
    let priceFinalContainer = document.getElementById("product_price_discount_priceBefore");
    priceFinalContainer.innerText = priceFinal + " €";
}

// Validating coupon

function comprobateCoupon(){    
    let couponField = document.getElementById("coupon_input");
    let couponFieldValue = couponField.value;
    let couponCodeToSearch = function (discountsCoupons){
        return discountsCoupons.codeCoupon === couponFieldValue;
    }
    let userCoupon = discountsCoupons.find(couponCodeToSearch);
    if (userCoupon != undefined){
        insertCalculateDiscount(userCoupon.discountCoupon);
        let priceOriginalContainer = document.getElementById("product_price_discount_priceAfter")
        priceOriginalContainer.insertAdjacentHTML('beforeend', '<style type="text/css"> #product_price_discount_priceAfter { text-decoration:line-through;}</style>');
    } else (
        alert(`El cupón ${couponFieldValue} no es válido. Por favor, introduce otro.`)
    )
}