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

Blockly.Blocks['khelo_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["ON", "on"], ["OFF", "off"], ["BLINK", "blink"]]), "LED_options")
        .appendField("at pin")
        .appendField(new Blockly.FieldDropdown([["3", "pin_3"], ["5", "pin_5"], ["6", "pin_6"], ["9", "pin_9"], ["10", "pin_10"]]), "pin_options");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['khelo_button'] = {
  init: function() {
    this.appendStatementInput("button")
        .setCheck(null)
        .appendField("If button at pin ")
        .appendField(new Blockly.FieldDropdown([["2", "pin_2"], ["4", "pin_4"], ["7", "pin_7"]]), "pin_options")
        .appendField("is ")
        .appendField(new Blockly.FieldDropdown([["Pressed", "HIGH"], ["Not pressed", "lowLOW"]]), "button_state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
