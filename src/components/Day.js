import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';
import { useEffect, useState } from 'react';

export default function Day() {
    
    const {day} = useParams();
    
    //const wordList = dummy.words.filter(word => word.day === Number(day))   
    const [words, setWords] =useState([])

    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => {
            return res.json() //여기서 response는 http응답임, json으로 변환되고 promise 반환
        })
        .then(data => {
            setWords(data);
        })
    }, [day])
    
    return(
        <div>
            <h2>Day {day}</h2>
            <table>
               <tbody>
                   {words.map(word => (                  
                       <Word word={word} key={word.id}/>
                     ))}
               </tbody>
            </table>
        </div>
    )  
}