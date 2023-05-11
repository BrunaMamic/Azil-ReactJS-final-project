import React, {createContext} from "react";

export const RoleContext = createContext({
    isAdmin: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setIsAdmin:  (value: (((prevState: boolean) => boolean) | boolean)) => {}
});
