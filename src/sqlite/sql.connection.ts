import SQLite from 'react-native-sqlite-storage';

function errorCB(err: any) {
  console.log('SQL Error: ' + err);
}

function successCB() {
  console.log('SQL executed fine');
}

function openCB() {
  console.log('Database OPENED');
}

export const init = () => {
  return new Promise(async (resolve, reject) => {
    const db = await SQLite.openDatabase(
      {
        name: 'places.db',
        createFromLocation: '~places.db',
        location: 'Library',
      },
      openCB,
      errorCB
    );
    await db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL)',
        [],
        () => {
          resolve(true);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export function insertPlace(
  name: string,
  image: string,
  address: string,
  latitude: string,
  longitude: string
): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const db = await SQLite.openDatabase(
      {
        name: 'places.db',
        createFromLocation: '~places.db',
        location: 'Library',
      },
      openCB,
      errorCB
    );
    await db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO places (name, image, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)',
        [name, image, address, latitude, longitude],
        (_, result) => {
          console.log('inserted', result, _);
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
}

export const fetchPlaces = () => {
  console.log('===FETCH PLACES====');
  return new Promise(async (resolve, reject) => {
    console.log('===FETCH PLACES==== PROMISE');
    const db = await SQLite.openDatabase(
      {
        name: 'places.db',
        createFromLocation: '~places.db',
        location: 'Library',
      },
      openCB,
      errorCB
    );
    console.log('===FETCH PLACES==== OPENDB', db);
    await db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          let data = [];
          let len = result.rows.length;
          for (let i = 0; i < len; i++) {
            let row = result.rows.item(i);
            data.push(row);
          }
          console.log('fetching...', data);
          resolve(data);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};
