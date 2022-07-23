import React, {useState, useEffect} from 'react'

const Quran = () => {
    let [quran, setQuran] = useState({})
    
    useEffect(() => {
        async function readQuran(){
            let response = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani')
            let data = await response.json()
            setQuran(data)
        }
        readQuran()
        console.log(quran)
    }, [])

  return (
    <div className='read-quran'>
        <h1>Read Quran</h1>
    </div>
  )
}

export default Quran