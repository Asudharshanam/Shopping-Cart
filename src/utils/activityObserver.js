export function activityObserver(onInactiveTimeout, activityEvents = ["Click"], maxInactivity = 8900) {
    let time = Date.now()

    function updateActivtyTime() {
        time = Date.now()
    }

    function removeEventHandlers() {
        activityEvents.forEach(eventName => {
            document.removeEventListener(eventName, updateActivtyTime)
        })
    }

    function checkTimeoutExpired() {
        const now = Date.now()

        if (now - time > maxInactivity) {
            removeEventHandlers()
            onInactiveTimeout()
        } else {
            setTimeout(checkTimeoutExpired, 1000 * 60)
        }
    }

    activityEvents.forEach(eventName => {
        document.addEventListener(eventName, updateActivtyTime)
    })

    checkTimeoutExpired()
}