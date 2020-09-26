import * as React from 'react';
import { Redirect } from 'react-router';
import { Ico } from '../react-icons-sc/src/ico';
import styled from '../theme/styled-components';
import { profile } from './icons/profile';

export const NavMenu: React.FC<any> = ({username}) => {
    const [subMenu, toggleSubMenu] = React.useState<boolean>(false)

    return (
        <Ul toggleSubMenu={subMenu}>
            <li>
                <a href="#" onClick={e => toggleSubMenu(!subMenu)}>
                    <div style={{ float: 'right', margin: '0 25px' }}>
                        <Ico {...profile} width={25} height={25} color="rgb(0, 0, 0)" />
                    </div>
                </a>
                <ul>
                    <li><a href="#"> {username} </a> </li>
                    <li><a href="#" 
                           onClick={e=>{
                               localStorage.removeItem('TTUID');
                               window.location.href = "/"
                            }}
                        > 
                            Deconnecter-Vous 
                        </a> 
                    </li>
                </ul>
            </li>
        </Ul>

    )
}

const Ul = styled('ul') <{ toggleSubMenu: boolean }>`
    list-style: none;
    display: flex;
    li {
        line-height: 30px;
        color: #5a5a5a;
        font-size: 14px;
        padding: 0 18px;
        outline: 0;

        ul {
            display : ${({ toggleSubMenu }) => toggleSubMenu ? 'block' : 'none'}
            position: absolute;
            top: 100%;
            left: 0;
            z-index: 1000;
            float: none;
            min-width: 10rem;
            padding: 0.5rem 0;
            font-size: 1rem;
            color: #212529;
            text-align: left;
            left: auto;
            right: 10px;
            width: 300px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
            border: 1px solid #e0e0e0;
            box-sizing: content-box;
            border-radius: 3px;
            margin-top: 12px;
            line-height: 20px;
            list-style: none;
        }
    }
`