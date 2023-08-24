

import { signal } from "@preact/signals"
import { Card, Icon, Intent, Tag } from "@blueprintjs/core"
/*
    Market opens
    NYSE: 9:30am - 4:00pm ET
    LSE: 8:00am - 4:30pm GMT
    TSE: {
        9:00am - 11:30am JST
        12:30pm - 3:00pm JST
    }
*/
const hours = signal({} as any)

const timezoneMap = {
    "ET": -5,
    "GMT": 0,
    "JST": 9,
    "LOCAL": new Date().getTimezoneOffset() * -1 / 60
} as any
const marketTimezoneMap = {
    "NYSE": "ET",
    "LSE": "GMT",
    "TSE": "JST",
    "BVB": "LOCAL",
} as any
const marketTitles = {
    "NYSE": {
        name: "New York Stock Exchange",
        short: "NYSE",
    },
    "LSE": {
        name: "London Stock Exchange",
        short: "LSE",
    },
    "TSE": {
        name: "Tōkyō Shōken Torihikijo",
        short: "TSE",
    },
    "BVB": {
        name: "Bursa de Valori București",
        short: "BVB",
    }
} as any
const marketHours = {
    "NYSE": [{
        "open": 9.5,
        "close": 16
    }],
    "LSE": [{
        "open": 8,
        "close": 16.5
    }],
    "TSE": [{
        "open": 9,
        "close": 11.5
    }, {
        "open": 12.5,
        "close": 15
    }],
    "BVB": [{
        "open": 10,
        "close": 18.833333
    }]
} as any

const adjustTime = (time: Date, timezone: string) => {
    return new Date(time.getTime() + timezoneMap[timezone] * 60 * 60 * 1000)
}

const parseDate = (date: Date) => {
    const ISO = date.toISOString()
    const [year, month, day] = ISO.split("T")[0].split("-")
    const [hour, minute, second] = ISO.split("T")[1].split(".")[0].split(":")
    return {
        year, month, day, hour, minute, second
    }
}

const marketHoursToDate = (market: string) => {
    return marketHours[market].map((time: any) => {
        let open = new Date()
        open = new Date(open.setHours(time.open))
        open = new Date(open.setMinutes(0))
        open = new Date(open.setSeconds(0))
        open = new Date(open.setMilliseconds(0))
        // if fractional hours, add minutes
        if (time.open % 1 !== 0) {
            open = new Date(open.setMinutes(parseInt(time.open.toString().split(".")[0])))
            open = new Date(open.setMinutes(parseInt('0.' + time.open.toString().split(".")[1]) * 60))
        }
        open = adjustTime(open, 'LOCAL')
        let close = new Date()
        close = new Date(close.setHours(time.close))
        close = new Date(close.setMinutes(0))
        close = new Date(close.setSeconds(0))
        close = new Date(close.setMilliseconds(0))
        // if fractional hours, add minutes
        if (time.close % 1 !== 0) {
            close = new Date(close.setMinutes(parseInt(time.close.toString().split(".")[0])))
            close = new Date(close.setMinutes(parseInt('0.' + time.close.toString().split(".")[1]) * 60))
        }
        close = adjustTime(close, 'LOCAL')
        return {
            open,
            close,
        }
    })
}

const DifereceString = (date1: Date, date2: Date) => {
    const diff = Math.abs(date1.getTime() - date2.getTime())
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor(diff / (1000 * 60)) % 60
    const seconds = Math.floor(diff / 1000) % 60
    const pad = (n: number) => n < 10 ? '0' + n : n
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const NearestInterval = (market: string) => {
    const intervals = marketHoursToDate(market)
    const now = adjustTime(new Date(), 'LOCAL')
    const nearest = {
        open: intervals.reduce((prev: any, curr: any) => {
            return (Math.abs(curr.open.getTime() - now.getTime()) < Math.abs(prev.open.getTime() - now.getTime()) ? curr : prev)
        }).open,
        close: intervals.reduce((prev: any, curr: any) => {
            return (Math.abs(curr.close.getTime() - now.getTime()) < Math.abs(prev.close.getTime() - now.getTime()) ? curr : prev)
        }).close,
    }
    return {
        nearest,
    }
}
const isOpenInterval = (market: any, interval: any) => {
    const open = parseDate(interval.open)
    const close = parseDate(interval.close)
    let hour = market.time.hour >= open.hour && market.time.hour <= close.hour
    let minute = false
    if (hour) {
        if (market.time.hour === open.hour) {
            minute = market.time.minute >= open.minute
        }
        if (market.time.hour === close.hour) {
            minute = market.time.minute <= close.minute
        }
        if (market.time.hour > open.hour && market.time.hour < close.hour) {
            minute = true
        }
    }
    return hour && minute
}
const isOpen = (market: any) => {
    return market.schedule.map((interval: any) => ({
        ...interval,
        isopen: isOpenInterval(market, interval)
    }))
}
function playSound() {
    var a = new Audio('./bell.mp3');
    a.play();
}
const NightMode = () => {
    const now = new Date()
    if (now.getHours() > 18 || now.getHours() < 6) {
        document.body.classList.add('bp5-dark')
    } else {
        document.body.classList.remove('bp5-dark')
    }

}
const nearestSecond = () => {
    let now = new Date()
    return now.getTime() - now.setMilliseconds(0)
}
let interval = null as any
setTimeout(() => {
    interval = setInterval(() => {
        let snapshot = hours.value
        let update = Object.keys(marketTitles).reduce((prev: any, curr: any) => {
            let data = {
                id: curr,
                name: marketTitles[curr].name,
                short: marketTitles[curr].short,
                open: false,
                description: '',
                time: parseDate(adjustTime(new Date(), marketTimezoneMap[curr])),
                schedule: marketHoursToDate(curr),
                diff: NearestInterval(curr),
                tto: {
                    open: DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.open),
                    close: DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.close),
                }
            }
            data.schedule = isOpen(data)
            data.open = data.schedule.some((interval: any) => interval.isopen)
            data.description = data.open ? `Market closes in ${DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.close)}` : `Market opens in ${DifereceString(adjustTime(new Date(), marketTimezoneMap[curr]), NearestInterval(curr).nearest.open)}`
            prev[curr] = data
            return prev
        }, {})
        Object.keys(update).forEach((market: any) => {
            if (snapshot[market] && snapshot[market].open !== update[market].open) {
                playSound()
            }
        })
        hours.value = update
        NightMode()
    }, 1000)
}, nearestSecond())
const screenSize = signal({
    width: window.innerWidth,
    height: window.innerHeight,
} as any)
window.addEventListener('resize', () => {
    screenSize.value = {
        width: window.innerWidth,
        height: window.innerHeight,
    }
})
const center = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}
const clockStyle = {
    fontSize: "5em",
    fontWeight: "bold",
}
const nameStyle = {
    display: "flex",
    justifyContent: "between",
    alignItems: "center",
    fontSize: "5em",
    fontWeight: "bold",
}
const descriptionStyle = {
    fontSize: "2em",
}
const cardStyle = {
    width: "30vw",
    margin: "1em",
}
const marketHoursStyle = {
    ...center,
    width: "100%",
}
const MarketClock = ({ market }: any) => {
    return (<>
        <Card interactive style={cardStyle} elevation={2}>
            <div style={center}>
                <div style={nameStyle}>{market.short} <Icon style={{ margin: '0.4em' }} size={50} intent={market.open ? Intent.SUCCESS : Intent.DANGER} icon='time' /></div>
                <div style={clockStyle}>{market.time.hour}:{market.time.minute}:{market.time.second}</div>
                <div style={descriptionStyle}>{market.description}</div>
                <div style={marketHoursStyle}>
                    {market.schedule.map((interval: any) => {
                        const open = parseDate(interval.open)
                        const close = parseDate(interval.close)
                        return (<div style={{
                            width: "100%",
                        }}>
                            <Tag large minimal fill style={{ margin: "0.5em", }} intent={interval.isopen ? Intent.SUCCESS : Intent.DANGER}>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontWeight: "bold",
                                    fontSize: "1.5em",
                                }}>
                                    {open.hour}:{open.minute} - {close.hour}:{close.minute}
                                </div>
                            </Tag>
                        </div>)
                    })}
                </div>
            </div>
        </Card>
    </>)
}

export const App = () => {
    return (<div style={{
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        position: "absolute",
        top: 0,
        left: 0,
    }} className='bp5-card'>

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
        }}>
            {Object.keys(hours.value).map((market: any) => {
                return (<MarketClock market={hours.value[market]} />)
            }
            )}
        </div>
    </div>
    )
}