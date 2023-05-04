import { openDB } from 'idb';

const initdb = async () =>
// Creating a new db names 'jate' which will use version 1 of the db
  openDB('jate', 1, {
    // add db schema if it hasn't already been initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store with a key path (which gives it a name of 'id') which auto increments automatically
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => { 
  console.error('putDb not implemented');

  // create a connection to the database and a version we want to use
  const contentDb = await openDB('jate', 1);

  // create a transaction to write to the database
  const tx = contentDb.transaction('jate', 'readwrite');

  // create a reference to and open the object store
  const store = tx.objectStore('jate');

  // use .put() to insert or update a record in the database
  // *********** figure out what to put in store.put() ****!
  const request = store.put({ id: id, todo: content });

  const result = await request;
  console.log('content saved!', result);

};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  // creates a connection to the database and a version we want to use
  const contactDb = await openDB('jate', 1);

  // create a transaction to read from the database
  const tx = contactDb.transaction('jate', 'readonly');

  // open desired object store
  const store = tx.objectStore('jate');

  // use .getAll() to get all the records from the database
  const request = store.getAll();

  const result = await request;
  console.log('content retrieved!', result);
  return result;

};

initdb();
