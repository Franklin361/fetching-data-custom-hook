import { useState, useEffect, useCallback } from 'react';
import { DataState, Response } from '../interface';

const url = 'https://rickandmortyapi.com/api/character/?page=18';

export const useFetch = () => {

    const [dataState, setDataState] = useState<DataState>({
        data: [],
        loading: true,
        error: null
    });

    const handleFetch = useCallback(
        async () => {
            try {
                const response = await fetch(url);
                
                if(!response.ok) throw new Error(response.statusText);
                
                const dataApi: Response = await response.json();

                setDataState( prev => ({
                    ...prev,
                    loading: false,
                    data: dataApi.results
                }));

            } catch (error) {
                
                setDataState( prev => ({
                    ...prev,
                    loading: false,
                    error: (error as Error).message
                }));
            }
        },
        [],
    )


    useEffect(() => {
        if (dataState.data.length === 0) handleFetch();
    }, []);

    return {
        ...dataState
    }
}