import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import * as stateTypes from './../types/StatesType'


const StyledMotionCountryDescriptionContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 86vh;
`;
const StyledMotionCountryDescriptionTitle = styled(motion.h1)`
    font-size: 3rem
`;

export const CountryDescription = () => {
    const { country } = useParams();
    const theme = useSelector((state: stateTypes.MainState) => state.ThemeSwitcher.currentTheme);

    return (
        <StyledMotionCountryDescriptionContainer
            animate={theme}
        >
            <StyledMotionCountryDescriptionTitle>
                {country}
            </StyledMotionCountryDescriptionTitle>
        </StyledMotionCountryDescriptionContainer>
    )
}