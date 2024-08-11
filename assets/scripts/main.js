// synchronous function
(() => {
    console.log('***  sync function');
    let pizza;
    console.log('order a pizza');
    const getPizza = () => {
        return `🍕`;
    }
    pizza = getPizza();
    console.log('pizza ordered');
    console.log(`eat ${pizza}`);
    console.log('***  done');
})();

// asynchronous function that uses a callback 
(() => {
    console.log('*** async function');
    let pizza;
    // make a callback function to call whenever pizza is done and ready
    const orderPizza = (doCallBack) => {
        console.log('order a pizza');
        // wait for order to take and finish
        setTimeout(() => {
            pizza = `🍕`;
            console.log(`${pizza} is done and ready`);
            doCallBack();
        }, 5000);
    }
    // pizza is now defined here; pizzaReadyToEat is the callback function
    const pizzaReadyToEat = () => {
        console.log(`eat ${pizza}`);
        console.log('***  done');
    }
    orderPizza(pizzaReadyToEat);
    console.log('pizza ordered');
    console.log('do laundry');
    console.log('water plants');
    console.log('set table');
    console.log('etc, etc, etc...');
})();
