let ProductLists = document.querySelector('#pro-list'); 
let CartList = document.getElementById('cart-list');

let products = [];
let carts=[];

const addDataToUI= () =>{
    ProductLists.innerHTML='';

    if(products.length>0){
        products.forEach(item=>{
            let productRow =  document.createElement('tr');
            productRow.classList.add('prod-items');
            productRow.dataset.id=item.Serial_No;

            productRow.innerHTML=`
            <td>${item.Serial_No}.</td>
            <td id="item_val">${item.Product_name}</td>
            <td> <button class="btn btn-success add_to_cart" onclick="addToCart('${item.Product_name}')"><b><i>${item.Add}</i></b></button> </td>`

            ProductLists.appendChild(productRow);

        })
    }
    
}

let addToCart = items =>{
    carts.push(items);
    renderCart();
}

function removeFromCart(items) {
    carts = carts.filter(item => item !== items);
    renderCart();
}

function renderCart(){
    CartList.innerHTML='';
    carts.forEach(item=>{
        let cartRow = document.createElement('li');
        cartRow.textContent=item;
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn');
        removeButton.classList.add('btn-danger');
        removeButton.textContent='X';
        removeButton.onclick = () => removeFromCart(item);
        cartRow.appendChild(removeButton);
        CartList.appendChild(cartRow);
    })
}

const initData = ()=>{
    fetch("/Project_1_Shopping_Cart/products_2.json")
    .then(response => response.json())
    .then(data =>{
        // console.log(data);
        products=data;
        addDataToUI();
    })
}
initData();