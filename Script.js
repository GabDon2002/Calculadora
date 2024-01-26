function inserir(elementId) {
    var outputValueTo = document.getElementById('field');
  
    if (outputValueTo.value == '0' || outputValueTo.value == 'Error') {
      outputValueTo.value = elementId.textContent;
    } else {
  
      outputValueTo.value += elementId.textContent;
    }
  }
  
  function limpar() {
    document.getElementById('field').value = '0';
    document.getElementById('decimal').disabled = false;
  }
  
  function Operador(elementId) {
    var outputValueTo = document.getElementById('field');
    if (outputValueTo.value == '0' || outputValueTo.value == 'Error') {
      outputValueTo.value = '0';
    } else {
      outputValueTo.value += elementId.textContent;
      document.getElementById('decimal').disabled = false;
    }
  }
  
  function Decimal(elementId, status) {
    var outputValueTo = document.getElementById('field');
    outputValueTo.value += elementId.textContent;
    document.getElementById('decimal').disabled = status;
  }
  
  function calcular() {
  
    try {
  
      var fieldtxt = document.getElementById('field');
      if (fieldtxt.value != '') {
        var CalcularResultado = eval(fieldtxt.value);
        fieldtxt.value = CalcularResultado;
      }
    } catch (err) {
  
      field1txt.value = 'Error';
  
    }
  
  }
  
  function deletar() {
  
    var field1txt = document.getElementById('field');
  
    if (field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Error') {
      field1txt.value = '0';
      document.getElementById('decimal').disabled = false;
    } else {
      field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
    }
  }