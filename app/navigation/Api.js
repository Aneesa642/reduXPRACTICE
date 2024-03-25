import axios from "axios";
import { setData } from "../slice/invoiceslice";

const fetchData = async () => {
    try {
        const response = await axios.get("https://automationexercise.com/api/productsList");
        setData(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export default fetchData