const React = require('react')
const ReactDOM = require('react-dom')
const ReactTestUtils = require("react-dom/test-utils")
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

    it('does not display results by default', () => {
        ReactDOM.render(
            <GameScreen/>,
            domFixture
        )

        expect(domFixture.innerText).not.toContain('P1Wins')
        expect(domFixture.innerText).not.toContain('P2Wins')
        expect(domFixture.innerText).not.toContain('TIE')
    })

    it('displays result returned from Game', () => {
        const gameStub = {
            play: () => {
                return 'P1Wins'
            }
        }

        ReactDOM.render(
            <GameScreen game={gameStub}/>,
            domFixture
        )


        document.querySelector('button').click()


        expect(domFixture.innerText).toContain('P1Wins')
    })

    it('displays no result if there is no game', () => {
        const undefinedGameStub = undefined

        ReactDOM.render(
            <GameScreen game={undefinedGameStub}/>,
            domFixture
        )

        document.querySelector('button').click()


        expect(domFixture).toBeTruthy()
    })
})