import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
    const { isOnline, setIsOnline } = useContext(UserContext);

    return (
        <>
            <p>User is </p>
            <button onClick={() => {isOnline ? setIsOnline(false) : setIsOnline(true)}}>{isOnline ? "online" : "offline"}</button>
        </>
    );
}

export default UserProfile;