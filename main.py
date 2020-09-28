def TakeNote():
    global ID
    ID = huskylens.readBox_s(Content3.ID)
    if ID == 1:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.BLUE)
    if ID == 2:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.RED)
    if ID == 3:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.GREEN)
    if ID == 4:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.YELLOW)
    if ID == 5:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.CYAN)
    if ID == 6:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.PINK)
    if ID == 7:
        DFRobotMaqueenPlus.set_rgb_light(RGBLight.RGBA, Color.OFF)
ID = 0
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)

def on_forever():
    huskylens.request()
    if huskylens.is_learned(1):
        if huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
            TakeNote()
basic.forever(on_forever)
