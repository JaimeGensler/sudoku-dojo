import { useContext, ReactNode } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

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
            <Typography.Title level={4}>{label}</Typography.Title>
            {children}
        </Item>
    );
}
