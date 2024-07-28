function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth');
        return;
    }
    const dobDate = new Date(dob);
    const now = new Date();
    let age = now.getFullYear() - dobDate.getFullYear();
    const monthDiff = now.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerText = `Your age is ${age} years old`;
}