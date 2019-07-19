
const chalk = require("chalk")
const notes = require("./notes");
const yargs = require("yargs");
const fs = require("fs");

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
    handler: function (argv) {
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
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler: function () {
        console.log("List of all notes");
    }
})

yargs.command({
    command: "read",
    describe: "Reading a particular note",
    handler: function () {
        console.log("Reading a note");
    }
})

yargs.parse();
// console.log(yargs.argv);