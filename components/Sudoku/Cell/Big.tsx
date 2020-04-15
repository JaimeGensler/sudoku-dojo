import styled from 'styled-components';
import * as highlight from './_highlight';

const Number = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    font-size: 24px;

    color: ${highlight.ghostFore};
    background-color: ${highlight.ghostBack};
`;

type Strum = string | number;
type Props = { currentValue: number; highlight: Strum[] };
export default function Big({ currentValue, highlight }: Props) {
    return <Number highlight={highlight}>{currentValue || null}</Number>;
}
