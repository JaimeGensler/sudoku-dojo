import styled from 'styled-components';

type Highlight = [number, number, number];
type StyleProps = { highlight: Highlight };

const color = ({ highlight }: StyleProps) => `rgb(${highlight.join(', ')})`;
const bg = ({ highlight }: StyleProps) => {
    return highlight.includes(0)
        ? 'white'
        : `rgba(${highlight.join(', ')}, 0.2)`;
};
const Number = styled.div<StyleProps>`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    font-size: 1.75rem;
    font-weight: 100;

    color: ${color};
    background-color: ${bg};
`;

type Props = { currentValue: number; highlight: Highlight };
export default function Big({ currentValue, highlight }: Props) {
    return <Number highlight={highlight}>{currentValue || null}</Number>;
}
