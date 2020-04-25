import styled from 'styled-components';
import * as highlight from './_highlight';

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    background-color: ${highlight.bigBack};
`;
const Mark = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: ${props =>
        `${Math.ceil(props.spot / 3)} / ${1 + ((props.spot - 1) % 3)}`};
    font-size: 0.7rem;
    height: 100%;

    color: ${highlight.littleFore};
    background-color: transparent;
`;

type Props = { candidates: number[]; highlight: string };
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
