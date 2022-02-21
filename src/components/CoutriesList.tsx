import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Country } from './Country'

const StyledMotionCountriesList = styled(motion.ul)`
    list-style: none;
    display: flex;
    gap: 40px ;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
`

interface CountriesListPropsType {
    countries: Array<object>,
    page: number
}

export const Countries = (props: CountriesListPropsType) => {
    const idGenerator = require('shortid');
    return <StyledMotionCountriesList>
        {props.countries.map((e, i) => (i < 8 * props.page && i >= 8 * (props.page - 1)) ? <Country country={e} key={idGenerator.generate()} /> : '')}
        {/* {props.countries.map((e, i) => (<Country country={e} key={idGenerator.generate()} />))} */}

    </StyledMotionCountriesList>
}
