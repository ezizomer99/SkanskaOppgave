
document.getElementById("calculateBtn").addEventListener("click", function() {
let amountOfSunday = 0;

for (let year = 1901; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
        let date = new Date(year, month, 1);
        if (date.getDay() === 0) { // 0 is Sunday, 1 is Monday, etc.
            amountOfSunday++;
        }
    }
}

document.getElementById("result").innerHTML = `Antall ganger der søndag var den første dagen i måneden fra perioden 1901-2000: ${amountOfSunday}`;
});
