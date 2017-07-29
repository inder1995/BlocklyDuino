goog.provide('Blockly.Arduino.khelo_potentiometer');

goog.require('Blockly.Arduino');


Blockly.Arduino['khelo_potentiometer'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  // TODO: Assemble Arduino into code variable.
  var code = 'void setup() {  
pinMode (dropdown_pin_options,INPUT);
}

void loop() {
analogRead(dropdown_pin_options);
}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.khelo_potentiometer];
};
