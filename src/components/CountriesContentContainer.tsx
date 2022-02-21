import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FormVariants } from '../variants/FormVariants';
import { SelectVariants } from '../variants/SelectVariants';
import { Countries } from './CoutriesList';
import CircularProgress from '@mui/material/CircularProgress'
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import * as stateTypes from './../types/StatesType'

const StyledMotionFilterAndSearchDiv = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items:center;
`;
const StyledMotionSearchForm = styled(motion.form)`
    padding: 5px 20px;
    position: relative;
    border-radius: 2.5px;
`;
const StyledMotionSearchIcon = styled(motion.i)``;
const StyledMotionInput = styled(motion.input)`
    margin-left: 20px;
    width: 350px;
    height: 40px;
    border: none;
    outline: none;
    color: inherit;
    background-color: inherit;

    &::placeholder{
        color: ${props => props.theme === 'dark' ? 'white' : ''}
    }

`;
const StyledMotionSelect = styled(motion.div)`
    width: 150px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    background-color: gray;
    cursor: pointer;
`;

const StyledMotionSelectedValue = styled(motion.div)`
    width: inherit;
    height: 40px;
    padding-inline: 10px;
    display: flex;
    justify-content: space-between;
    align-items:center;
`

const StyledMotionOptionsContainer = styled(motion.div)`
    margin-top: 5px;
    background-color: #999;
    width: inherit;
    border-radius: 5px;
    background-color: inherit; 
    position: relative;
    z-index: 1234;

    &.close{
        transform: scaleY(0);
        transform-origin: top;    
    }

`

const StyledMotionOption = styled(motion.div)`
    border: none;
    padding: 10px;
    border-radius: 5px;

    &:hover{
        background-color: ${props => props.theme === 'light' ? 'hsl(0, 0%, 95%)' : 'hsl(209, 23%, 20%)'};
    }

`;
const StyledMotionH1 = styled(motion.h1)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyledMotionCountriesDiv = styled(motion.div)``;

export const CountriesContentContainer = () => {
    const optionContainerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [currentSelectValue, setCurrentSelectValue] = useState<string>('All');
    const [countries, setCountries] = useState<Array<object> | string>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const theme = useSelector((state: stateTypes.MainState) => state.ThemeSwitcher.currentTheme);
    let value: ReturnType<typeof setTimeout>;

    useEffect(() => {
        getAllCountries()
    }, [])

    useEffect(() => {
        filter();
    }, [currentSelectValue])

    function getAllCountries() {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(result => setCountries(() => result));
                }
            })
    }


    function filter(): void | boolean {

        setCountries(() => []);
        if (searchInputRef.current?.value) {
            fetch(`https://restcountries.com/v3.1/name/${searchInputRef.current?.value}`)
                .then(response => {
                    if (response.ok) {
                        response.json()
                            .then(result => {

                                if (currentSelectValue.toLowerCase() === 'all') {
                                    setCountries(() => result);
                                    return true;
                                }
                                const foundCountriesInTheRegion: Array<object> = [];

                                for (let country of result) {
                                    if (country.region.toLowerCase().includes(currentSelectValue.toLowerCase())) {
                                        foundCountriesInTheRegion.push(country);
                                    }
                                }
                                setCountries(() => foundCountriesInTheRegion.length ? foundCountriesInTheRegion : 'Not found!');
                            })
                    } else {
                        alert('Error!');
                    }
                })
        } else {

            if (currentSelectValue.toLowerCase() === 'all' || currentSelectValue.toLowerCase() === 'all') {
                getAllCountries()
            } else {
                fetch(`https://restcountries.com/v3.1/region/${currentSelectValue}`)
                    .then(response => {
                        if (response.ok) {
                            response.json()
                                .then(result => setCountries(() => result))
                        }
                    })
            }
        }
        setCurrentPage(() => 1);
    }


    function searchInputHandler() {
        if (value) {
            clearTimeout(value);
        }


        value = setTimeout(() => filter(), 500);
    }

    return (
        <>
            <StyledMotionFilterAndSearchDiv>
                <StyledMotionSearchForm
                    animate={theme}
                    variants={FormVariants}
                >
                    <StyledMotionSearchIcon
                        className='bi bi-search'
                    />
                    <StyledMotionInput
                        placeholder='Search for a country'
                        ref={searchInputRef}
                        onChange={() => searchInputHandler()}
                        theme={theme}
                    />
                </StyledMotionSearchForm>
                <StyledMotionSelect
                    animate={theme}
                    variants={SelectVariants}
                    onClick={() => optionContainerRef.current?.classList.toggle('close')}
                >
                    <StyledMotionSelectedValue className="selected_value">
                        {currentSelectValue}
                        <i className="bi bi-chevron-down"></i>
                    </StyledMotionSelectedValue>
                    <StyledMotionOptionsContainer
                        ref={optionContainerRef}
                        className="options-container close"
                    >
                        <StyledMotionOption
                            theme={theme}
                            onClick={() => setCurrentSelectValue(() => 'All')}
                        >All</StyledMotionOption>
                        <StyledMotionOption
                            theme={theme}
                            onClick={() => setCurrentSelectValue(() => 'Africa')}
                        >Africa</StyledMotionOption>
                        <StyledMotionOption
                            theme={theme}
                            onClick={() => setCurrentSelectValue(() => 'America')}
                        >America</StyledMotionOption>
                        <StyledMotionOption
                            theme={theme}
                            onClick={() => setCurrentSelectValue(() => 'Asia')}
                        >Asia</StyledMotionOption>
                        <StyledMotionOption
                            theme={theme}
                            onClick={() => setCurrentSelectValue(() => 'Europe')}
                        >Europe</StyledMotionOption>
                        <StyledMotionOption
                            theme={theme}
                            onClick={() => setCurrentSelectValue(() => 'Oceania')}
                        >Oceania</StyledMotionOption>

                    </StyledMotionOptionsContainer>
                </StyledMotionSelect>
            </StyledMotionFilterAndSearchDiv>
            <StyledMotionCountriesDiv>
                {

                    Array.isArray(countries) &&
                    !!countries.length &&
                    <Box
                        sx={{
                            marginTop: '20px',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Pagination
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, .2)',
                                color: "white",
                                borderRadius: '5px'
                            }}
                            count={Math.ceil(countries.length / 8)}
                            shape='rounded'
                            color='primary'
                            defaultPage={1}
                            page={currentPage}
                            onChange={(_, value) => setCurrentPage(() => value)}
                        />
                    </Box>
                }

                {
                    !Array.isArray(countries) && <StyledMotionH1>{countries}</StyledMotionH1>
                }

                {
                    Array.isArray(countries) && !!countries.length && <Countries
                        countries={countries}
                        page={currentPage}
                    />
                }
                {
                    !countries.length && <CircularProgress
                        sx={
                            {
                                left: ' 50%',
                                position: 'absolute',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }
                        }
                    />
                }



            </StyledMotionCountriesDiv>
        </>
    )
}