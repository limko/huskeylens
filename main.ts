huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        	
        }
    }
})
