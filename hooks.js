import React, {useEffect, useState} from "react";
import {handleResponse} from "./utils";

export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(handleResponse)
      .then(data => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return [data, error, loading];
};