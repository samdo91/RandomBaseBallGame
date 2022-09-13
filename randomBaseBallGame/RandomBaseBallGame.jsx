import React, { useState } from "react"
import randomNumberGenerator from "./randomNumber"


const RandomBaseBallGame = () => {
    const numberlist = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [startNumber] = useState(randomNumberGenerator(numberlist))
    const [answer, setAnswer] = useState("")
    const [record, setRecord] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(false)
    const handleAnswerNumber = (e) => {
        setAnswer(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const answerArray = answer.split("").map(Number)
        if (answerArray.some(number => isNaN(number))) {
            // isNaN은 NaN을 판닪한다. 즉 answer을 some로 돌렸을 때 그 인덱스의 값중 하나라고 NaN이 나와 트루가 되면 이 얼럿이 실행된다.
            alert("숫자를 기입해주세요")
        }
        if (answerArray.length !== 4) {
            console.log(answerArray.length)
            alert("4개의 숫자를 입력해주세요.")
        }
        if (answerArray.some(x => {
            return answerArray.indexOf(x) !== answerArray.lastIndexOf(x);
        })) {
            alert("중복되는 숫자는 안돼요!")

        }



        //split으로 어레이로 만든 배열은 문자열로 되어 있다. .map(N\umber)을 붙여서 숫자로 만들어주자
        const { Strike, Ball } = startNumber.reduce((acc, cur, idx) => {
            if (answerArray[idx] === cur) {
                return { ...acc, Strike: acc.Strike + 1 }
            }
            if (answerArray.includes(cur)) {
                return { ...acc, Ball: acc.Ball + 1 }
            }
            return acc
        }, { Strike: 0, Ball: 0 })
        if (Strike === 4) {
            setRecord([...record, "축하합니다! 정답이에요!"])
            setCorrectAnswer(true)
        }
        else { setRecord([...record, (`${answer} 스트라이크:${Strike} 볼:${Ball}`)]) }
        //배열안에 기록 값을 계속 넣어줘야한다.

    }


    return (<div>
        <h1>Random BaseBall Game!! </h1>
        <div>{correctAnswer ? startNumber : "----"}</div>
        <form>
            <input type="text" placeholder="숫자를 입력하세요!" value={answer} onChange={handleAnswerNumber} />
            <button onClick={handleFormSubmit}>play!!</button>
        </form>
        <div>
            <h2>기록</h2>
            <ol>{record.map((item, idx) => <li key={idx}>{item}</li>)}
            </ol>
        </div>

    </div>)
}

export default RandomBaseBallGame
