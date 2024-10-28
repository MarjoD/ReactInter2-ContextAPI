import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
	const { isOnline, setIsOnline } = useContext(UserContext);

	return (
		<>
			<p>User is </p>
			<input
				type="button"
				value={isOnline ? "online" : "offline"}
				onClick={() => {
					isOnline ? setIsOnline(false) : setIsOnline(true);
				}}
			/>
		</>
	);
}

export default UserProfile;
