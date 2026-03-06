const FunctionCurry = () => {


    const curry = (fn) => {
        return function curried(...args) {
            if (args.length >= fn.length) {
                return fn.apply(this, args)
            } else {
                return function (...nextArgs) {
                    return curried.apply(this, args.concat(nextArgs))
                }
            }
        }
    }

    const add = (a, b, c) => a + b + c;
    const curriedAdd = curry(add);

    return (
        <div>
            <h2>Function Currying</h2>
            <p>Curried Add: {curriedAdd(1)(2)(3)}</p>
            <p>Curried Add: {curriedAdd(1, 2)(3)}</p>
            <p>Curried Add: {curriedAdd(1, 2, 5)}</p>
        </div>
    );
}

export default FunctionCurry;