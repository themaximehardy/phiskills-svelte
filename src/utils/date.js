const months = Array.from({
    length: 12
}, (e, i) => {
    return new Date(null, i + 1, null).toLocaleDateString("en", {
        month: "short"
    });
})

export function getDate(d) {
    const date = new Date(d.replace(' ', 'T'))
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}