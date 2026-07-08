import BoardItem from "./BoardItem"

export default function BoardList({ boards }) {
    return (
        <>
            {boards.map((board) => (<BoardItem key={board.id} board = {board} />))}
        </>
    )
}