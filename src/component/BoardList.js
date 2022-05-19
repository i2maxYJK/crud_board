import { useEffect, useState, useCallback } from "react";
import Board from "./Board";
import BoardNum from "./BoradNum"
import '../App.css';

function BoardList() {
    // 게시물 리스트
    const [boardList, setboardList] = useState([]);

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

    // 버튼 이벤트
    const boardItem = useCallback(
        async (e) => {
            const input = this.state.inputValue;
            const value = input?.value;

            if (value) {
                const body = JSON.stringify( {lnum : value} );
                const response = await fetch("/test/api/test/s_tnb_list_num?num=" + value,
                {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : body,
                });
            }
        }
    )
    // 작업중...

    // 실제 출력 화면
    if (boardList.length > 0) {
        return(
            <>
            <table class="border_black">
                <thead>
                    <tr>
                        <th style={{border: "1px solid #444444"}}>RNUM</th>
                        <th style={{border: "1px solid #444444"}}>ID</th>
                        <th style={{border: "1px solid #444444"}}>NAME</th>
                        <th style={{border: "1px solid #444444",width:"200px"}}>CONTENT</th>
                    </tr>
                </thead>
                <tbody>
            {
                boardList.map((board) => (
                    <Board items = {board}/>
                ))
            }
                </tbody>
            </table>
            <table>
            {
                boardNumList.map((boardNum) => (
                    <button id={boardNum.LNUM} type="button" onClick={(e) => boardItem(e)}>
                    <BoardNum items = {boardNum}/>
                    </button>
                ))
            }
            </table>


            </>
        );
    }

}

export default BoardList;