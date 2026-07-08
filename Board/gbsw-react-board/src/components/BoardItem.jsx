export default function BoardItem({ board }) {
    return (
        <>
            <div key={board.id}>
                {board.id}, {board.title}, {board.content}, {board.author}
            </div>
        </>
    )
}