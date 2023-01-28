import { useEffect, useState } from "react"

export default function useScrollDirection() {
    
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    
    useEffect(() => {
        let lastScroll = window.pageYOffset;

        const updateDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScroll ? 'down' : 'up';
            if(direction !== scrollDirection && (scrollY - lastScroll > 10 || scrollY - lastScroll < -10)) {
                setScrollDirection(direction);
            }
        }

        window.addEventListener("scroll", updateDirection);

        return () => {
            window.removeEventListener("scroll", updateDirection);
        }
    },[scrollDirection])

    return scrollDirection;
}