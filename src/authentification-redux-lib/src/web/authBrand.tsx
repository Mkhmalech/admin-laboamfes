import { LoginBrandContainer, LoginBrandText } from "./authBody";
import * as React from 'react';
import logo from '../icons/logo.jpg'
export const Brand = () =>
    <LoginBrandContainer className="Brand-container">
        <LoginBrandText>
            <span><img src='/images/logo.jpg' height="140px" width="140px"/></span>
        </LoginBrandText>
    </LoginBrandContainer>