import * as React from "react"
import CourseTable from "../Components/FoodList"
import { CourseService, FoodService } from "../Service/FoodService"

export default class NewOrders extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        FoodService.getMenu().then(response => {
            //successfull callback
            this.setState({
                courses: response.data
            })
        }).catch(error => {
            //failed callback
            console.log(error);
        });
    }

    orderFood(foodName) {
        FoodService.orderFood(foodName).then(response => {
            alert(`${foodName} ordered`);
        }).catch(error => {
            alert(`${foodName} ordered failed ${error}!`);
        })
    }

    render() {
        return(
            <div>
                <CourseTable courses = {this.state.courses}
                buttonLabel = {"order"}
                buttonColor ={"success"}
                handleButtonClick = {this.enrollCourses}/>
            </div>
        )
    }
}