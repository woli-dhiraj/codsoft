var expr, result, input = "";

document.addEventListener("DOMContentLoaded", function() {
  expr = document.getElementById("expr");
  result = document.getElementById("result");

  
  result.textContent = "0";
});

function press(val) {
  if (val === "C") {
    input = "";
    expr.textContent = "";
    result.textContent = "0";
    return;
  }

  if (val === "=") {
    try {
      var ans = eval(input);
      expr.textContent = input + " =";
      result.textContent = ans;
      input = String(ans);
    } catch (e) {
      result.textContent = "Error";
      input = "";
    }
    return;
  }

  
  if (input === "" && result.textContent === "0" && !isNaN(val)) {
    input = val;
    result.textContent = val;
  } else {
    input += val;
    result.textContent = input;
  }
}
