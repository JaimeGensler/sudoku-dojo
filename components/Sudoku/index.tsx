import { Layout } from 'antd';
import styled from 'styled-components';

import useGame from '../useGame';
import sudoku from '../../lib/sudoku';
import { Provider } from './sudokuContext';

import Title from './Other/Title';
import Board from './Game/Board';
import SettingsPanel from './SettingsPanel';

const { Content } = Layout;
const Container = styled(Content)`
    height: 100vh;
`;

const Panel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Sudoku() {
    const [gameState, applyRule] = useGame(sudoku);

    return (
        <Layout>
            <Container>
                <Title>Sudoku Dojo</Title>

                <Provider value={{ gameState, applyRule }}>
                    <Panel>
                        <Board />
                        <SettingsPanel />
                    </Panel>
                </Provider>
            </Container>
        </Layout>
    );
}
