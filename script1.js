let selectedOption = null;
const optionCards = document.querySelectorAll('.option-card');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('evoTrackerForm');

// Handle option selection
optionCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove previous selection
        optionCards.forEach(c => c.classList.remove('selected'));
        
        // Select current card
        card.classList.add('selected');
        selectedOption = card.dataset.value;
        
        // Enable submit button
        submitBtn.disabled = false;
    });
});

// Handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (selectedOption) {
        // Here you would typically send the data to your backend
        const formData = {
            role: selectedOption
        };
        
        console.log('Form submitted:', formData);
        
        // Show success message (you can customize this)
        alert(`Welcome! You've been registered as a ${formData.role}.`);
        
        // Reset form
        optionCards.forEach(c => c.classList.remove('selected'));
        selectedOption = null;
        submitBtn.disabled = true;
    }
});
