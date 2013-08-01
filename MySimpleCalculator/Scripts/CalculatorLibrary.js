var txtInput;
var txtResult;
var txtInput2;
var currentOperator;
var currentInputField;

function initialize() {
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn' + i).addEventListener('click',
            numberClick, false);
    }
    
    txtInput = document.getElementById('txtInput');
    txtInput2 = document.getElementById('txtInput2');
    txtResult = document.getElementById('txtResult');
    currentOperator = document.getElementById('currentOperator');
    currentOperator.value = "+";
    currentInputField = txtInput;

    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);
    document.getElementById('btnEqual').addEventListener('click', equalClick, false);
    
    clear();
}

function numberClick() {
    currentInputField.value = currentInputField.value == '0' ?
        this.innerText : currentInputField.value + this.innerText;
}

function plusClick() {
    //txtResult.value = Number(txtResult.value) + Number(txtInput.value);
    currentOperator.value = "+";
    currentInputField = txtInput2; //move on to the next input field
    //clearEntry();
}

function minusClick() {
    //txtResult.value = Number(txtResult.value) - Number(txtInput.value);
    currentOperator.value = "-";
    currentInputField = txtInput2; //move on to the next input field
    //clearEntry();
}

function clearEntry() {
    currentInputField.value = '0';
}

function clear() {
    txtInput.value = '0';
    txtInput2.value = "0";
    txtResult.value = '0';
    currentOperator.value = "+";
    currentInputField = txtInput; //reset to first input field
}

function equalClick() {
    currentInputField = txtInput; //reset to first input field

    if (currentOperator.value == "-") {
        txtResult.value = Number(txtInput.value) - Number(txtInput2.value);
    }
    else { //default operator is addition
        currentOperator.value = "+";
        txtResult.value = Number(txtInput.value) + Number(txtInput2.value);

    }
}