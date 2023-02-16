import '../styles/DataField.scss'

interface itemData {
    text: string,
    href: string,
}

interface Props {
    data: itemData[],
}


export default function DataField({ data }: Props) {

    return (
    <div className="data-field">
        {data.map((item) => 
        <a className="data-field__item" href={item.href} key={item.text}>{item.text}</a>
        )}
    </div>
    )
}
