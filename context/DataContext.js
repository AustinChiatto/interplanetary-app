import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // state that holds api result
    const [upcomingData, setUpcomingData] = useState(null);
    const [pastData, setPastData] = useState(null);
    const [astronautData, setAstronautData] = useState(null);

    // Upcoming API Request
    // ===========================
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fdo.rocketlaunch.live/json/launches?key=e3457b5f-07ea-416e-afdd-36084089052b");
                setUpcomingData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // Past API Request
    // ===========================
    useEffect(() => {
        const fetchData = async () => {
            const currDate = new Date();
            // Format to YYYY-MM-DD
            const beforeDate = `${currDate.getFullYear()}-${String(currDate.getMonth() + 1).padStart(2, "0")}-${String(currDate.getDate()).padStart(2, "0")}`;

            const prevDate = new Date();
            prevDate.setMonth(prevDate.getMonth() - 1);
            // Format to YYYY-MM-DD
            const afterDate = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, "0")}-${String(prevDate.getDate()).padStart(2, "0")}`;
            try {
                const response = await axios.get(`https://fdo.rocketlaunch.live/json/launches?key=e3457b5f-07ea-416e-afdd-36084089052b&before_date=${beforeDate}&after_date=${afterDate}`);
                setPastData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    // People In Space (Astronaut) API Request
    // ===========================
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get("https://fdo.rocketlaunch.live/json/launches?key=e3457b5f-07ea-416e-afdd-36084089052b");
    //             setUpcomingData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // all values to be passed through context
    const contextValues = {
        upcomingData: upcomingData,
        pastData: pastData,
        // astronautData: astronautData,
    };

    return <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>;
};

export default DataContext;
