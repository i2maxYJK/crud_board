import { useState, useCallback } from "react";

const BoardItem = (props) => {
    const [id, setID] = useState(props.items.ID);
    const [name, setName] = useState(props.items.NAME);
    const [content, setContent] = useState(props.items.CONTENT);

    // ***** [작업중] 게시물 삭제
    const boardItemDel = useCallback(
        async (bitem) => {
            if (bitem) {
                const body = JSON.stringify(bitem);
                const response = await fetch("/test/api/test/d_tnb_item",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : body,
                });

                if (response.ok) {
                    console.log("성공 1/2");
                }
            }

            if (bitem) {
                const body = JSON.stringify(bitem);
                const response = await fetch("/test/api/test/d_tnc_item_all",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : body,
                });

                if (response.ok) {
                    console.log("성공 2/2");
                }
            }
        }
    )

    return (
        <>
            <div id="item" style={{border: "1px solid #444444", width: "800px", margin: "5px", padding: "5px"}}>
                <div style={{border: "1px solid #444444", width: "500px"}}>
                    <div style={{color: "blue", width: "200px"}}>ID</div>
                    {id}
                </div>
                <div style={{border: "1px solid #444444", width: "500px"}}>
                    <div style={{color: "blue", width: "200px"}}>NAME</div>
                    <input
                        style={{width: "300px"}}
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                </div>
                <div style={{border: "1px solid #444444", width: "500px"}}>
                    <div style={{color: "blue", width: "200px"}}>CONTENT</div>
                    <input
                        style={{width: "300px"}}
                        value={content}
                        onChange={e => setContent(e.target.value)}/>
                </div>
            </div>
            <button type="button" onClick={() => props.onSubmit({
                id: id,
                name: name,
                content: content
            })
            }>
                수정
            </button>

            <button type="button" onClick={() => boardItemDel({
                id: id,
                name: name,
                content: content
            })
            }>
                삭제
            </button>
        </>
    );
}

export default BoardItem;