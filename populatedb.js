const mongoose = require('mongoose');
const Note = require('./api/models/Note');

const db = 'mongodb://localhost/api/notes';
//const db = 'mongodb://localhost/helldb';

const users =
{
  "count":3,
  "notes": [
    {
      "title":"Nota2",
      "text":"Soy la segunda nota oficial",
      "details": {
        "method":"GET",
        "url":"http://localhost:3000/api/notes/5f5bcf62164f71233057ecc6"
      }
    },
    {
      "title":"Nota1",
      "text":"Soy la primera nota oficial",
      "details": {
        "method":"GET",
        "url":"http://localhost:3000/api/notes/5f5bcf15164f71233057ecc5"
      }
    },
    {
      "title":"Nota de prueba",
      "text":"Soy una nueva nota",
      "details": {
        "method":"GET",
        "url":"http://localhost:3000/api/notes/5f5bcecd164f71233057ecc4"
      }
      }
    ],
      "create": {
        "method":"POST",
        "url":"http://localhost:3000/api/notes"
      }
}

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect (db, { useNewUrlParser: true})
  .then (() => {
      console.log( `DB connected @ ${db}` );
      console.log( 'Populating DB...' );
      Note.insertMany(notes, (err, notes) =>{
          if (err) throw err;

          console.log(`$ {notes.length} documents inserted! `);

          mongoose.connection.close();
      } );
  })
.catch(err => console.error( `Connection error ${err}` ) );
