# microbit-grove-mp3

Interface between the __BBC micro:bit__ and the __Grove MP3 v2.0__.

![micro:bit with Grove MP3 v2.0 and shield](https://geniemob.github.io/microbit-grove-mp3/microbit-grove-mp3-with-shield.jpg)

The above image shows the plug-and-play setup with the [micro:bit](https://microbit.org/) connected to the [Grove MP3 v2.0](https://www.seeedstudio.com/Grove-MP3-v2.0-p-2597.html) via the [Grove shield for micro:bit](https://www.seeedstudio.com/Grove-Shield-for-micro%3Abit-p-2947.html).  With basic tools, it would also be possible to connect the Grove MP3 v2.0 to the micro:bit using three alligator clips.


## hello-mp3.js

The hello-mp3.js program provides the minimal functionality for testing the interface between the micro:bit and the Grove MP3 v2.0.

### Prerequisites

The hello-mp3.js program is configured to expect:
- micro:bit P14 connected to the RX of the Grove MP3 v2.0
- a file called 001xxx.mp3 (xxx can be the filename, for example) within a folder called 01 on the SD card

### Functionality

On startup, the hello-mp3.js program will select the SD card as a source, set the volume to 24 / 30 and display the 'play' icon on the LEDs.

Pressing button A will begin (or restart) playback of the 001xxx.mp3 file within the 01 folder.


## Resources

Seeed provide a [version of the KT403A datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-MP3_v2.0/master/res/Grove-MP3_v2.0_KT403A_datasheet_V1.3_EN-Recompiled_by_Seeed-.pdf), which specifies the serial commands interpreted by the Grove MP3 v2.0 module.  In short, all communication is in 8-byte messages at __9600 baud__.  The message structure is as follows:

| Byte | Value | Function                                           |
|:----:|:-----:| -------------------------------------------------- |
| 0    | 0x7e  | Start command                                      |
| 1    | 0xff  | Version info                                       |
| 2    | 0x06  | Message length                                     |
| 3    |       | Command (see datasheet for list of commands)       |
| 4    | 0x00  | No serial reply requested                          |
| 5    |       | High byte of command data (DH)                     |
| 6    |       | Low byte of command data (DL)                      |
| 7    | 0xef  | End command                                        |


## License

MIT License

Copyright (c) 2018 [GenieMob](http://www.geniemob.ca/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
