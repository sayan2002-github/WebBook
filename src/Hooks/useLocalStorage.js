import {useState, useEffect} from 'react'

const PREFIX = 'webdevpen-'
export default function useLocalStorage(key, initialValue) {
    const prefixkey = PREFIX + key

    const [value, setValue] = useState(()=>{
        const jsonvalue = localStorage.getItem(prefixkey)
        if(jsonvalue != null) return JSON.parse(jsonvalue)

        if(typeof initialValue === 'function'){
            console.log('function')
            return initialValue()
        }else{
            console.log('not function')
            return initialValue
        }
    })

    useEffect(()=>{
        localStorage.setItem(prefixkey, JSON.stringify(value))
    }, [prefixkey, value])

    return [value, setValue]
}
