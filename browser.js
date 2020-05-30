const getBattery = require("browser-battery")

module.exports = async () => {
	try {
		const { level, charging } = await getBattery()
		return {
			level,
			charging
		}
	} catch (_) {
		return {
			level: 1,
			charging: true
		}
	}
}
