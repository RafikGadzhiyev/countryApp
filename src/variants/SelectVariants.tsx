import { Variants } from "framer-motion";

export const SelectVariants: Variants = {
    'light': {
        color: 'hsl(200, 15%, 8%)',
        backgroundColor: 'hsl(0, 0%, 100%)',
        boxShadow: '0 0 6px -2px hsl(0, 0%, 52%)'
    },
    'dark': {
        backgroundColor: 'hsl(209, 23%, 22%)',
        color: 'hsl(0, 0, 100%)',
        boxShadow: "0px 0px 10px -4px #222"
    }
}


export const SelectOptionValues: Variants = {
    'closed': {
        scaleY: 0
    },
    'opened': {
        scaleY: 1
    }
}