const fs = require("fs");
const chalk = require("chalk")


const getNotes = () => "Your notes...";



const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        const newNotes = [{title, body}, ...notes]
        saveNotes(newNotes);
        console.log(chalk.green.inverse("New note added"));
    }
    else {
        console.log(chalk.red.inverse("Note title already in use"));
    }
    
}
 
const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => {
        return note.title !== title
    });

    if(notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse("Wrong note title. Did not remove anything"));
    } 
    else
    {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse(`Note with title:`,chalk.yellow.inverse(title), `has been removed`));
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
}

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync("notes.json");
        const notes = JSON.parse(notesBuffer.toString());
        return notes;
    }
    catch(e) {
        return [];
    }
   
}
module.exports = {
    addNote,
    getNotes,
    removeNote
}