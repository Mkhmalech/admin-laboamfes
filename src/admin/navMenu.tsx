import * as React from 'react';

export const NavMenu: React.FC<any> = () => {

    return (
        <ul className="nav navbar-nav float-right be-icons-nav">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#0.0336442302013471" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="icon zmdi zmdi-comment-video" />
                </a>
                <ul className="dropdown-menu">video</ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#0.0336442302013471" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="icon zmdi zmdi-apps" />
                </a>
                <ul className="dropdown-menu">apps</ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#0.0336442302013471" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="icon zmdi zmdi-comment-text" />
                </a>
                <ul className="dropdown-menu">comment</ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#0.0336442302013471" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="icon zmdi zmdi-notifications" />
                </a>
                <ul className="dropdown-menu">notifications</ul>
            </li>
        </ul>

    )
}