import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function DayList(){
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);   

    useEffect(()=>{
        fetch('http://localhost:3001/days')
        .then(res => {
            return res.json() //여기서 response는 http응답임, json으로 변환되고 promise 반환
        })
        .then(data => {
            setDays(data);
        })
    }, [])

    return (            
        <ul className="list_day">
            {days.map(day=>(
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>
                        Day{day.day}
                    </Link>
                </li>
            ))}            
        </ul>  
    
    )
}