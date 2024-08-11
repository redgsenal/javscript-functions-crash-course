//IIFE - immediately invoke function expression
// if when this is as mainApp function
const mainApp = () => {
    console.log('this is the main app function');
}
// then to execute this means by doing this, it is executed
mainApp();

// so therefore whatever inside the outer parenthesis is defined as an outer function 
// which will then be executed immediately by the function of the next parenthesis
(() => {
    // iife
    console.log('this is immediately executed...');
})();