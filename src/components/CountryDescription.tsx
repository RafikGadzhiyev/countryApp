import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import * as ObjectTypes from './../types/ObjectType'
import * as stateTypes from './../types/StatesType'


const StyledMotionCountryDescriptionContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 86vh;
`;

const StyledMotionCountryImageContainer = styled(motion.div)``;
const StyledMotionCountryImage = styled(motion.img)``;
const StyledMotionDescriptionContainer = styled(motion.div)``;
const StyledMotionCountryTitle = styled(motion.h2)``;
const StyledMotionBorderCountriesButton = styled(motion.button)``;
const StyledMotionDescriptionGrid = styled(motion.div)`
    text-transform: capitalize;
`;

export const CountryDescription = () => {
    const { country } = useParams();
    const [countryDescription, setCountryDescription] = useState<Array<ObjectTypes.Country>>([]);
    const theme = useSelector((state: stateTypes.MainState) => state.ThemeSwitcher.currentTheme);

    useEffect(() => {
        getCountryDescription();
    }, [])

    function getCountryDescription(): string | Array<object> {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(result => setCountryDescription(() => result))
                }
            })
        return 'not Found'
    }
    return (
        <StyledMotionCountryDescriptionContainer
            animate={theme}
        >
            {countryDescription[0] &&
                <>
                    <StyledMotionCountryImageContainer>
                        <StyledMotionCountryImage
                            src={countryDescription[0]?.flags.png}
                        />
                    </StyledMotionCountryImageContainer>
                    <StyledMotionDescriptionContainer>
                        <StyledMotionCountryTitle>
                            {countryDescription[0]?.name.common}
                        </StyledMotionCountryTitle>
                        <StyledMotionDescriptionGrid>
                            <p>
                                <b>
                                    Official name:
                                </b>
                                <span>
                                    {countryDescription[0]?.name.official}
                                </span>
                            </p>
                            <p>
                                <b>
                                    Population:
                                </b>
                                <span>
                                    {countryDescription[0]?.population.toLocaleString()}
                                </span>
                            </p>
                            <p>
                                <b>
                                    Region:
                                </b>
                                <span>
                                    {countryDescription[0]?.region}
                                </span>
                            </p>
                            <p>
                                <b>
                                    Sub region:
                                </b>
                                <span>
                                    {countryDescription[0]?.subregion}
                                </span>
                            </p>
                            <p>
                                <b>
                                    Capital:
                                </b>
                                <span>
                                    {countryDescription[0]?.capital.join(', ')}
                                </span>
                            </p>
                            <p>
                                <b>
                                    Top Level domain:
                                </b>
                                <span>
                                    {countryDescription[0]?.tld.join(', ')}
                                </span>
                            </p>
                            <p>
                                <b>
                                    currencies:
                                </b>
                                <span>
                                    {Object.values(countryDescription[0]?.currencies)[0].name}
                                </span>
                            </p>
                            <p>
                                <b>
                                    Languages:
                                </b>
                                <span>
                                    {Object.values(countryDescription[0].languages).join(', ')}
                                </span>
                            </p>


                        </StyledMotionDescriptionGrid>
                    </StyledMotionDescriptionContainer>
                </>
            }
        </StyledMotionCountryDescriptionContainer>
    )
}