const BoardRow = (props) => {
    return (
        <>
            <td style={{border: "1px solid #444444"}}>{props.items.ID}</td>
            <td style={{border: "1px solid #444444"}}>{props.items.NAME}</td>
        </>
    );
};

export default BoardRow;