const BoardItemComment = (props) => {
    return (
        <>
        <div id="item" style={{border: "1px solid #444444",width: "800px",margin: "5px",padding: "5px"}}>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"red",width: "200px"}}>SEQ</div>
                {props.items.SEQ}
            </div>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"red",width: "200px"}}>CONTENT</div>
                <input style={{width: "300px"}} value={props.items.CONTENT}/>
            </div>
        </div>
        </>
    );
};

export default BoardItemComment;