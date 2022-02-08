import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <h1>
                <Link to ='/'>초등 영단어 입문</Link>
            </h1>
            <ul>
                <li>                         
                    <a href='#x' className='link'>단어 추가</a>
                    <a href='#x' className='link'>Day 추가</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;