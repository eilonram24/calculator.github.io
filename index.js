
function totalIt() {
    var input = document.getElementsByName("checkbox");
    var total = 0;
    var value1 = document.getElementById("rangenumber").value;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    element = document.querySelector('.inputshow');
    element.style.visibility = 'visible';
    document.getElementsByName("total")[0].value = "Php" + total.toFixed(2) * value1;
  }