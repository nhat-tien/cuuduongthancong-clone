import '../Styles/SearchField.scss'

interface itemData {
    text: string,
    href: string,
}

interface props {
    data: Array<itemData>,
}

export default function SearchField({ data }: props) {

    return (
    <div className="search-container">
        {data.map((item: itemData, index: number) => 
        <a className="search-item" href={item.href} key={index}>{item.text}</a>
        )}
    </div>
    )
}