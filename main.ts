function TakeNote () {
    ID = huskylens.readBox_s(Content3.ID)
    if (ID == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
    }
    if (ID == 2) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.RED)
    }
    if (ID == 3) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
    }
    if (ID == 4) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.YELLOW)
    }
    if (ID == 5) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.CYAN)
    }
    if (ID == 6) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.PINK)
    }
    if (ID == 7) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
    }
}
let height = 0
let width = 0
let ID = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isLearned(1)) {
        if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            width = huskylens.readBox_s(Content3.width)
            height = huskylens.readBox_s(Content3.height)
            if (width * height > 5000) {
                TakeNote()
            }
        }
    }
})
