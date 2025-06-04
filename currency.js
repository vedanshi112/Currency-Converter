


const exchangeRates = {
    USD: { INR: 81.80, EUR: 0.91 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.10, INR: 89.50 }
};

function ruppy() {
    let amount = document.getElementById("amount").value;
    let Currency = document.getElementById("Currency").value;
    let Currency2 = document.getElementById("Currency2").value;
    let result = document.getElementById("result");

    if (Currency === Currency2) {
        result.innerText = `${amount} ${Currency} = ${amount} ${Currency2}`;
    } else {
        let rate = exchangeRates[Currency][Currency2] || 1;
        let convert = (amount * rate).toFixed(2);
        result.innerText = `${amount} ${Currency} = ${convert} ${Currency2}`;
    }
}