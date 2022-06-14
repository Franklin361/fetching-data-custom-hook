import { useState, useEffect, useCallback } from 'react';
import { DataState, Response } from '../interface';

const url = 'https://rickandmortyapi.com/api/character/?page=8';

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
                const { results }: Response = await response.json();
                setDataState({
                    loading: false,
                    error: null,
                    data: results
                });
            } catch (error) {
                console.log(error)
                const e = error as Error
                console.log(e.message);
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