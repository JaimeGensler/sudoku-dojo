enum Direction {
    ROW = 'ROW',
    COLUMN = 'COLUMN',
}
const getRandInt = (max: number) => Math.floor(Math.random() * max);

const swapper = (array: any[], pos1: number, pos2: number) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

const swapRandom = (array: number[], size: number, direction: Direction) => {
    let [groupOneStart, groupTwoStart] = [getRandInt(size), getRandInt(size)];
    if (direction === 'ROW') {
        groupOneStart *= size;
        groupTwoStart *= size;
    }
    for (let i = 0; i < size; i++) {
        const jump = direction === 'ROW' ? i : i * size;
        swapper(array, groupOneStart + jump, groupTwoStart + jump);
    }
};

export default function createGame(size: number) {
    const initial = Array.from(
        { length: size * size },
        (x, index) => 1 + ((Math.floor(index / size) + (index % size)) % size)
        //1 + (rowNum to get value of first position in row, + remainder to get offset, % size to restrict it to 1 to size)
    );
    for (let i = 0; i < 20; i++) {
        swapRandom(
            initial,
            size,
            i % 2 === 0 ? Direction.ROW : Direction.COLUMN
        );
    }
    return initial;
}
