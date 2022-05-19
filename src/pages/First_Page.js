import BoardList from "../component/BoardList";
// import { Link } from 'react-router-dom';

function First_Page() {
    return (
        <>
            <div>
                "첫번째 페이지 입니다."
            </div>
            {/* <Link to="/">hello</Link> */}
            <BoardList />
        </>
    )
}

export default First_Page;