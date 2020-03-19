input.onButtonPressed(Button.A, function () {
    clock.DateTime(
        2020,
        3,
        19,
        4,
        10,
        48,
        30
    )
    basic.showIcon(IconNames.Heart)
})
let day = 0
let month = 0
let clock: DS1302.DS1302RTC = null
I2C_LCD1602.LcdInit(63)
clock = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
basic.forever(function () {
    I2C_LCD1602.ShowNumber(clock.getYear(), 0, 0)
    I2C_LCD1602.ShowString("-", 4, 0)
    month = clock.getMonth()
    if (month > 9) {
        I2C_LCD1602.ShowNumber(month, 5, 0)
    } else {
        I2C_LCD1602.ShowString("0", 5, 0)
        I2C_LCD1602.ShowNumber(month, 6, 0)
    }
    I2C_LCD1602.ShowString("-", 7, 0)
    day = clock.getDay()
    if (day > 9) {
        I2C_LCD1602.ShowNumber(day, 8, 0)
    } else {
        I2C_LCD1602.ShowString("0", 8, 0)
        I2C_LCD1602.ShowNumber(month, 9, 0)
    }
    if (clock.getWeekday() == 1) {
        I2C_LCD1602.ShowString("Pon.", 13, 0)
    } else if (clock.getWeekday() == 2) {
        I2C_LCD1602.ShowString("Wt.", 13, 0)
    } else if (clock.getWeekday() == 3) {
        I2C_LCD1602.ShowString("Śr.", 13, 0)
    } else if (clock.getWeekday() == 4) {
        I2C_LCD1602.ShowString("Czw.", 13, 0)
    } else if (clock.getWeekday() == 5) {
        I2C_LCD1602.ShowString("Pt.", 13, 0)
    } else if (clock.getWeekday() == 6) {
        I2C_LCD1602.ShowString("Sob.", 13, 0)
    } else if (clock.getWeekday() == 7) {
        I2C_LCD1602.ShowString("Ndz.", 13, 0)
    }
    I2C_LCD1602.ShowString("Gdz.", 0, 1)
    I2C_LCD1602.ShowString(":", 3, 1)
    I2C_LCD1602.ShowNumber(clock.getHour(), 4, 1)
    I2C_LCD1602.ShowString(":", 6, 1)
    I2C_LCD1602.ShowNumber(clock.getMinute(), 7, 1)
    I2C_LCD1602.ShowString(":", 9, 1)
    I2C_LCD1602.ShowNumber(clock.getSecond(), 10, 1)
    basic.pause(10000)
    I2C_LCD1602.clear()
})
 