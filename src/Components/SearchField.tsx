import '../Styles/SearchField.scss'

interface itemData {
    text: string,
    href: string,
}

interface props {
    data: itemData[],
}

export default function SearchField({ data }: props) {

    return (
    <div className="search-field">
        {data.map((item) => 
        <a className="search-field__item" href={item.href} key={item.text}>{item.text}</a>
        )}
    </div>
    )
}