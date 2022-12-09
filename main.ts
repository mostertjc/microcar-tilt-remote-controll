input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.setGroup(234)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    radio.setGroup(1)
})
basic.showIcon(IconNames.SmallDiamond)
radio.setGroup(234)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (input.buttonIsPressed(Button.AB)) {
            radio.sendValue("mgx", 0)
            radio.sendValue("mgy", 0)
        } else {
        	
        }
    } else {
        radio.sendValue("mgx", input.acceleration(Dimension.X))
        radio.sendValue("mgy", input.acceleration(Dimension.Y))
    }
})
