import React from "react"
import {CourseService, FoodService} from "../Service/FoodService";
import CourseTable from "../Components/FoodList";
import FoodList from "../Components/FoodList";

export default function AllOrders() {
    const [courses, setCourses] = React.useState([]);
    React.useEffect(getEnrolledCourses,[]);

    function getEnrolledCourses(){
        FoodService.getMenu().then(response => {
            setCourses(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function removeFood(foodName) {
        FoodService.removeFood(foodName).then(response => {
            alert(`${foodName} dropped`); 
            getEnrolledCourses();
        }).catch(error => {
            console.error(error);
            alert(`${foodName} failed ${error}!`);
        })
    }

    return (
        <div>
            <FoodList courses = {courses}
                         buttonLabel = {"Drop"}
                         buttonColor ={"error"}
                         handleButtonClick = {removeFood}/>
        </div>
    )
}