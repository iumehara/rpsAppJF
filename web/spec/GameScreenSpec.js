const React = require('react')
const ReactDOM = require('react-dom')
const GameScreen = require('../src/GameScreen')

describe("GameScreen", () => {
    var domFixture

    beforeEach(() => {
        domFixture = document.createElement("div")
        document.body.appendChild(domFixture)
    })

    afterEach(() => {
        domFixture.remove()
    })

    it("displays title", () => {
        ReactDOM.render(
            <GameScreen/>,
            domFixture
        )

        expect(domFixture.innerText).toContain('RPS App')
    })
})