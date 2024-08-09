import Button from '@/components/ui/Button'
import useCustomHook from '@/lib/hooks/useCustomHook'

export default function FeatureComponent() {
    const { count, increment, decrement } = useCustomHook()

    return (
        <div>
            <h2>Feature Component</h2>
            <p>Count: {count}</p>
            <Button onClick={increment}>Increase</Button>
            <Button onClick={decrement}>Decrease</Button>
        </div>
    )
}