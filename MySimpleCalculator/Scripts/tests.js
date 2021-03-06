﻿module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Initialize test", function() {
    expect(2);
    var expected = '0';
    equal(txtInput.value, expected, "Expected input value: " + expected +
        "Actual value: " + txtInput.value);
    equal(txtInput2.value, expected, "Expected input2 value: " + expected +
        "Actual value: " + txtInput2.value);
    equal(txtResult.value, expected, "Expected result value: " + expected +
        "Actual value: " + txtResult.value);
});

test("Number Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = i;
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);

        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength,
            'Expected string length: ' + expectedLength +
                ' Actual value: ' + txtInput.value.length);
    }
});

test("Add Test", function() {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value ' + expected +
        ' Actual value: ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected input value ' + expected +
        ' Actual value: ' + txtInput.value);
});

test("Subtract Test", function() {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    QUnit.triggerEvent(btnMinus, "click");
    var expected = '10';
    equal(txtResult.value, expected, 'Expected value ' + expected +
        ' Actual value ' + txtResult.value);
    expected = '0';
    equal(txtInput.value, expected, 'Expected input value ' + expected +
        ' Actual value: ' + txtInput.value);
});

test("Clear Entry Test", function() {
    expect(1);
    txtInput.value = '10'; //starting condition
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value ' + expected +
        'Actual value ' + txtInput.value);
});

test("Clear Test", function() {
    expect(2);
    txtInput.value = '10';
    txtResult.value = '10';
    QUnit.triggerEvent(btnClear, "click");
    var expected = '0';
    equal(txtResult.value, expected, 'Expected result value ' + expected +
        'Actual value ' + txtResult.value);
    equal(txtInput.value, expected, 'Expected input value' + expected +
        'Actual value ' + txtInput.value);
});

test("Equal button Test", function() {
    expect(1);
    txtInput.value = '7';
    txtResult.value = '2';
    QUnit.triggerEvent(btnEqual, "click");
    var expected = '7';
    equal(txtResult.value, expected, "Expected result value: " + expected +
        "Actual value " + txtResult.value);
});
