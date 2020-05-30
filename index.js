"use strict"

const getBatteryLevel = require("battery-level")
const getBatteryCharging = require("is-charging")

module.exports = async () => {
	const level = await getBatteryLevel()
	const charging = await getBatteryCharging()

	// Windows doesn't support desktops which don't have batteries
	if (Number.isNaN(level)) {
		level = 1
		charging = true
	}

	return {
		level,
		charging
	}
}
