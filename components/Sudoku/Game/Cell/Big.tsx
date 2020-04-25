import styled from 'styled-components';
import * as highlight from './_highlight';

const Number = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    font-size: 24px;

    color: ${highlight.bigFore};
    background-color: ${highlight.bigBack};
`;

type Props = { currentValue: number; highlight: string };
export default function Big({ currentValue, highlight }: Props) {
    return <Number highlight={highlight}>{currentValue || null}</Number>;
}
