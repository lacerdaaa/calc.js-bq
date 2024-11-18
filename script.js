const input = document.getElementById("input"); 

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    if (value) {
      input.value += value;     
    }
  });
});

document.getElementById("reset").addEventListener("click", function () {
  input.value = "";  
});

document.getElementById("equal").addEventListener("click", function () {
  try {
    input.value = eval(input.value);  
  } catch (error) {
    input.value = "Erro";  
  }
});

document.getElementById("factorial").addEventListener("click", function () {
  const num = parseInt(input.value);
  if (!isNaN(num) && num >= 0) {
    input.value = factorial(num);
  } else {
    input.value = "Erro";  
  }
});

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
