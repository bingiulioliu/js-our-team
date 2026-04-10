const cardsContainer = document.querySelector('#cards-container');


// Template HTML da iniettare

function teamMemberInjector (membro) {
    // Creo un accumulatore
    let accumulatoreMembri = '';
    for (const membro of teamMembers) {
        // Template HTML da iniettare
        const cardTemplate = `
            <div class="col">
                <div class="card h-100 border-0 shadow-sm bg-dark text-white overflow-hidden">
                    <div class="row g-0 h-100">
                        <div class="col-4">
                            <img src="${membro.img}"
                                class="img-fluid rounded-start h-100 object-fit-cover" alt="${membro.name}">
                        </div>
                        <div class="col-8 d-flex align-items-center">
                            <div class="card-body">
                                <p class="card-title fw-bold mb-1">${membro.name}</p>
                                <p class="card-text text-secondary small mb-2">${membro.role}</p>
                                <p class="card-text">
                                    <a href="mailto:${membro.email}"
                                        class="text-info text-decoration-none small">
                                        ${membro.email}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Per ogni ciclo, aggiungo una carta all'accumulatore
        accumulatoreMembri += cardTemplate;
    }
    // Inietto l'accumulatore nel card-container
    cardsContainer.innerHTML = accumulatoreMembri;
}

teamMemberInjector(teamMembers);