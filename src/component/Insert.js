// import { useEffect, useState, useRef, useCallback } from "react";

// function Insert(){
//     const [testList, setTestList] = useState([]);
//     const inputRef = useRef();

//     const submitName = useCallback(
//         async (e) => {

//             const input = inputRef.current;
//             const value = input?.value;

//             if (value) {
//                 const body = JSON.stringify({ test1 : value });
//                 const response = await fetch("/cocktail/api/post/i_test",
//                 {
//                     method : "POST",
//                     headers : {
//                         "Content-Type" : "application/json",
//                     },
//                     body : body,
//                 });

//                 if (response.ok) {
//                     setTestList([...testList, value]);
//                 }
//             }

//         },
//         [testList]
//     )

//     return (
//         <>
//             <input ref={inputRef} placeholder="이름"/>
//             <button type="button" onClick={(e) => submitName(e)}>
//                 제출하기
//             </button>

//             {testList.map((name) => (
//                 <div>
//                     {name}
//                 </div>
//             ))}
//         </>
//     );
// };

// export default Insert