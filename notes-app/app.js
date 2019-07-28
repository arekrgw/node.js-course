
const chalk = require("chalk")
const notes = require("./notes");
const yargs = require("yargs");
const fs = require("fs");

yargs.command({
    command: "list",
    describe: "Listing out your notes...",
    handler() {
        notes.getNotes();
    }
})

yargs.command({
    command: "read",
    describe: "Read your specified note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Body of a note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.parse();
// console.log(yargs.argv);