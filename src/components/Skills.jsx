import styled from 'styled-components';
import {skills} from '../data/skills';

const Container = styled.div`
    padding: 2rem;
    padding-top: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

const Span = styled.span`
    font-size: 1.6rem;
    background-color: ${props => props.color};
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 5px;
`

export const Skills = () =>{
    return(
        <Container>
            {
                skills.map(({skill, level, color}, index) => <Span key={index} color={color}>{skill}</Span>)
            }
        </Container>
    )
}