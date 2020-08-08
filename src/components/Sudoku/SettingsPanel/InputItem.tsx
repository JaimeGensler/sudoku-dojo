import { ReactNode } from 'react';
import styled from 'styled-components';
import { Typography, Divider } from 'antd';

const Item = styled.div`
    margin-bottom: 2rem;
`;

type Props = {
    label: string;
    children: ReactNode;
};
export default function InputItem({ label, children }: Props) {
    return (
        <Item>
            <Divider orientation="left">{label}</Divider>
            {children}
        </Item>
    );
}
