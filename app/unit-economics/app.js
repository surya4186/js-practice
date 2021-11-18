let calculateBtn = document.getElementById('calculate'),
    sellingPriceInput = document.getElementById('selling-price'),
    cogsInput = document.getElementById('cogs'),
    grossMarginInput = document.getElementById('gross-margin'),
    salesMarketingInput = document.getElementById('Sales-marketing'),
    operationCostInput = document.getElementById('operation-cost'),
    netMarginInput = document.getElementById('net-margin'),
    sellingValue, cogsValue, grossMarginValue, salesMarketingValue, operationCostValue,
    netMarginValue;

function calculate() {

    sellingValue = sellingPriceInput.value;

    cogsValue = cogsInput.value;
    grossMarginValue = sellingValue - cogsValue;
    grossMarginInput.value = grossMarginValue;

    // console.log(grossMarginValue);
    salesMarketingValue = salesMarketingInput.value;
    // console.log(salesMarketingValue)
    operationCostValue = operationCostInput.value;
    netMarginValue = grossMarginValue - salesMarketingValue - operationCostValue;
    netMarginInput.value = netMarginValue;    

    // console.log('hello');
}


calculateBtn.addEventListener('click', calculate);

