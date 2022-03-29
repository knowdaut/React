export const utcConverter = (utcTime) =>  {
    const d = new Date(0);
    d.setUTCSeconds(utcTime)
    const d2 = d.getDay()
    return d2;
}

export const dayConverter = (dayNum) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayNum]
}