import Dexie, { EntityTable } from "dexie";

interface ChapterData {
    id: number;
    curGrade: number;
    curChapter: number;
}

const db = new Dexie("EThemsDatabase") as Dexie & {
    chapterData: EntityTable<
        ChapterData,
        "id" // primary key "id" (for the typings only)
    >;
};

// Schema declaration:
db.version(1).stores({
    chapterData: "id, curGrade, curChapter", // primary key "id" (for the runtime!)
});

export { db };
