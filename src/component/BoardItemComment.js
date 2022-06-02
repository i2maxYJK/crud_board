import { useState, useCallback } from "react";

const BoardItemComment = (props) => {
    const [seq, setSeq] = useState(props.items.SEQ);
    const [id, setID] = useState(props.items.ID);
    const [content, setContent] = useState(props.items.CONTENT);

    // ***** [작업중] 게시물 삭제
    const boardItemCommentDel = useCallback(
        async (bitemc) => {
            if (bitemc) {
                const body = JSON.stringify(bitemc);
                const response = await fetch("/test/api/test/d_tnc_item",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : body,
                });

                if (response.ok) {
                    console.log("성공");
                }

            }
        }
    )
    
    return (
        <>
            <div id="itemComment" style={{border: "1px solid #444444",width: "800px",margin: "5px",padding: "5px"}}>
                <div style={{border: "1px solid #444444",width: "500px"}}>
                    <div style={{color:"red",width: "200px"}}>SEQ</div>
                    {seq}
                </div>
                <div style={{border: "1px solid #444444",width: "500px"}} hidden>
                    <div style={{color:"red",width: "200px"}}>ID</div>
                    {id}
                </div>
                <div style={{border: "1px solid #444444",width: "500px"}}>
                    <div style={{color:"red",width: "200px"}}>CONTENT</div>
                    <input
                        style={{width: "300px"}}
                        value={content}
                        onChange={e => setContent(e.target.value)}/>
                </div>
            </div>
            <button type="button" onClick={() => props.onSubmit({
                seq: seq,
                id: id,
                content: content
            })
            }>
                댓글수정
            </button>

            <button type="button" onClick={() => boardItemCommentDel({
                seq: seq,
                id: id,
                content: content
            })
            }>
                댓글삭제
            </button>
        </>
    );
}

export default BoardItemComment;