/**
 * Copyright GenieMob 2018
 * Propulser la créativité | Ignite creativity
 */


// Select the SD card as a source (0x02)
function selectPlayerDevice()  {
  buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
  buffer.setNumber(NumberFormat.Int8LE, 1, 0xff);
  buffer.setNumber(NumberFormat.Int8LE, 2, 0x06);
  buffer.setNumber(NumberFormat.Int8LE, 3, 0x09);
  buffer.setNumber(NumberFormat.Int8LE, 4, 0x00);
  buffer.setNumber(NumberFormat.Int8LE, 5, 0x00);
  buffer.setNumber(NumberFormat.Int8LE, 6, 0x02); // Source
  buffer.setNumber(NumberFormat.Int8LE, 7, 0xef);
  serial.writeBuffer(buffer);
  control.waitMicros(200000);
}

// Set the volume (0x00 to 0x1e)
function setVolume()  {
  buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
  buffer.setNumber(NumberFormat.Int8LE, 1, 0xff);
  buffer.setNumber(NumberFormat.Int8LE, 2, 0x06);
  buffer.setNumber(NumberFormat.Int8LE, 3, 0x06);
  buffer.setNumber(NumberFormat.Int8LE, 4, 0x00);
  buffer.setNumber(NumberFormat.Int8LE, 5, 0x00);
  buffer.setNumber(NumberFormat.Int8LE, 6, 0x18); // Volume
  buffer.setNumber(NumberFormat.Int8LE, 7, 0xef);
  serial.writeBuffer(buffer);
  control.waitMicros(200000);
}

// Play the track entitled 001xxx.mp3 in folder 01
function playTrack()  {
  buffer.setNumber(NumberFormat.Int8LE, 0, 0x7e);
  buffer.setNumber(NumberFormat.Int8LE, 1, 0xff);
  buffer.setNumber(NumberFormat.Int8LE, 2, 0x06);
  buffer.setNumber(NumberFormat.Int8LE, 3, 0x0f);
  buffer.setNumber(NumberFormat.Int8LE, 4, 0x00);
  buffer.setNumber(NumberFormat.Int8LE, 5, 0x01); // Folder
  buffer.setNumber(NumberFormat.Int8LE, 6, 0x01); // Track
  buffer.setNumber(NumberFormat.Int8LE, 7, 0xef);
  serial.writeBuffer(buffer);
  control.waitMicros(200000);
}

// All commands fit in an 8-byte buffer
let buffer = pins.createBuffer(8);

// Baud rate 9600, TX on P14, RX on P0
serial.redirect(
  SerialPin.P14,
  SerialPin.P0,
  BaudRate.BaudRate9600
);

control.waitMicros(200000);

// Set everything up for playback (and display play arrow on LEDs)
selectPlayerDevice();
setVolume();
basic.showLeds(`
    . # . . .
    . # # . .
    . # # # .
    . # # . .
    . # . . .
`);

// When button A pressed, play the track titled 001xxx.mp3 in the folder 01
input.onButtonPressed(Button.A, () => {
  playTrack();
  basic.showIcon(IconNames.EigthNote);
});
