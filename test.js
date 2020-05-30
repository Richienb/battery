const test = require("ava")
const inRange = require("in-range")
const battery = require(".")

test("main", async t => {
	const { level, charging } = await battery()

	t.true(typeof level === "number" && inRange(level, { start: 0, end: 1 }))
	t.true(typeof charging === "boolean")
})
