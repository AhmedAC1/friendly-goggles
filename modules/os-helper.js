const pausedDate = new Date()

const os = {
  date: {
    year() {
      return new Date().getFullYear()
    },
    month() {
      return new Date().getMonth()
    },
    fullDate() {
      return new Date().getDate()
    },
    day() {
      return new Date().getDay()
    },
    hour(isMilitaryTime) {
      const PM = new Date().getHours() >= 12;
      const ampm = PM
        ? "PM"
        : "AM";
      return isMilitaryTime
        ? new Date().getHours()
        : (new Date().getHours() % 12 || 12) + " " + ampm;
    }
  }
}

export { pausedDate, os }
