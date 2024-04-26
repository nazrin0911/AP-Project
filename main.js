document.addEventListener("DOMContentLoaded", function() {
    const rates = {
        RUB: 1,
        USD: 0.013,
        EUR: 0.011,
        GBP: 0.0095
    };

    function convertCurrency() {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = document.querySelector(".from-currency.active").getAttribute("data-currency");
        const toCurrency = document.querySelector(".to-currency.active").getAttribute("data-currency");

        const result = (amount * rates[toCurrency]) / rates[fromCurrency];
        document.getElementById("result").value = result.toFixed(2);
    }

    const amountInput = document.getElementById("amount");
    const resultInput = document.getElementById("result");
    const fromCurrencies = document.querySelectorAll(".from-currency");
    const toCurrencies = document.querySelectorAll(".to-currency");

    amountInput.addEventListener("input", convertCurrency);
    resultInput.addEventListener("input", function() {
        const amount = parseFloat(this.value);
        const fromCurrency = document.querySelector(".to-currency.active").getAttribute("data-currency");
        const toCurrency = document.querySelector(".from-currency.active").getAttribute("data-currency");

        const result = (amount * rates[toCurrency]) / rates[fromCurrency];
        document.getElementById("amount").value = result.toFixed(2);
    });

    fromCurrencies.forEach(function(currency) {
        currency.addEventListener("click", function() {
            fromCurrencies.forEach(function(c) {
                c.classList.remove("active");
            });
            this.classList.add("active");
            convertCurrency();
        });
    });

    toCurrencies.forEach(function(currency) {
        currency.addEventListener("click", function() {
            toCurrencies.forEach(function(c) {
                c.classList.remove("active");
            });
            this.classList.add("active");
            convertCurrency();
        });
    });
    document.querySelector(".from-currency[data-currency='RUB']").classList.add("active");
    document.querySelector(".to-currency[data-currency='USD']").classList.add("active");

    
    convertCurrency();
});