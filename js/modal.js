class Modal {
    constructor() {
        this.modal = document.getElementById('yogaModal');
        this.closeButton = document.querySelector('.close-button');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalContent = document.getElementById('modalContent');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.closeButton.addEventListener('click', () => this.close());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    open(yogaType) {
        this.modalTitle.textContent = yogaType.name;
        this.modalContent.innerHTML = this.generatePosesHTML(yogaType.poses);
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    generatePosesHTML(poses) {
        return poses.map(pose => `
            <div class="pose-card">
                <img src="${pose.image}" alt="${pose.name}" class="pose-image">
                <div class="pose-content">
                    <h3>${pose.name}</h3>
                    <ol class="steps-list">
                        ${pose.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `).join('');
    }
}