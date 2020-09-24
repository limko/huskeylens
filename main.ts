let ID = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    ID = huskylens.readBox_s(Content3.ID)
})
