import { useEffect, useState } from "react";
import { API_TOKEN, API_URL } from "./data";

// создаём пользовательский хук для реальзации и унификации всех запросов к api
  function  useApi ({url}) {
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    function ajax({url}) {
        fetch(
            `${API_URL}${url}`,
            {
                "Content-Type": "application/json",
    
                headers: {
                    "X-Auth-Token": API_TOKEN,
                },
            }
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setLoaded(true);
                    setItems(result);
                },
    
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }
    useEffect(() => {
        ajax({url:url})
    }, [])
    
    return [loaded, error, items, ajax];
}

export default useApi;