
const API_BASE_URL='https://api.rawg.io/api';
const API_KEY='fa7efde0160b486e8403874e761f9d39';
interface ApiResponse<T>{
    data : T;
}

const ApiService={
    get : async<T>(endpoint :string, options?: RequestInit):  Promise<ApiResponse<T>>=>{
        const url =` ${API_BASE_URL}${endpoint}?key=${API_KEY}`;
        try{
            const response = await fetch(url, options);
            const data = await response.json();
            return{data};
        } catch(error){
            console.error('Error fetching data:' , error)
            throw error;
        }
    }
}

export default ApiService;