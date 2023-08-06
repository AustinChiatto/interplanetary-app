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

    // Upcoming API Request
    // ===========================
    useEffect(() => {
        const fetchData = async () => {
            // Get the timestamp of the last fetch
            // const lastFetchString = await AsyncStorage.getItem("lastFetch");
            // const lastFetch = lastFetchString ? Number(lastFetchString) : 0;

            // const now = Date.now();

            // If the last fetch was less than an hour ago, don't fetch again
            // if (now - lastFetch < 15 * 60 * 1000) {
            //     return;
            // }

            try {
                const response = await axios.get("https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=10", {
                    headers: {
                        Authorization: `Token ${APIKEY}`,
                    },
                });

                setUpcomingData(response.data);
                // Save the timestamp of this fetch
                // await AsyncStorage.setItem("lastFetch", String(now));
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
            // Get the timestamp of the last fetch
            // const lastFetchString = await AsyncStorage.getItem("lastFetch");
            // const lastFetch = lastFetchString ? Number(lastFetchString) : 0;

            // const now = Date.now();

            // If the last fetch was less than an hour ago, don't fetch again
            // if (now - lastFetch < 15 * 60 * 1000) {
            //     return;
            // }

            try {
                const response = await axios.get("https://ll.thespacedevs.com/2.2.0/launch/previous/?limit=10", {
                    headers: {
                        Authorization: `Token ${APIKEY}`,
                    },
                });

                setPastData(response.data);
                // Save the timestamp of this fetch
                // await AsyncStorage.setItem("lastFetch", String(now));
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
