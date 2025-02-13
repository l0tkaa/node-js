const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


// Customize yargs version
yargs.version('1.1.1')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ', argv.title)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note', 
    handler: function(){
        console.log('Removing the note!')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes', 
    handler: function(){
        console.log('Listing all notes!')
    }
})

yargs.command({
    command: 'read',
    describe: 'print specified notes',
    handler: function(){
        console.log('Printing specified notes')
    }
})



// add, remove, read, list


yargs.parse()


