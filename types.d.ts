

interface SearchRecord
{
    url?: string;
    content?: string;
    title?: string;
    type?: string;
    category?: number;
    order?: number;

    extend?: string;
}

interface SiteMap
{
    [key: string]: Type;
}

interface Type
{
    name: string;
    categories?: Category[];
}

interface Category
{
    [key: string]: number | (number | Category)[]
}