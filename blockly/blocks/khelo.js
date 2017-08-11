'use strict';
goog.provide('Blockly.Blocks.khelo');

goog.require('Blockly.Blocks');



Blockly.Blocks["khelo_potentiometer"] = {
  init: function() {
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("Read dimmer at pin")
        .appendField(new Blockly.FieldDropdown([["A0", "analog_pin_0"], ["A1", "analog_pin_1"]]), "pin_options");
    this.setOutput(true, "Number");
      }
};

Blockly.Blocks['khelo_proximity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read proximity on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "analog_pin_0"], ["A1", "analog_pin_1"]]), "pin_options");
    this.setOutput(true, "Number");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_water_detector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Wet or not on pin")
        .appendField(new Blockly.FieldDropdown([["A0", "analog_pin_0"], ["A1", "analog_pin_1"]]), "pin_options");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_distance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("The distance in centimeters is");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(315);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
