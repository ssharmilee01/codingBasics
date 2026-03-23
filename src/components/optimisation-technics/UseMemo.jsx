import { useMemo, useState } from "react";

const countPrime = (upTo) => {
    let count = 0;
    for (let i = 2; i <= upTo; i++) {
        if (isPrime(i)) count++
    }

    return count
}

const isPrime = (n) => {
    if (n < 2) return false
    if (n === 2) return true
    if (n % 2 === 0) return false

    const sqrt = Math.sqrt(n)

    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false
    }
    return true
}

const UseMemo = () => {
    const [n, setN] = useState(1000000)
    const primeCount = useMemo(() => countPrime(n), [n])
    return (
        <>
            <h1>UseMemo Example</h1>
            <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
            <p>Prime less than or = {n} : {primeCount}</p>
        </>
    )
}

export default UseMemo;