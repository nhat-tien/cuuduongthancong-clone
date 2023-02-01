import { useEffect, useState } from "react"
import axios from "axios";
import Spin from "./Spin";
import '../Styles/Search.scss';
import SearchField from "./SearchField";
import icon from "../assets/icons/glass-circle.svg"

interface itemData {
  text: string,
  href: string,
}

export default function Search() {
    const [data, setData] = useState(Array<itemData>);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    
    const handleChange = (event: any) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
              `https://cuuduongthancong-clone-api.onrender.com/api`
            );
            setData(response.data);
          } catch(err : any) {
            console.error(err.message);
          } finally {
            setLoading(false);
          }
        };

        getData();
    },[])

    const dataFiltered = data.filter((item: itemData) => isMatch(item.text, input));

    return (
      <>
      <div className="search">
        <img src={icon} className="icon-input"/>
        <input className="search-bar" onChange={handleChange} value={input}></input>
      </div>
				{ loading 
        ? <Spin />
        : <SearchField data={dataFiltered} />
        }
      </>
    )
}

function isMatch(itemText: string,userInput: string) {
  const regExp = RegExp(`.*${removeAccent(userInput).split('').join('.*')}.*`);
  return removeAccent(itemText).match(regExp);
}

function removeAccent(str: string): string {
  str = str.toLowerCase(); 
  str = str.replace(/à|á|ả|ã|ạ|ắ|ằ|ẳ|ẵ|ặ|ấ|ầ|ẩ|ẫ|ậ/g,'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.trim();

  return str;
}


