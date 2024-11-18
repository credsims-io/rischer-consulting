import { useState } from 'react'

export default function useCustomHook() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    return { count, increment, decrement }
}