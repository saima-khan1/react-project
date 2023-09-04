
const API_BASE_URL='https://api.rawg.io/api';
const API_KEY='fa7efde0160b486e8403874e761f9d39';
interface ApiResponse<T>{
    data : T;
}

const ApiService={
    get : async<T>(endpoint :string, 
        options?: RequestInit,
        queryParams?:Record<string, string | number>,
        signal?:AbortSignal)
        :  Promise<ApiResponse<T>>=>{
        let url =` ${API_BASE_URL}${endpoint}?key=${API_KEY}`;
        if(queryParams){
            const query = new URLSearchParams();
            for(const key in queryParams){
                if(queryParams.hasOwnProperty(key)){
                    query.append(key, queryParams[key].toString());
                }
            }
            url += `&${query.toString()}`;
        }
        try{
            const response = await fetch(url, {...options, signal});
            const data = await response.json();
            return{data};
        } catch(error){
            console.error('Error fetching data:' , error)
            throw error;
        }
    }
}

export default ApiService;