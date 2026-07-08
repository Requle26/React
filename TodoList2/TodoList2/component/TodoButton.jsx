export default function TodoButton({test}) {
    return(
        <ul>
            {test.map((todo) => (
                <li>{todo}</li>
            ))}
        </ul>
    )
}