document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".loginBtn").addEventListener("click", calculateAge);
});

function calculateAge() {
    let birthdateInput = document.getElementById("birthdate").value;
    let currentdateInput = document.getElementById("currentdate").value;
    let resultDiv = document.getElementById("result");

    if (!birthdateInput || !currentdateInput) {
        resultDiv.innerHTML = "⚠️ Please select both dates.";
        return;
    }

    let birthDate = new Date(birthdateInput);
    let currentDate = new Date(currentdateInput);

    if (birthDate > currentDate) {
        resultDiv.innerHTML = "⚠️ Birthdate cannot be after the current date!";
        return;
    }

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    resultDiv.innerHTML = `You are <strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days old.`;
}
