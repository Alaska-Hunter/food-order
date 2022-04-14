import axios from "../axios";

export const FoodService = {
    getMenu: function() {
        return axios.get('/api/menu')
    },
    orderFood: (foodName) => {
        foodName = encodeURI(foodName);
        return axios.post(`/api/customer/food/${foodName}`);
    },
    getCustomerOrder: () => {
        return axios.get('api/customer/order');
    },
    removeFood: (foodName) => {
        foodName = encodeURI(foodName);
        return axios.delete(`/api/customer/food/${foodName}`);
    }
}