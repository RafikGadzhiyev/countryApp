import { Link } from 'react-router-dom';
import *  as stateTypes from './../types/StatesType'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { HeaderVariants } from '../variants/HeaderVariants';
import { useSelector, useDispatch } from 'react-redux';
import { DarkMode, LightMode } from '../redux/actions/Theme.action';

const StyledMotionHeader = styled(motion.header)`
    padding: 15px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width: 480px){
        padding-inline: 20px;
    }

`

const StyledMotionButton = styled(motion.button)`
    border: none;
    outline: none;
    background: transparent;
    color: inherit;
    cursor: pointer;
    text-transform: capitalize;
`

const StyledMotionIcon = styled(motion.i)`
    margin-right: 10px;
`

const StyledMotionH1 = styled(motion.h1)`
    font-size: 25px;
    
    @media screen and (max-width: 555px){
        font-size: 20px;
    }

    @media screen and (max-width: 350px){
        font-size: 16px;
    }

`

export const Header = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: stateTypes.MainState) => state);

    return (
        <StyledMotionHeader
            className='header_content-container'
            animate={state.ThemeSwitcher.currentTheme}
            variants={HeaderVariants}
        >
            <Link to='/'>
                <StyledMotionH1 className='header_content-title'>Where in the world?</StyledMotionH1>
            </Link>
            <StyledMotionButton
                className='header_content-toggle_theme-button'
                onClick={() => dispatch(state.ThemeSwitcher.currentTheme === 'light' ? DarkMode() : LightMode())}
            >
                <StyledMotionIcon className='bi bi-moon-fill moon-icon'></StyledMotionIcon>
                Dark mode
            </StyledMotionButton>
        </StyledMotionHeader >
    )
}