// 북이라는 jsx파일을 받아와서 name과 numOfPage를 넣어주면 
// book 함수의 props가 Library 애들의 값을 받아와서 반영

import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;