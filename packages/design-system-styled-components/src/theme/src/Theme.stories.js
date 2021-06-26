import React from 'react';
import styled, {css} from 'styled-components';

import * as Theme from '.';

const SpacingTable = styled.table`
    tr {
        height: 40px;
        display: flex;
        align-items: center;

        td:first-child {
            width: 150px;
        }

        td {
            text-align: left;
        }
    }
`;

const Strong = styled.span`
    font-weight: 500;
    margin-right: 4px;
`;

const SpacingBlock = styled.div`
    background-color: #ef9a9a;
    height: 30px;

    ${(props) =>
        props.width &&
        css`
            width: ${props.width};
        `};
`;

export default {
    component: Theme,
    title: 'Design System/Theme'
};

export const spacing = () => (
    <SpacingTable>
        <tbody>
            {Object.keys(Theme.spacing).map((key) => (
                <tr key={key}>
                    <td>
                        <Strong>{key}</Strong>
                        <span>{`(${Theme.spacing[key]})`}</span>
                    </td>
                    <td>
                        <SpacingBlock width={Theme.spacing[key]} />
                    </td>
                </tr>
            ))}
        </tbody>
    </SpacingTable>
);
