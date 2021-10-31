let stopvar = 0
OLED.init(128, 64)
let gæst = 0
OLED.writeStringNewLine("Der har i dag vaeret: ")
OLED.writeNum(gæst)
OLED.writeString(" gaester")
music.setVolume(200)
music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P2)) {
        gæst += 1
        OLED.clear()
        OLED.writeStringNewLine("Der har i dag vaeret: ")
        OLED.writeNum(gæst)
        if (gæst > 1) {
            OLED.writeString(" gaester")
        } else {
            OLED.writeString(" gaest")
        }
    }
    if (gæst == 20 && stopvar == 0) {
        stopvar = 1
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    }
})
