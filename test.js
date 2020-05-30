const test = require("ava")
const inRange = require("in-range")
const battery = require(".")

test("main", async t => {
	const { level, charging } = await battery()

	t.is(typeof level, "number")
	t.true(inRange(level, { start: 0, end: 1 }))

	t.is(typeof charging, "boolean")
})
