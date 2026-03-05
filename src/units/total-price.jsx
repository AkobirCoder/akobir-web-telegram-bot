export const totalPrice = (array) => {
    return array.reduce((acc, num) => {
        return acc + num.price * num.quantity;
    }, 0);
}