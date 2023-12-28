


const getProducts = async () => {
    try {
        let response = await fetch('http://localhost:3000/products');
        let products = await response.json();
        return products;
    } catch (error) {
        console.log(error);
    }
    
}

const getOrders = async () => {
    try {
        let response = await fetch('http://localhost:3000/orders');
        let orders = await response.json();
        return orders;
    } catch (error) {
        console.log(error);
    }
    
}

const sortOrders = (orders) => {
    orders.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB - dateA;
    })
}

const paintOrders = async (orders) => {
    for(const order of orders) {
        const orderDiv$$ = document.createElement('div');
        const orderId$$ = document.createElement('h1');
        const orderDate$$ = document.createElement('h4');

        orderId$$.textContent = `Id del pedido: ${order.id}`
        orderDate$$.textContent = `Fecha: ${order.date}`;

        orderDiv$$.appendChild(orderId$$);
        orderDiv$$.appendChild(orderDate$$);

        for(product of order.products) {
            let productInfo = await getProductInfo(product.productId);
            console.log(productInfo);
            const productDiv$$ = document.createElement('div');
            const productName$$ = document.createElement('h2');
            const productQuantity$$ = document.createElement('p');

            productName$$.textContent = productInfo.name;
            productQuantity$$.textContent = `Cantidad: ${product.quantity}`;

            productDiv$$.appendChild(productName$$);
            productDiv$$.appendChild(productQuantity$$);
            orderDate$$.appendChild(productDiv$$);
        }

        document.body.appendChild(orderDiv$$);
    }
}

const getProductInfo = async (productId) => {
    try {
        let response = await fetch(`http://localhost:3000/products/${productId}`);
        let productInfo = await response.json();
        return productInfo;
    } catch (error) {
        console.log(error);
    }
}

const init = async () => {
    let products = await getProducts();
    let orders = await getOrders();
    
    sortOrders(orders);
    paintOrders(orders);
}

init();