import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [key, setKey] = useState('')
    return (<div>

        {/* <Link to="./report"></Link> */}
        <h1>코드 입력</h1>
        <input onChange={(temp) => {
            setKey(temp.target.value)
        }}></input>
        <Link to={"/report/"+key}>리포트 보기</Link>
        </div>)
}

export default LoginForm
