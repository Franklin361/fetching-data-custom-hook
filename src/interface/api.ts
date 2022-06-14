
export interface Response {
    results: Result[]
}

export interface Result {
    id: number;
    name: string;
    image: string;
}

export interface DataState {
    loading: boolean;
    data: Result[];
    error: string | null;
}