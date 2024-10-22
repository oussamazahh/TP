
const rates = {
    "USD": { "MAD": 9.91, "EUR": 0.91 },
    "EUR": { "USD": 1.10, "MAD": 10.71 },
    "MAD": { "EUR": 0.09, "USD": 0.10 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted Amount: ${amount.toFixed(2)} ${toCurrency}`;
        return;
    }

    const rate = rates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    document.getElementById('result').innerText = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
}