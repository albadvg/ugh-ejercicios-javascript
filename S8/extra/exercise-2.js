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
    for (const note of notes) {
        const div$$ = document.createElement('div');
        const h3$$ = document.createElement('h3');
        const h5$$ = document.createElement('h5');
        const p$$ = document.createElement('p');
        const deleteButton$$ = document.createElement('button');

        h3$$.textContent = note.title;
        h5$$.textContent = note.date;
        p$$.textContent = note.description;
        deleteButton$$.textContent = 'BORRAR';

        deleteButton$$.addEventListener('click', () => div$$.remove());

        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        div$$.appendChild(deleteButton$$);

        document.body.appendChild(div$$);
    }
}

const init = async () => {
    const notes = await getNotes();
    sortNotes(notes);
    paintNotes(notes);
}

init();