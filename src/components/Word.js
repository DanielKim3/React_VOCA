import { useState } from "react";

export default function Word({word}) {
    const [Show, setShow] =useState(false); //초기값은 false로 처음에는 뜻이 안보이게
    const [isDone, setIsDone] = useState(word.isDone)

    function toggleShow(){
        setShow(!Show)
    }

    function toggleDone(){
        setIsDone(!isDone)
    }

    return(
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{Show && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {Show ? '숨기기' : '보기'}</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    );
}