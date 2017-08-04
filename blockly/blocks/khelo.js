goog.provide('Blockly.Blocks.khelo');

goog.require('Blockly.Blocks');
Blockly.Blocks['khelo_potentiometer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read dimmer at pin")
        .appendField(new Blockly.FieldDropdown([["A0", "analog_pin_0"], ["A1", "analog_pin_1"]]), "pin_options");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
