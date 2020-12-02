import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const token = localStorage.getItem("token")
    
    axios.get(url, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        setData(response.data.posts);
        console.log("teste, testandoooo")
    }).catch((error) => {
        console.log(error.message);
    });

  }, [url]);

  return data;
}
