import '../Styles/DataField.scss'

interface itemData {
    text: string,
    href: string,
}

interface props {
    data: itemData[],
}


export default function DataField({ data }: props) {

    return (
    <div className="data-field">
        {data.map((item) => 
        <a className="data-field__item" href={item.href} key={item.text}>{item.text}</a>
        )}
    </div>
    )
}