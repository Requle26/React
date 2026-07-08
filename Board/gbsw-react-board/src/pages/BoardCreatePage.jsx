import BoardForm from "../components/BoardForm";

export default function BoardCreatePage({ onCreate }) {
    return (
        <div>
            <h1>게시글 생성</h1>
            <BoardForm onCreate={onCreate} />
        </div>
    )
}