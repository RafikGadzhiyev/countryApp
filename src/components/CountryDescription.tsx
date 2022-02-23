import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress'
import * as ObjectTypes from './../types/ObjectType'
import * as stateTypes from './../types/StatesType'


const StyledMotionCountryDescriptionContainer = styled(motion.div)`
    min-height: 86vh;
`;

const StyledMotionCountryImageContainer = styled(motion.div)`
    width: 42.5%;
    height: 50%;
`;
const StyledMotionCountryImage = styled(motion.img)`
    width: 650px;
    height: 450px;
`;
const StyledMotionDescriptionContainer = styled(motion.div)``;
const StyledMotionCountryTitle = styled(motion.h2)`
    margin-block: 50px;
    font-size: 1.8rem;
`;
const StyledBorderCountriesContainer = styled.div`
    display: flex;
    gap: 15px;
    align-items:center;
`;

const StyledBorderCountriesButton = styled.button`
    border-radius: 5px;
    padding: 5px 10px;
    border: none;
    outline: none;
    background-color: ${props => props.theme === 'dark' ? '#2B3945' : '#fff'};
    box-shadow: ${props => props.theme === 'dark' ? '' : '0 0 10px 2px #EFEFEF'}
`;
const StyledMotionDescriptionGrid = styled(motion.div)`
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    gap: 10px 150px;
    flex-wrap: wrap;
    height: 150px;
`;
const StyledBackButton = styled.button`
    padding: 5px 15px;
    text-transform: capitalize;
    transition: 400ms ease;
    background-color: ${props => props.theme === 'dark' ? '#2B3945' : '#fff'};
    box-shadow: 0 0 10px  ${props => props.theme === 'dark' ? '#1a1a1a' : '#ddd'};
    border: none;
    outline: none;
    border-radius: 5px;
    letter-spacing: 3px;
    font-size: 1.25rem;
    margin-bottom: 50px;
`;
const StyledP = styled.p``;
const StyledB = styled.b``;
const StyledSpan = styled.span`
    margin-left: 10px;
`;

export const CountryDescription = () => {
    const idGenerator = require('shortid');
    const { country } = useParams();
    const [countryDescription, setCountryDescription] = useState<Array<ObjectTypes.Country>>([]);
    const theme = useSelector((state: stateTypes.MainState) => state.ThemeSwitcher.currentTheme);

    useEffect(() => {
        getCountryDescription();
    }, [country])

    function getCountryDescription(): string | Array<object> {
        fetch(`https://restcountries.com/v3.1/alpha/${country}`)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(result => {
                            setCountryDescription(() => result);
                        })
                }
            })
        return 'not Found'
    }

    return (
        <StyledMotionCountryDescriptionContainer
            animate={theme}
        >
            {!countryDescription[0] && <CircularProgress />}
            {countryDescription[0] &&
                <>
                    <Link to='/'>
                        <StyledBackButton theme={theme}>
                            <i className='bi bi-arrow-left' style={{ marginRight: '10px' }}></i>
                            Back
                        </StyledBackButton>
                    </Link>
                    <div style={{ display: 'flex', width: '100%', }}>
                        <StyledMotionCountryImageContainer>
                            <StyledMotionCountryImage
                                src={countryDescription[0]?.flags.svg}
                            />
                        </StyledMotionCountryImageContainer>
                        <StyledMotionDescriptionContainer>
                            <StyledMotionCountryTitle>
                                {countryDescription[0]?.name.common}
                            </StyledMotionCountryTitle>
                            <StyledMotionDescriptionGrid>
                                <StyledP>
                                    <StyledB>
                                        Official name:
                                    </StyledB>
                                    <StyledSpan>
                                        {countryDescription[0]?.name.official}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        Population:
                                    </StyledB>
                                    <StyledSpan>
                                        {countryDescription[0].population ? countryDescription[0].population.toLocaleString() : ''}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        Region:
                                    </StyledB>
                                    <StyledSpan>
                                        {countryDescription[0].region ? countryDescription[0].region : ''}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        Sub region:
                                    </StyledB>
                                    <StyledSpan>
                                        {countryDescription[0].subregion ? countryDescription[0].subregion : ''}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        Capital:
                                    </StyledB>
                                    <StyledSpan>
                                        {countryDescription[0].capital ? countryDescription[0].capital.join(', ') : ''}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        Top Level domain:
                                    </StyledB>
                                    <StyledSpan>
                                        {countryDescription[0]?.tld.join(', ')}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        currencies:
                                    </StyledB>
                                    <StyledSpan>
                                        {Object.values(countryDescription[0]?.currencies)[0].name}
                                    </StyledSpan>
                                </StyledP>
                                <StyledP>
                                    <StyledB>
                                        Languages:
                                    </StyledB>
                                    <StyledSpan>
                                        {Object.values(countryDescription[0].languages).join(', ')}
                                    </StyledSpan>
                                </StyledP>


                            </StyledMotionDescriptionGrid>
                            <StyledBorderCountriesContainer>
                                <StyledSpan style={{ marginInline: '0 10px' }}>
                                    Border countries:
                                </StyledSpan>
                                {
                                    countryDescription[0].borders ?
                                        countryDescription[0].borders.map((e) =>
                                            <Link key={idGenerator.generate()} to={`/country_description/${e}`}>
                                                <StyledBorderCountriesButton theme={theme}>{e}</StyledBorderCountriesButton>
                                            </Link>)
                                        : ''
                                }
                            </StyledBorderCountriesContainer>
                        </StyledMotionDescriptionContainer>
                    </div>
                </>
            }
        </StyledMotionCountryDescriptionContainer>
    )
}