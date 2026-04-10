const cardsContainer = document.querySelector('#cards-container');
// Per il form
const newMemberForm = document.querySelector('#team-form');

// Template HTML da iniettare

function teamMemberInjector (membro) {
    // Creo un accumulatore !! Assegnato valore zero altrimenti mi riporta un undefined perchè non inizializzata
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

// Richiamo la funzione per iniettare i membri
teamMemberInjector(teamMembers);

// Oggetto di appoggio per il nuovo membro
let nuovoMembro = {
    name: "",
    role: "",
    email: "",
    img: ""
};

// Funzione per accumulare nuovi membri
function getNewMember () {
    return {
    // Collego variabili col form
    name: document.querySelector('#name').value,
    role: document.querySelector('#role').value,
    email: document.querySelector('#email').value,
    img: document.querySelector('#img').value
    };
}

// Funzione di iniezione
function newMemberInjector() {
    // Popolo l'oggetto
    nuovoMembro = getNewMember();

    // Aggiorno teamMembers
    teamMembers.push(nuovoMembro);

    // Richiamo la funzione
    teamMemberInjector(teamMembers);

}

// Event Listener
newMemberForm.addEventListener('submit', (event) => {
    event.preventDefault();
    newMemberInjector();
});