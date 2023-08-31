import { useEffect, useState } from "react";
import ApiService from "../services/api-client";



interface FetchResponse<T>{
    count:number;
    results:T[];
}

const useData =<T> (endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");

    useEffect (()=> {
        const controller = new AbortController();
        ApiService.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res)=> {

            setData(res.data.results)
        }).catch((error) => {
            if(error.name === 'AbortError') return;
            setError(error.message)
        });
        return () => controller.abort();
    },[]);
    return {data, error};

}

export default useData;


