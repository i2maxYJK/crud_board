import { useState } from "react";

const BoardItem = (props) => {
    const [id, setID] = useState(props.items.ID);
    const [name, setName] = useState(props.items.NAME);
    const [content, setContent] = useState(props.items.CONTENT);

    return (
        <>
        <div id="item" style={{border: "1px solid #444444",width: "800px",margin: "5px",padding: "5px"}}>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"blue",width: "200px"}}>ID</div>
                {id}
            </div>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"blue",width: "200px"}}>NAME</div>
                <input
                style={{width: "300px"}}
                value={name}
                onChange={e => setName(e.target.value)}/>
            </div>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"blue",width: "200px"}}>CONTENT</div>
                <input
                style={{width: "300px"}}
                value={content}
                onChange={e => setContent(e.target.value)}/>
            </div>
        </div>
        </>
    );
};

export default BoardItem;