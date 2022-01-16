import { Link } from "react-router-dom";

const ChangeForm = () => {
    return (
        <div className="change">
            <Link to="/form">
                <span className="material-icons account">
                account_circle
                </span>
            </Link>
        </div>
    )
}

export default ChangeForm;