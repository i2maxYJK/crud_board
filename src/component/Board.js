import '../App.css';

const Board = (props) => {
    return (
        <tr>
            <td style={{border: "1px solid #444444"}}>{props.items.RNUM}</td>
            <td style={{border: "1px solid #444444"}}>{props.items.ID}</td>
            <td style={{border: "1px solid #444444"}}>{props.items.NAME}</td>
            <td style={{border: "1px solid #444444"}}>{props.items.CONTENT}</td>
        </tr>
    );
};

export default Board;