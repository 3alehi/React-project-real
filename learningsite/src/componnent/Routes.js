import Showcourse from "../Showcourse"
import Viwecourse from "./Viwecourse"
import CourseOff from "./CourseOff"
import Free from "./Free"
let RouteAddress= [
    {path:"/Viwecourse/:id" , element:<Viwecourse/>},
    {path:"/Showcourse" , element:<Showcourse/>},
    {path:'/free' , element:<Free/>},
    {path:"/courseoff" , element:<CourseOff/>}
]
export default RouteAddress