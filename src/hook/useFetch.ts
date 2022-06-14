import { useState, useEffect } from 'react';

interface Response {
    results: Result[]
}

interface Result {
    id: number;
    name: string;
    image: string;
}

export const useFetch = () => {
    const [data, setData] = useState<Result[]>([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/?page=8')
            .then(res => res.json())
            .then((res: Response) => {
                setData(res.results);
            })
            .catch(console.log)
    }, []);

    return {
        data
    }
}