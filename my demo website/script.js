// Function to switch category tabs
function openDemo(evt, demoName) {
    let cards = document.querySelectorAll('.demo-card');
    cards.forEach(card => card.classList.remove('active-card'));

    let buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(demoName).classList.add('active-card');
    evt.currentTarget.classList.add('active');
}

// Function to Show Feature Explanation Modal
function showFeatureModal(title, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('featureModal').style.display = 'flex';
}

// Function to Close Modal
function closeModal() {
    document.getElementById('featureModal').style.display = 'none';
}

// Close Modal if user clicks outside the box
window.onclick = function(event) {
    let modal = document.getElementById('featureModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}