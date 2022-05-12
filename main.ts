let porovnaj = 1
basic.forever(function () {
    while (porovnaj < 10) {
        basic.showNumber(porovnaj)
        if (porovnaj % 2 == 0 && porovnaj % 3 == 0) {
            basic.showString("A")
        } else if (porovnaj % 3 == 0) {
            basic.showString("T")
        } else if (porovnaj % 2 == 0) {
            basic.showString("D")
        } else {
            basic.showString("N")
        }
        porovnaj += 1
    }
    basic.showString("nie 0")
})
