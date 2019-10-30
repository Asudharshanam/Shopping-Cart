import { activityObserver } from './activityObserver'

describe("activtyOvserver", () => {
    it("calls the callBack", () => {
        expect.assertions(1)
        jest.useFakeTimers()
        const spy = jest.spyOn(Date, "now")
        spy.mockReturnValueOnce(0)
        spy.mockReturnValueOnce(1)
        spy.mockReturnValueOnce(2)
        spy.mockReturnValueOnce(890010)
        const onInactiveTimeout = jest.fn()

        activityObserver(onInactiveTimeout)

        document.body.click()
        jest.runAllTimers()

        expect(onInactiveTimeout).toHaveBeenCalledTimes(1)
    })
})