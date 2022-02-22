export interface Country {
    name: {
        common: string,
        official: string
    },
    flags: {
        png: string,
        svg: string
    },
    population: number,
    region: string,
    subregion: string,
    capital: Array<string>,
    tld: Array<string>,
    currencies: {
        [key: string]: {
            name: string,
            symbol: string
        }
    },
    languages: Object,

}