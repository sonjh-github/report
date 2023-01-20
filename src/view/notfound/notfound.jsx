import { Link } from "react-router-dom"

const NotFound = () => {
    return <h1>
        NOT FOUND
        <Link to='/login'>로그인 화면으로 가기</Link>
    </h1>
}
export default NotFound