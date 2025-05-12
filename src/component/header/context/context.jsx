import { createContext } from "react";
import { FormComponent } from "../form/form";
import { DrawerComponent } from "../drawer/drawer";
import { TableComponent } from "../table/table";

export const userContext = createContext ({
    users: [], 
    setUsers: () => {},
})


export default userContext;

<userContext>
    <FormComponent/>
    <DrawerComponent/>
    <TableComponent/>
</userContext>

