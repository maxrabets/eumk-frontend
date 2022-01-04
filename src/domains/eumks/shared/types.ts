export interface IEumkSection {
    name: string;
    required?: boolean;
    parent?: IEumkFolder;
}

export interface IEumkFolder extends IEumkSection {
    items: IEumkSection[];
}
