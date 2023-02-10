import {useEffect} from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('dbName');

export default function dto() {
    const createDB = () => {
        db.transaction(
            txn => {
                txn.executeSql('create table if not exists paintings (id integer primary key not null, uri text)', [],
                    (t, res) => {
                        console.log("create select ", res)
                    },
                    (error) => {
                        console.log("error create ", error)
                    }
                );
            }     
        )
    }

    const insert = () => {
        db.transaction(
            txn => {
                txn.executeSql('insert into paintings (done, value) values (0, "dsadsa");', [],
                    (t, res) => {
                        console.log("insert select ", res)
                    },
                    (error) => {
                        console.log("error insert ", error)
                    }
                );
            }     
        )
    }

    const selectPaintings = () => {
        db.transaction(
            txn => {
                txn.executeSql('select * from paintings;', [],
                    (t, res) => {
                        console.log("result select ", res)
                    },
                    (error) => {
                        console.log("error select ", error)
                    }
                );
            }     
        )
    }

    useEffect(() => {
        createDB();
        console.log("create table")
      }, [])

    return [insert, selectPaintings];
}