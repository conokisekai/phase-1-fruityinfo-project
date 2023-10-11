document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');

    // Event listener for the search input
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim().toLowerCase();
        console.log(`User is searching for: ${query}`);
        // You can add more functionality here, such as searching for fruits and displaying results.
    });
});