import styled from 'styled-components';

type Highlight = [number, number, number];
type StyleProps = { highlight: Highlight };

const color = ({ highlight }: StyleProps) => {
    return highlight.includes(0) ? 'black' : 'white';
};
const bg = ({ highlight }: StyleProps) => {
    return highlight.includes(0) ? 'lightgray' : `rgb(${highlight.join(', ')})`;
};
const Number = styled.div<StyleProps>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    margin: 0;
    font-size: 2rem;

    color: ${color};
    background-color: ${bg};
`;

type Props = { solvedValue: number; highlight: Highlight };
export default function Given({ solvedValue, highlight }: Props) {
    return <Number highlight={highlight}>{solvedValue}</Number>;
}
