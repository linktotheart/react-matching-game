import { useState, useEffect } from "react"
import Card from "./card"
import YouWon from "./youWon"

export default function Match() {
  const emojis = [
    {
      id: 0,
      emoji: '🔥',
      state: ''
    },
    {
      id: 0,
      emoji: '🔥',
      state: ''
    },
    {
      id: 1,
      emoji: '🦄',
      state: ''
    },
    {
      id: 1,
      emoji: '🦄',
      state: ''
    },
    {
      id: 2,
      emoji: '🐱',
      state: ''
    },
    {
      id: 2,
      emoji: '🐱',
      state: ''
    },
    {
      id: 3,
      emoji: '🐒',
      state: ''
    },
    {
      id: 3,
      emoji: '🐒',
      state: ''
    },
    {
      id: 4,
      emoji: '💃',
      state: ''
    },
    {
      id: 4,
      emoji: '💃',
      state: ''
    },
    {
      id: 5,
      emoji: '🌈',
      state: ''
    },
    {
      id: 5,
      emoji: '🌈',
      state: ''
    },
    {
      id: 6,
      emoji: '💀',
      state: ''
    },
    {
      id: 6,
      emoji: '💀',
      state: ''
    },
    {
      id: 7,
      emoji: '✨',
      state: ''
    },
    {
      id: 7,
      emoji: '✨',
      state: ''
    },
  ].sort(() => Math.random() - 0.5)
  // STATES 
  // List of Card emojis
  const [list, setList] = useState([...emojis])
  // Last selected item 
  const [selected, setSelected] = useState(-1)
  const [isWon, setIsWon] = useState(false)
  const [time, setTime] = useState(0)

  // HOOKS 
  useEffect(()=> {
    // check if all cards are correct
    // the player has won
    if (list.every(item => item.state === 'correct')) {
      setTimeout(() => {
        setIsWon(true)
      }, 1050);
    }    
    time > 0 && !isWon && setTimeout(() => setTime(time + 1), 1000);
    // return () => clearInterval()
  }, [list,time])

  // METHODS  
  const checkListItem = (item) => {
    // when selecte item is equal to last selected item
    if (list[item].id == list[selected].id) {
      list[item].state = "correct"
      list[selected].state = "correct"
      setList([...list])
      // removed last selected item
      setSelected(-1)
    } else {
      list[item].state = "incorrect"
      list[selected].state = "incorrect"
      setList([...list])
      // after A second revert it back
      setTimeout(() => {
        list[item].state = ""
        list[selected].state = ""
        setList([...list])
        setSelected(-1)
      }, 1000)
    }
  }

  const handleClick = (id) => {
    // if nothing is selected before
    if (selected === -1) {
      // game is Start
      // start the counter
      if(time === 0) setTime(1)
      if (list[id].state !== 'active') {
        list[id].state = "active"
        setList([...list])
        setSelected(id)
      }
      // set cliked card to selected
    } else {
      // TODO 
      checkListItem(id)
    }
  }

  const resetGame = () => {
    setIsWon(false)
    setTime(0)
    const newList = list.map(el => ({...el, state: ''})).sort(() => Math.random() - 0.5)
    setList([...newList])
  }


  return (
    <>
      { 
        isWon && <YouWon time={time} resetGame={resetGame} />
      }
      <div className="bg-pumpkin-50 border gap-2 md:gap-4  border-pumpkin-200 rounded-lg grid grid-cols-4 p-3 md:p-4">
        {
          list.map((emo, idx) => {
            return <Card data={emo} handleClick={handleClick} id={idx} key={emo.emoji + idx} />
          })
        }
        <div className="col text-center text-sm text-slate-500 col-span-4">
          {time}s
        </div>
      </div>
    </>
  )
}

