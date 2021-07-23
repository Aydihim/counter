import React from 'react';
import logo from './Logo_1.svg';

function Header() {
    return (
        <>
            <div class ='logo_and_menu'>
            <div className={logo}>
                <img src={logo} alt=''/>
            </div>
            <div>
                <ul class = 'menu'>
                    <li class ='glavnaya'>Главная</li>
                    <li class='for-us'>О нас</li>
                    <li class='contacts'>Контакты</li>
                </ul>
            </div>
            </div>
        </>
    );
}

export default Header;