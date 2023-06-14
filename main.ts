SCD30.setCalibration400ppm()
basic.forever(function () {
    basic.showString("Temp:" + SCD30.readTemperature())
    basic.showString("CO2:" + SCD30.readCO2())
    basic.showString("Feucht:" + SCD30.readHumidity())
})
