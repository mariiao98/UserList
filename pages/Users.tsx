import React from "react";
import { List } from 'semantic-ui-react';
import styled from "styled-components";

const UsersStyled = styled(List)({
    height: '60%',
    width: '40%',
    display: 'flex',
    overflow: 'scroll',
    overflowX: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'blue',
});

const UsersComponents: React.FC = () => {
    return (
        <UsersStyled divided relaxed>
            <h1>Hello</h1>
        </UsersStyled>
    );
};

export default UsersComponents;