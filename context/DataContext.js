import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // state that holds api result
    const [upcomingData, setUpcomingData] = useState(null);
    const [pastData, setPastData] = useState(null);
    const [astronautData, setAstronautData] = useState(null);

    // ! api key do not leave this in deployed version
    const APIKEY = "279b59fd868c54d3a9ad0d21bdbef35633744a6b";

    // sets base url and passes in auth token as a header
    const apiClient = axios.create({
        baseURL: "https://lldev.thespacedevs.com/2.2.0/",
        headers: {
            Authorization: `Token ${APIKEY}`,
        },
    });

    // API Requests
    // ===========================
    const fetchData = async () => {
        try {
            // get locally stored item - date of last API fetch
            // const lastFetch = await AsyncStorage.getItem("lastFetch");

            // If it has been more than 15 minutes, send the request and update the timestamp (have limited API calls per hour - set to ensure I don't hit the limit)
            // if (!lastFetch || Date.now() - Number(lastFetch) > 15 * 60 * 1000) {
            // fetch all urls using Promise.all
            const [upcomingData, pastData, astronautData] = await Promise.all([apiClient.get("launch/upcoming/?limit=10"), apiClient.get("launch/previous/?limit=10"), apiClient.get("astronaut/?in_space=true")]);

            // set states of upcomingData, pastData, and astronautData to equal fetched data
            setUpcomingData(upcomingData.data);
            setPastData(pastData.data);
            setAstronautData(astronautData.data);

            // store date of fetch
            // await AsyncStorage.setItem("lastFetch", Date.now().toString());
            // }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // all values to be passed through context
    const contextValues = {
        upcomingData: upcomingData,
        pastData: pastData,
        astronautData: astronautData,
    };

    return <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>;
};

export default DataContext;
