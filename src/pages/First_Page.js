import Board_Page from "./Board_Page";
// import { Link } from 'react-router-dom';

function First_Page() {
    return (
        <>
            <div>
                "첫번째 페이지 입니다."
            </div>
            {/* <Link to="/">hello</Link> */}
            <Board_Page />
        </>
    )
}

export default First_Page;