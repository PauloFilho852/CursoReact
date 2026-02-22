import { useState } from "react";
import { useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        console.log('useEffect fetchData');
        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
            if (method === 'POST') {
                let fetchOptions = [url, config];
                try {
                    const response = await fetch(...fetchOptions);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    setCallFetch(prev => !prev);

                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            }
        };
        console.log('useEffect httpRequest');
        
        httpRequest();  
        },[ config, method, url])

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            setMethod(method);            
        }
    }

    return { data, loading, error, httpConfig };
}   