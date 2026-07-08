import { useState } from "react"

export default function BoardForm() {
    const [titleValue, setTitleValue] = useState("");
    const [authorValue, setAuthorValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    return(
        <>
            <div>
                <label>제목</label>
                <input type="text" value={titleValue} onChange={(e) => setTitleValue(e.target.value)}/>
            </div>
            <div>
                <label>작성자</label>
                <input type="text" value={authorValue} onChange={(e) => setAuthorValue(e.target.value)}/>
            </div>
            <div>
                <label>내용</label>
                <textarea value={contentValue} onChange={(e) => setContentValue(e.target.value)}/>
            </div>
            <button>등록</button>
        </>
    )
}