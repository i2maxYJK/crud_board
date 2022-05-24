import { useEffect, useState, useCallback } from "react";
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
            const value = boardItem.RNUM;

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

    // ***** [작업중] 게시물 수정
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

    // 실제 출력 화면
    if (boardList.length > 0) {
        return(
            <>
            {
                boardItem.map((boardItem) => (
                    <div key = {`boardItem_${boardItem.ID}`}>
                    <BoardItem items = {boardItem} onSubmit = {boardItemUpdate}
                    />
                    </div>
                ))
            }
            {
                boardItemComment.map((boardItemComment) => (
                    <BoardItemComment items = {boardItemComment}/>
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
                    <button id={boardNum.LNUM} type="button" onClick={() => boardListNumClick(boardNum)}>
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