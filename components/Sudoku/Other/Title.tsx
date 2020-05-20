import styled from 'styled-components';
import { Typography } from 'antd';
const Heading = styled(Typography.Title)`
    font-family: 'Julius Sans One', sans-serif;
    text-align: center;
    margin-top: 2rem;
`;

type Props = {
    children: string;
};
export default function Title({ children }: Props) {
    return <Heading level={1}>{children}</Heading>;
}
