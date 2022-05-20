const BoardItem = (props) => {
    return (
        <>
        <div id="item" style={{border: "1px solid #444444",width: "800px",margin: "5px",padding: "5px"}}>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"blue",width: "200px"}}>ID</div>
                {props.items.ID}
            </div>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"blue",width: "200px"}}>NAME</div>
                <input style={{width: "300px"}} value={props.items.NAME}/>
            </div>
            <div style={{border: "1px solid #444444",width: "500px"}}>
                <div style={{color:"blue",width: "200px"}}>CONTENT</div>
                <input style={{width: "300px"}} value={props.items.CONTENT}/>
            </div>
        </div>
        </>
    );
};

export default BoardItem;