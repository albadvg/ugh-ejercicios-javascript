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
        orderDiv$$.classList.add('pedido');

        orderDiv$$.innerHTML = `
            <h1 class="pedido__id">Id del pedido: ${order.id}</h1>
            <h4 class="pedido__fecha">Fecha: ${order.date}</h4>
            <ul class="pedido-productos"></ul>
        `
        document.body.appendChild(orderDiv$$);

        for(product of order.products) {
            let productInfo = await getProductInfo(product.productId);
            const listaProductos$$ = orderDiv$$.querySelector('.pedido-productos');

            const productoLi$$ = document.createElement('li');

            productoLi$$.innerHTML = `
                <h2 class="producto__nombre">${productInfo.name}</h2>
                <p class="producto__cantidad">Cantidad: ${product.quantity}</p> 
            `
            listaProductos$$.appendChild(productoLi$$);
        }
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