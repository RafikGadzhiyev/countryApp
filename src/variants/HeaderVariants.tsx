import { Variants } from "framer-motion";

export const HeaderVariants: Variants = {
    'light': {
        color: 'hsl(200, 15%, 8%)',
        backgroundColor: 'hsl(0, 0%, 100%)',
        boxShadow: "2px -6px 20px #d7d7d7"
    },
    'dark': {
        backgroundColor: 'hsl(209, 23%, 22%)',
        color: 'hsl(0, 0, 100%)',
        boxShadow: "2px -6px 20px #222"
    }
}