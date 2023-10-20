import React from "react";


const UserContext = React.createContext("Ritesh");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}
export default UserContext