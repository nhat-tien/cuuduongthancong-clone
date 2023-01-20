import { useState } from "react"

export default function SearchBar() {
    const [input, setInput] = useState('');
    
    const handleChange = (event: any) => {
        setInput(event.target.value);
    }

    return (
        <input onChange={handleChange}></input>
    )
}