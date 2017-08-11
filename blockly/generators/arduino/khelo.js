goog.provide('Blockly.Arduino.khelo');

goog.require('Blockly.Arduino');


Blockly.Arduino['khelo_potentiometer'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  // TODO: Assemble Arduino into code variable.
  var code = 'void setup() { \n pinMode ('+dropdown_pin_options+',INPUT); \n }\n void loop() { \n analogRead('+dropdown_pin_options+');\n}';
  // TODO: Change ORDER_NONE to the correct strength.
  return (code);
};

Blockly.Arduino['khelo_proximity'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  // TODO: Assemble Arduino into code variable.
  var code = 'void setup(){ \n pinMode ('+dropdown_pin_options+',INPUT); \n } \n void loop(){ \n analogRead('+dropdown_pin_options+'); \n}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Arduino['khelo_water_detector'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  // TODO: Assemble Arduino into code variable.
  var code = 'void setup(){ \n pinMode ('+dropdown_pin_options+',INPUT); \n } \n void loop(){ \n if(analogRead('+dropdown_pin_options+')>50) ; \n}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

