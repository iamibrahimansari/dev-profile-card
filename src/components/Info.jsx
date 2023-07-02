import styled from 'styled-components';

const Container = styled.div`
    padding-inline: 2rem;
`

const H1 = styled.h1`
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: skyblue;
`

const Desc = styled.p`
    font-size: 1.4rem;
    letter-spacing: 1px;
    color: darkcyan;
    line-height: 1.3;
`

export const Info = () =>{
    return(
        <Container>
            <H1>Ibrahim Ansari</H1>
            <Desc>
                Junior Full Stack Developer. Cricket Lover, Introvert, Overthinker, Song Lover. Now I'm learning Styled Components and I'm designing this card with styled-components.
            </Desc>
        </Container>
    )
}