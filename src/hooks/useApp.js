import { useEffect } from "react";
import { useAppContext } from "../contexts";
import axios from "axios";

export const useApp = () => {
  const { response, setResponse } = useAppContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("data.json");

        setResponse(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(`${err}:Unable to fetch Data`);
      }
    })();
  }, []);

  return { response };
};
