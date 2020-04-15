import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template:
        's1 s2 s3'
        's4 s5 s6'
        's7 s8 s9';
`;
const Mark = styled.p`
    color: dimgray;
    margin: 0;
    grid-area: ${props => `s${props.spot}`};
    display: flex;
    align-items: center;
    justify-content: center;
`;

type Strum = string | number;
type Props = { candidates: number[]; highlight: Strum[] };
export default function Little({ candidates }: Props) {
    const candidateComponents = candidates.map(num => {
        return (
            <Mark spot={num} key={num}>
                {num}
            </Mark>
        );
    });

    return <Container>{candidateComponents}</Container>;
}
