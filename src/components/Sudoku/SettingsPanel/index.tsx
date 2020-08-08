import styled from 'styled-components';
import InputModes from './InputModes';
import Numbers from './Numbers';
import PopulateCandidates from './PopulateCandidates';
import KeyBindingsList from './KeyBindingsList';

const Container = styled.div`
    height: 70vh;
    padding: 2rem;
    border: 2px solid black;
    border-left: none;
    background-color: white;
`;

export default function SettingsPanel() {
    return (
        <Container>
            <InputModes />
            <PopulateCandidates />
            <Numbers />
            <KeyBindingsList />
        </Container>
    );
}
