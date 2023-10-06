import {Link} from "react-router-dom";

const RegisterSuccess = () => {
    return (
        <>
            <h2>You are Successfully registered !!</h2>
            <h2>Now you can <Link to="/userlogin">Login</Link></h2>
        </>
    );
}


export default RegisterSuccess;
