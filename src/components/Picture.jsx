import styled from 'styled-components';
import img from '/ibms.jpg';

const Container = styled.div`
    width: 100%;
    height: 25rem;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Picture = () =>{
    return(
        <Container>
            <Image src={img} alt="Developer profile" />
        </Container>
    )
}