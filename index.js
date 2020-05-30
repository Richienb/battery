"use strict"

const getBatteryLevel = require("battery-level")
const getBatteryCharging = require("is-charging")

module.exports = async () => ({
	level: await getBatteryLevel() || 1,
	charging: await getBatteryCharging() || true
})
