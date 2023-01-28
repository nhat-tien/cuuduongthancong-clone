import '../Styles/Header.scss'
import { useEffect } from 'react'
import { useScrollDirection } from '../Hooks';

export default function Header(): JSX.Element {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`header ${scrollDirection == 'down' ? 'down' : 'up'}`} >
            <h1>Xin chao</h1>
        </header>
    )
}