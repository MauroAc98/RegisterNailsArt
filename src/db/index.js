import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('hours.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS hours (id INTEGER PRIMARY KEY NOT NULL,hour TEXT NOT NULL UNIQUE)",
                [],
                () => {
                    tx.executeSql(
                        "CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY NOT NULL, image TEXT NOT NULL, id_turn TEXT NOT NULL)",
                        [],
                        () => {
                            resolve();
                        },
                        (_, err) => {
                            reject(err);
                        }
                    );
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const insertImageTurn = (image,id_turn) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO images (image,id_turn) VALUES (?,?)",
                [image,id_turn],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }

            );
        });
    });
    return promise;
}

export const insertHour = (hour) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO hours (hour) VALUES (?)",
                [hour],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }

            );
        });
    });
    return promise;
}

export const deleteHour = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM hours where id=(?)",
                [id],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }

            );
        });
    });
    return promise;
}

export const selectHours = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM hours",
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }

            );
        });
    });
    return promise;
}