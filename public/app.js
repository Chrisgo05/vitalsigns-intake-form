const form = document.getElementById('patient-info');

form.addEventListener('submit', async function(event){
    event.preventDefault();

    try{
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        data.consent = event.target.consent.checked;

        const response = await fetch('/api/register-patient', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) // Converts JS object to string
        });
        
        const result = await response.json();
        alert(result.message);

        form.reset();

    } catch (error){
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
    }
});


