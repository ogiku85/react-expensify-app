export default (expenses) =>{
    return expenses.map((expense) => expense.amount)
    .reduce((sum, value) =>{
        return sum + value;
    }, 0);
}

//OLD VERBOSE CODE
// export default (expenses) =>{
//     if(expenses.length === 0){
//         return 0;
//     }
//     else{
//         //0 is passed to reduce as the initial sum
//         return expenses.map((expense) => expense.amount)
//         .reduce((sum, value) =>{
//             return sum + value;
//         }, 0);

//     }
// }