import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button onClick={handleConfirm} /*disabled={isConfirmed}*/>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;

// import React from "react";

// class ConfirmButton extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             isConfirmed: false,

//         };
        
//         //밑에 클래스형 컴포넌트에서 바인드형으로 사용
//         // this.handleConfirm = this.handleConfirm.bind(this);
//     }

//     //밑에 클래스형 컴포넌트에서 바인드형으로 사용할때 함수선언방법
//     // handleConfirm() {
//     //     this.setState((prevState) => ({
//     //         isConfirmed: !prevState.isConfirmed,
//     //     }));
//     // }

//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }

//     render(){
//         return(
//             <button onClick={this.handleConfirm}
//             disabled={this.isConfirmed}
//             >
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }

// export default ConfirmButton;