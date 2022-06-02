import { useEffect, useState, useCallback, useRef } from "react";
import BoardRow from "../component/BoardRow";
import BoardItem from "../component/BoardItem";
import BoardItemComment from "../component/BoardItemComment";
import BoardNum from "../component/BoradNum"
import '../App.css';

function Board_Page() {
    // 게시물 리스트
    const [boardList, setboardList] = useState([]);

    // 게시물 아이템
    const [boardItem, setboardItem] = useState([]);

    // 게시물 아이템 댓글
    const [boardItemComment, setboardItemComment] = useState([]);

    const [boardNumber, setBoardNumber] = useState({LNUM : 1});

    const comment_id = useRef();
    const comment_text = useRef();

    useEffect( () => {
        async function fetchItems() {
            const response = await fetch(
                "/test/api/test/s_tnb_list_num?num=1"
            );
            
            const result = await response.json();

            setboardList(result);
        }

        fetchItems();
        
    }, []);

    // 게시판 페이지 넘버링
    const [boardNumList, setboardNumList] = useState([]);

    useEffect( () => {
        async function fetchItems() {
            const response = await fetch(
                "/test/api/test/s_tnb_num"
            );
            
            const result = await response.json();

            setboardNumList(result);
        }

        fetchItems();
        
    }, []);

    // 리스트 넘버 클릭 이벤트
    const boardListNumClick = useCallback(
        async (boardNum) => {
            const value = boardNum.LNUM;

            if (value) {
                const response = await fetch("/test/api/test/s_tnb_list_num?num=" + value,
                {
                    method : "GET",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                });
            
                const result = await response.json();
                setBoardNumber(value);
                setboardList(result);
            }
        }
    )

    // 리스트 행 클릭 이벤트
    const boardRowClick = useCallback(
        async (boardItem) => {
            // console.log(boardItem);
            const value = boardItem.ID;

            if (value) {
                const response1 = await fetch("test/api/test/s_tnb_item?id=" + value,
                {
                    method : "GET",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                });
            
                const result1 = await response1.json();
    
                setboardItem(result1);


                const response2 = await fetch("test/api/test/s_tnc_item?id=" + value,
                {
                    method : "GET",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                });
            
                const result2 = await response2.json();
    
                setboardItemComment(result2);
            }
        }
    )

    // 게시물 수정
    const boardItemUpdate = useCallback(
        async (bitem) => {
            if (bitem) {
                const body = JSON.stringify(bitem);
                const response = await fetch("/test/api/test/u_tnb_item",
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : body,
                });
                await boardListNumClick(boardNumber);
                if (response.ok) {
                    console.log("성공");
                }

            }
        }
    )

    // 게시물 댓글 수정
    const boardItemCommentUpdate = useCallback(
        async (bitemC) => {
            if (bitemC) {
                const body = JSON.stringify(bitemC);
                const response = await fetch("/test/api/test/u_tnc_item",
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

    // 댓글 등록
    const insertComment = useCallback(
        async (e) => {
            const bitemC = {
                id : comment_id.current.value,
                seq : 999,
                content : comment_text.current.value,
            }

            console.log(bitemC);

            if (bitemC) {
                const body = JSON.stringify(bitemC);
                const response = await fetch("test/api/test/i_tnc_item",
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

        },
        // [testList]
    )

    // 실제 출력 화면
    if (boardList.length > 0) {
        return(
            <>
            {
                boardItem.map((boardItem) => (
                    <>
                    <div key = {`boardItem_${boardItem.ID}`}>
                    <BoardItem items = {boardItem} onSubmit = {boardItemUpdate}
                    />
                    </div>
                    <input ref={comment_id} value={boardItem.ID} hidden/>
                    <input ref={comment_text} placeholder="댓글 입력창"/>
                    <button type="button" onClick={insertComment}>
                        댓글 등록하기
                    </button>
                    </>
                ))
            }
            {
                boardItemComment.map((boardItemComment) => (
                    <div key = {`boardItemComment_${boardItemComment.ID}${boardItemComment.SEQ}`}>
                    <BoardItemComment items = {boardItemComment} onSubmit = {boardItemCommentUpdate}
                    />
                    </div>
                ))
            }
            <table>
                <thead>
                    <tr>
                        <th style={{border: "1px solid #444444"}}>ID</th>
                        <th style={{border: "1px solid #444444",width: "500px"}}>NAME</th>
                    </tr>
                </thead>
                <tbody>
                {
                    boardList.map((boardRow) => (
                        <tr id={boardRow.NAME} type="button" onClick={() => boardRowClick(boardRow)}>
                        <BoardRow items = {boardRow}/>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <table>
            {
                boardNumList.map((boardNum) => (
                    <button key = {`boardNum_${boardNum.LNUM}`} 
                        id={boardNum.LNUM} 
                        type="button" 
                        onClick={() => boardListNumClick(boardNum)}>
                    <BoardNum items = {boardNum}/>
                    </button>
                ))
            }
            </table>


            </>
        );
    }

}

export default Board_Page;