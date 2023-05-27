import Course from "./Course"
import Showcourse from "./Showcourse"
import Panel from "./Panel"

let route = [
{path:"/course" , element:<Course/> },
{path:"/showcourse/:id" , element: <Showcourse/>},
{path:"/panel" , element:<Panel/>}
]
export default route