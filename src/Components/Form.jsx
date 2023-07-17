import React, { useState } from 'react'
import { memeTypes } from '../meme-types'

function Form() {
    const [name, setName] = useState("")
    const [topText, setTopText] = useState("")
    const [botText, setBotText] = useState("")
    const [isGenerate, setIsGenerate] = useState(false)

    function handleClick() {
        setIsGenerate(prev => !prev)
    }
    console.log(isGenerate);
    return (
        <div className='flex justify-between items-center gap-[300px]'>

            <div className="p-10 border bg-slate-100 flex flex-col gap-5">
                <select name="for-memes" id="for-memes" value={name} onChange={(e) => setName(e.target.value)}>

                    {
                        memeTypes.map((el) => {
                            return (
                                <option key={el.value} value={el.value}>{el.value}</option>
                            )
                        })
                    }
                </select>

                <label htmlFor="top-text">Top Text</label>
                <input type="text" name="top-text" id="top-text" value={topText} onChange={(e) => setTopText(e.target.value)} placeholder='This text will appear on the top' />

                <label htmlFor="bottom-text">Bottom Text</label>
                <input type="text" name='bottom-text' id='top-text' value={botText} onChange={(e) => setBotText(e.target.value)} placeholder='This text will appear on the bottom' />

                <button onClick={handleClick}>Generate</button>
            </div>
            <div>
                {isGenerate ? (
                    <>
                        <div>
                            <img src={`https://apimeme.com/meme?meme=${name}&top=${topText}&bottom=${botText}`} />
                        </div>
                    </>
                ) : ""}
            </div>
        </div>
    )
}

export default Form