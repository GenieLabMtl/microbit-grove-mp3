# microbit-grove-mp3

Interface between the BBC micro:bit and the Grove MP3 v2.0.


## hello-mp3.js

The hello-mp3.js program provides the minimal functionality for testing the interface between the micro:bit and the Grove MP3 v2.0.

### Prerequisites

The hello-mp3.js program is configured to expect:
- micro:bit P14 connected to the RX of the Grove MP3 v2.0
- a file called 001xxx.mp3 (xxx can be the filename, for example) within a folder called 01 on the SD card

### Functionality

On startup, the hello-mp3.js program will select the SD card as a source, set the volume to 24 / 30 and display the 'play' icon on the LEDs.

Pressing button A will begin (or restart) playback of the 001xxx.mp3 file within the 01 folder.


## License

MIT License

Copyright (c) 2018 GenieMob

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
