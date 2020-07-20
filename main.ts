let kvarvarande_blinkningar = 0
input.onButtonPressed(Button.B, function () {
    kvarvarande_blinkningar = 5
})
basic.forever(function () {
    if (input.lightLevel() < 130) {
        led.plot(0, 0)
        pins.servoWritePin(AnalogPin.P0, 180)
        while (kvarvarande_blinkningar > 0) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
            basic.pause(300)
            pins.digitalWritePin(DigitalPin.P1, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
            basic.pause(300)
            kvarvarande_blinkningar += -1
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    } else {
        led.unplot(0, 0)
        kvarvarande_blinkningar = 5
        pins.servoWritePin(AnalogPin.P0, 90)
    }
})
basic.forever(function () {
    while (kvarvarande_blinkningar > 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(300)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(300)
        kvarvarande_blinkningar += -1
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
