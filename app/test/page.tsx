"use client";

import { useState } from "react";
import Dexie, { type EntityTable } from "dexie";

interface Friend {
    id: number;
    name: string;
    age: number;
}

const db = new Dexie("FriendsDatabase") as Dexie & {
    friends: EntityTable<
        Friend,
        "id" // primary key "id" (for the typings only)
    >;
};

// Schema declaration:
db.version(1).stores({
    friends: "++id, name, age", // primary key "id" (for the runtime!)
});

export default function page({ defaultAge } = { defaultAge: 21 }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(defaultAge);
    const [status, setStatus] = useState("");

    async function getAndModifyPerson() {
        try {
            const person = await db.friends.get(1);
            if (person) {
                person.name = "tan";

                await db.friends.put(person);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function addFriend() {
        try {
            // Add the new friend!
            const id = await db.friends.add({
                name,
                age,
            });

            setStatus(`Friend ${name} successfully added. Got id ${id}`);
            setName("");
            setAge(defaultAge);
        } catch (error) {
            setStatus(`Failed to add ${name}: ${error}`);
        }
    }

    return (
        <>
            <p>{status}</p>
            Name:
            <input
                type="text"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
            />
            Age:
            <input
                type="number"
                value={age}
                onChange={(ev) => setAge(Number(ev.target.value))}
            />
            <button onClick={addFriend}>Add</button>
            <button onClick={getAndModifyPerson}>Change</button>
        </>
    );
}
