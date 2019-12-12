

interface SearchRecord {
    url?: string;
    lang?: string;
    content?: string;
    title?: string;
    type?: string;
    category?: number;
    order?: number;

    extend?: string;
}

interface LocString {
    [lang: string]: string
}

interface SiteMap {
    [key: string]: Type;
}

interface Type {
    name: LocString;
    categories?: Category[];
}

interface Category {
    name: LocString;
    categories?: Category[];
    order?: number | number[]
}