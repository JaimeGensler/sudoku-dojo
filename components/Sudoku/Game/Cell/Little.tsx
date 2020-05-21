import styled from 'styled-components';

type Highlight = [number, number, number];
type ContainerProps = { highlight: Highlight };
type MarkProps = { highlight: Highlight; spot: number };

const bg = ({ highlight }: ContainerProps) => {
    return highlight.includes(0)
        ? 'white'
        : `rgba(${highlight.join(', ')}, 0.2)`;
};
const color = ({ highlight }: MarkProps) => `rgb(${highlight.join(', ')})`;
const gridArea = ({ spot }: MarkProps) => {
    return `${Math.ceil(spot / 3)} / ${1 + ((spot - 1) % 3)}`;
};

const Container = styled.div<ContainerProps>`
    height: 100%;
    padding: 2px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    background-color: ${bg};
`;
const Mark = styled.div<MarkProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: ${gridArea};
    font-size: 0.75rem;
    height: 100%;

    color: ${color};
    background-color: transparent;
`;

type Props = { candidates: number[]; highlight: Highlight };
export default function Little({ candidates, highlight }: Props) {
    const candidateComponents = candidates.map(num => {
        return (
            <Mark spot={num} highlight={highlight} key={num}>
                {num}
            </Mark>
        );
    });

    return <Container highlight={highlight}>{candidateComponents}</Container>;
}
