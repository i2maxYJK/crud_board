import { useRef, useCallback } from "react";

function Insert(){
    // const [testList, setTestList] = useState([]);
    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const submitName = useCallback(
        async (e) => {
            const boarditem = {
                id : 999,
                name : inputRef1.current.value,
                content : inputRef2.current.value,
            }

            console.log(boarditem);

            if (boarditem) {
                const body = JSON.stringify(boarditem);
                const response = await fetch("/test/api/test/i_tnb_item",
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

    return (
        <>
            <input ref={inputRef1} placeholder="제목"/>
            <input ref={inputRef2} placeholder="내용"/>
            <button type="button" onClick={(e) => submitName(e)}>
                등록하기
            </button>

            {/* {testList.map((name) => (
                <div>
                    {name}
                </div>
            ))} */}
        </>
    );
};

export default Insert