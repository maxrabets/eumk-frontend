import { IEUMK, ISubject, ISubjectPreview } from "./type";

const sections = [
    {
        name: "Титульный лист",
        id: "1",
        content: "Содержимое титульного листа",
    },
    {
        name: "Лабораторные работы",
        id: "2",
        content: "Содержимое Лабораторные работы",
    },
    {
        name: "Лекции",
        id: "3",
        content: "Содержимое лекций",
    },
];

const oopEUMK = {
    name: "ООП для студентов БНТУ",
    id: "2",
    sections,
};

const dbEUMK = {
    name: "Базы данных ЭУМК",
    id: "1",
    sections,
};

const webEUMK = {
    name: "Разработка веб приложений",
    id: "3",
    sections,
};

const eumks = [ oopEUMK, dbEUMK, webEUMK ];

const subjects = [
    {
        name: "ООП",
        id: "1",
        eumks: [
            oopEUMK,
        ],
    },
    {
        name: "БД",
        id: "2",
        eumks: [
            dbEUMK,
        ],
    },
    {
        name: "Разработка веб-приложений",
        id: "3",
        eumks: [
            webEUMK,
        ],
    },
];

export class SubjectsService {
    getSubjects(): ISubjectPreview[] {
        return subjects.map(subject => {
            return { name: subject.name, id: subject.id };
        });
    }

    getSubject(id: string): ISubject | null {
        const subject = subjects.find(subject => subject.id === id);
        if (!subject) {
            return null;
        }

        return subject;
    }

    getEUMK(id: string): IEUMK | null {
        const eumk = eumks.find(eumk => eumk.id === id);
        if (!eumk) {
            return null;
        }

        return eumk;
    }
}

const subjectsService = new SubjectsService();
export default subjectsService;
