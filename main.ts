function TakeNote () {
    ID = huskylens.readBox_s(Content3.ID)
    if (0 == 0) {
    	
    }
    if (true) {
    	
    }
    if (true) {
    	
    }
    if (true) {
    	
    }
    if (true) {
    	
    }
    if (true) {
    	
    }
    if (true) {
    	
    }
}
let ID = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            TakeNote()
        }
    }
})
