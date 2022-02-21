import { Routes, Route } from 'react-router-dom';
import * as stateTypes from './../types/StatesType'
import styled from 'styled-components';
import { motion } from "framer-motion"
import { MainVariants } from "../variants/MainVariants";
import { useSelector } from "react-redux";
import { CountriesContentContainer } from './CountriesContentContainer';
import { CountryDescription } from './CountryDescription';


const StyledMotionMain = styled(motion.main)`
    width: 100%;
    min-height: 93.7vh;
    padding: 35px 60px
`;


export const Main = () => {
    const theme = useSelector((state: stateTypes.MainState) => state.ThemeSwitcher.currentTheme);

    return (
        <StyledMotionMain
            animate={theme}
            variants={MainVariants}
        >
            <Routes>
                <Route path='/' element={<CountriesContentContainer />} />
                <Route path='/country_description/:country' element={<CountryDescription />} />
            </Routes>
        </StyledMotionMain>
    )
}

