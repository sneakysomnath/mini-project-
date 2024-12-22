document.addEventListener('DOMContentLoaded', () => {
    const modal = new Modal();
    const yogaGrid = document.getElementById('yogaGrid');

    function createYogaCard(yogaType) {
        const card = document.createElement('div');
        card.className = 'yoga-card';
        card.innerHTML = `
            <img src="${yogaType.image}" alt="${yogaType.name}">
            <div class="yoga-card-content">
                <h3>${yogaType.name}</h3>
                <p>${yogaType.description}</p>
                <ul class="benefits-list">
                    ${yogaType.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                </ul>
            </div>
        `;

        card.addEventListener('click', () => modal.open(yogaType));
        return card;
    }

    // Render yoga cards
    yogaTypes.forEach(yogaType => {
        yogaGrid.appendChild(createYogaCard(yogaType));
    });
});