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
  var code = 'void setup(){ \n pinMode ('+dropdown_pin_options+',INPUT); \n } \n void loop(){ \n if(analogRead('+dropdown_pin_options+')>50) \n ; \n}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};

Blockly.Arduino['khelo_distance'] = function(block) {
  var dropdown_pin_options = block.getFieldValue('pin_options');
  // TODO: Assemble Arduino into code variable.
  var code ='#define ECHOPIN 4 \n
#define TRIGPIN 7 \n
void setup() { \n
Serial.begin(9600); \n
pinMode(ECHOPIN,INPUT); \n
pinMode(TRIGPIN,OUTPUT); \n
}\n
void loop() { \n
 digitalWrite(TRIGPIN,LOW); \n
 delayMicroseconds(4); \n
 digitalWrite(TRIGPIN,HIGH); \n
 delayMicroseconds(40); \n
 digitalWrite(TRIGPIN,LOW); \n 
 float distance = pulseIn(ECHOPIN,HIGH); \n
 distance=distance/58; \n
 Serial.println(distance); \n
 delay(40); \n }'
  return [code];
};

  Blockly.Arduino['khelo_led'] = function(block) {
  var dropdown_led_options = block.getFieldValue('LED_options');
  var dropdown_pin_options = block.getFieldValue('pin_options');
  // TODO: Assemble Arduino into code variable.
  var code = '# define led_pin '+dropdown_led_options+'\n void setup{ \n pinMode('+dropdown_pin_options+',OUTPUT); \n } \n void loop{ \n
  if ('+dropdown_led_options+'== 'on') \n digitalWrite('+dropdown_pin_options+',HIGH); \n if ('+dropdown_led_options+'== 'off') \n digitalWrite('+dropdown_pin_options+',LOW);\n if ('+dropdown_led_options+'== 'blink'){ \n for(int i=0; i<10;i++){\n digitalWrite('+dropdown_pin_options+',HIGH);\n delay(200); \n digitalWrite('+dropdown_pin_options+',LOW);\n delay(100);\n}}}';
  return code;
};
