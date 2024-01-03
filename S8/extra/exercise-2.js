const getNotes = async () => {
    try {
        const response = await fetch('http://localhost:3000/diary');
        const notes = await response.json();
        console.log(notes);
        return notes;
    } catch (error) {
        console.log(error);
    }
}

const sortNotes = (notes) => {
    notes.sort((a , b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateA - dateB;
    });
}

const paintNotes = (notes) => {
    const libreta$$ = document.querySelector('.libreta');
    for (const note of notes) {
        const page$$ = document.createElement('div');
        page$$.classList.add('page');
        page$$.innerHTML = `
            <h3>${note.title}</h3>
            <h5>${note.date}</h5>
            <p>${note.description}</p>
            <button class="delete-btn">BORRAR</button>
        `
        libreta$$.appendChild(page$$);
        const deleteBtn$$ = page$$.querySelector('.delete-btn');
        deleteBtn$$.addEventListener('click', () => page$$.innerHTML = '');
    }
}

const nextPage = (current) => {
    current.classList.add('turn');
}

const init = async () => {
    const notes = await getNotes();
    sortNotes(notes);
    paintNotes(notes);
}

init();