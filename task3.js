// Your task is to calculate the total budget required to buy electronics:

function calculateElectronicsBudget(lap, tab, mob){
    const laptop = 35000 * lap;
    const tablet = 15000 * tab;
    const mobile = 20000 * mob;
    const total = laptop + tablet + mobile;

    return total;
}

const myTech = calculateElectronicsBudget(1, 2, 3);
console.log("Your total is", myTech);