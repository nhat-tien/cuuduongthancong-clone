import '../Styles/Header.scss'
import { useScrollDirection } from '../Hooks';
import logoUrl from '../assets/logo.png'

export default function Header() {
    const scrollDirection = useScrollDirection();

    return (
        <header className={`header ${scrollDirection ?? 'up'}`}>
            <img src={logoUrl} height={60}/>
        </header>
    )
}