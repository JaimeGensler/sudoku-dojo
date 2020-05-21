// import styled from 'styled-components';
// import createGame from '../../lib/kenken/utils/createGame';
// import { useMemo } from 'react';

// const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(${props => props.size}, 1fr);
//     grid-template-rows: repeat(${props => props.size}, 1fr);

//     width: 70vh;
//     height: 70vh;

//     margin: 100px auto;
//     border: 2px solid black;
//     font-family: sans-serif;
// `;
// const Num = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 2rem;

//     border: 1px solid dimgray;
// `;
// export default function KenKen() {
//     const size = 4;
//     const game = useMemo(() => createGame(size), []);

//     const nums = game.map((x, i) => <Num key={i}>{x}</Num>);
//     return <Grid size={size}>{nums}</Grid>;
// }
