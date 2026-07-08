const CounterButton = ({ test, buttonText }) => {
    return (
        <>
            <button onClick={() => (test(buttonText))}>{buttonText}</button>
        </>
    )
};

export default CounterButton;