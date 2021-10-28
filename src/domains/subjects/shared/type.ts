export interface ISection {
    name: string;
    id: string;
    content: string;
}

export interface ISubject {
    name: string;
    id: string;
    eumks: IEUMK[];
}

export interface IEUMK {
    name: string;
    id: string;
    sections: ISection[];
}

export interface ISubjectPreview {
    name: string;
    id: string;
}

export interface IEUMKPreview {
    name: string;
    id: string;
}
