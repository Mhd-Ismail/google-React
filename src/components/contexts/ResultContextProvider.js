import React, { useState, createContext, useContext } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';


export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setsearchTerm] = useState('');


    // type ==> /videos /images /search
    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'c316101f08mshae5cf08b20a71a8p11782djsn077e81aff7b0'
            }
        });
        const data = await response.json();



        if (type.includes('/news')) {
            setResults(data.entries);
        } else if (type.includes('/images')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }

        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setsearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
