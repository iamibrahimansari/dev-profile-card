import styled from 'styled-components';
import {Picture} from './components/Picture';
import {Info} from './components/Info';
import {Skills} from './components/Skills';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 30rem;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  gap: 2rem;
`

const App = () => {
  return (
    <Main>
      <Picture />
      <Info />
      <Skills />
    </Main>
  )
}

export default App
