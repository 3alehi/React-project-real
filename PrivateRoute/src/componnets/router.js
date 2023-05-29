import Course from "./Course";
import PrivateRoute from "./privateRoute";
import Login from "./Login";
import Panel from "./Panel";
import Seecourse from "./seecourse";
let rout = [

    {path:"/course" , element:<Course/>},
    {path:"/login" , element:<Login/>},
    {path:"/Seecourse/:id" , element:<Seecourse/>},
    {path:"/panel" , element:<PrivateRoute/> , children:[
        {path:"/panel" , element:<Panel/> , children:[
            {path:"profile" , element:<h1 style={{textAlign:"center"}}>this is profile</h1>},
            {path:"Dashboard" , element:<h1 style={{textAlign:"center"}}>Dashboard</h1>}
        ]}
    ]},
]
export {rout}