const fs = require("fs");
const chalk = require("chalk")


const readNote = (title) => {
    const notes = loadNotes();

    const foundedNote = notes.find(note => title === note.title);

    if(foundedNote) {
        console.log(`${chalk.green.inverse("Your note:")}\n${chalk.green("Title:")} ${foundedNote.title}\n${chalk.green("Body:")} ${foundedNote.body}`);
    }
    else {
        console.log(chalk.red.inverse("No note found"));
    }
    
}

const getNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green.inverse("Your all notes"));

    notes.map((note, index) => console.log(`${chalk.red(`Note nr ${index+1}`)}\n${chalk.yellow("Title:")} ${note.title}\n${chalk.green("Body:")} ${note.body} \n`));
}



const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote) {
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

    const notesToKeep = notes.filter(note => note.title !== title);

    if(notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse("Wrong note title. Did not remove anything"));
    } 
    else
    {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse(`Note with title:`,chalk.yellow.inverse(title), `has been removed`));
    }
}

const saveNotes = (notes) => fs.writeFileSync("notes.json", JSON.stringify(notes));


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
    removeNote,
    readNote
}