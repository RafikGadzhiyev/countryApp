import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { CountryVariants, CountryInfoVariants } from '../variants/CountryVariants'
import { useSelector } from 'react-redux'
import * as stateTypes from './../types/StatesType'

const StyledMotionCountry = styled(motion.li)`
    border-radius: 5px;
    overflow: hidden;
    width: min-content;
`
const StyledMotionCountryFlag = styled(motion.img)`
    width: 400px;
    height: 250px;

    @media screen and (max-width: 550px){
        width: 250px;
        height: 150px;
    }

`
const StyledMotionCountryName = styled(motion.h4)`
    margin-bottom: 10px;
`;
const StyledMotionCountryInformationContainer = styled(motion.div)`
    padding: 20px;
`;
const StyledMotionCountryInformationP = styled(motion.p)`
    font-size: 14px;
    margin-bottom: 10px;
`;
const StyledMotionCountryInformationB = styled(motion.b)`
    margin-right: 5px;
`;

export const Country = (props: { country: any }) => {
    const state = useSelector((state: stateTypes.MainState) => state);

    return <StyledMotionCountry
        animate={state.ThemeSwitcher.currentTheme}
        variants={CountryVariants}
    >
        <StyledMotionCountryFlag
            src={props.country.flags.png}
        />
        <StyledMotionCountryInformationContainer>
            <Link
                to={`/country_description/${props.country.cca2}`}
            >
                <StyledMotionCountryName>{props.country.name.common}</StyledMotionCountryName>
            </Link>
            <StyledMotionCountryInformationP>
                <StyledMotionCountryInformationB>
                    Population:
                </StyledMotionCountryInformationB>
                <motion.span
                    animate={state.ThemeSwitcher.currentTheme}
                    variants={CountryInfoVariants}
                >
                    {props.country.population.toLocaleString()}
                </motion.span>
            </StyledMotionCountryInformationP>
            <StyledMotionCountryInformationP>
                <StyledMotionCountryInformationB>
                    Region:
                </StyledMotionCountryInformationB>
                <motion.span
                    animate={state.ThemeSwitcher.currentTheme}
                    variants={CountryInfoVariants}
                >
                    {props.country.region}
                </motion.span>
            </StyledMotionCountryInformationP>
            <StyledMotionCountryInformationP>
                <StyledMotionCountryInformationB>
                    Capital:
                </StyledMotionCountryInformationB>
                <motion.span
                    animate={state.ThemeSwitcher.currentTheme}
                    variants={CountryInfoVariants}
                >
                    {props.country.capital}
                </motion.span>
            </StyledMotionCountryInformationP>
        </StyledMotionCountryInformationContainer>
    </StyledMotionCountry>
}