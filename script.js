function updateExperienceCounter(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    // Adjusting if the current month is earlier in the year
    if (months < 0) {
        years--;
        months += 12;
    }

    const decimalYears = years + (months / 12);

    // Update the counter dynamically
    const counterElement = document.getElementById("experience-counter");
    counterElement.textContent = decimalYears.toFixed(1) + " years";
}

updateExperienceCounter("2015-01-19");

