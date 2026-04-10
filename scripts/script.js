const cardsContainer = document.querySelector('#cards-container');

const cardTemplate = `
    <div class="col">
        <div class="card h-100 border-0 shadow-sm bg-dark text-white overflow-hidden">
            <div class="row g-0 h-100">
                <div class="col-4">
                    <img src="https://picsum.photos/300/300"
                        class="img-fluid rounded-start h-100 object-fit-cover" alt="Nome Membro">
                </div>
                <div class="col-8 d-flex align-items-center">
                    <div class="card-body">
                        <p class="card-title fw-bold mb-1">Wayne Barnett</p>
                        <p class="card-text text-secondary small mb-2">Founder & CEO</p>
                        <p class="card-text">
                            <a href="mailto:wayne.barnett@team.com"
                                class="text-info text-decoration-none small">
                                wayne.barnett@team.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

`
