function calculate() {
    let principal = parseFloat(document.getElementById("principal").value);
    let rate = parseFloat(document.getElementById("rate").value) / 100; // Correct rate conversion
    let years = parseInt(document.getElementById("years").value);
    const totalamount = document.getElementById("total-amount");
  
    // Ensure non-negative values
    principal = isNaN(principal) || principal < 0 ? 0 : principal;
    rate = isNaN(rate) || rate < 0 ? 0 : rate;
    years = isNaN(years) || years < 0 ? 0 : years;
  
    // Compound Interest Calculation (Annual Compounding)
    const result = principal * Math.pow(1 + rate, years);
  
    // Format output as currency (USD)
    totalamount.textContent = result.toLocaleString(undefined, {
      style: "currency",
      currency: "USD",
    });
  }
  