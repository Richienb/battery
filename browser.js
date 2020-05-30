const getBattery = require("browser-battery")

module.exports = async () => {
	const { level, charging } = await getBattery()
	return {
		level,
		charging
	}
}
