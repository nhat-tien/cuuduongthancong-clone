import '../Styles/DataField.scss'


interface props {
    data: any[],
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