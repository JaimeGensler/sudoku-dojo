import styled from 'styled-components';
import * as highlight from './_highlight';

const Number = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    margin: 0;
    font-size: 24px;
    width: 100;

    background-color: ${highlight.fillBack};
    color: ${highlight.fillFore};
`;

type Props = { solvedValue: number; highlight: string };
export default function Given({ solvedValue, highlight }: Props) {
    return <Number highlight={highlight}>{solvedValue}</Number>;
}
