import { useEffect, useState } from "react";
import { useDebounce } from "./";
import axios from "axios";
export const useValidateOrder = () => {
  const [errorMsg, setErrorMsg] = useState("Invalid Order ID");
  const [isError, setIsError] = useState(false);
  const { formData, update } = useDebounce();
  const [isBtnDisabled, setIsBtnDisabled] = useState();
  useEffect(() => {
    (async () => {
      try {
        if (formData?.orderNo) {
          const response = await axios.get("data.json");
          const result = response.data.orderInfo.find(
            (orderInfo) => orderInfo.orderID === formData?.orderNo
          );
          if (result) {
            if (result?.isValid) {
              setIsError(false);
            } else {
              setIsError(true);
              setErrorMsg("Order is not Eligible for return");
            }
          } else {
            setIsError(true);
            setErrorMsg("Order Not Found");
          }
        } else {
          formData?.orderNo?.length === 0 && setIsError(false);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [formData?.orderNo]);

  useEffect(() => {
    if (!isError) {
      if (formData?.orderNo && formData?.emailPhoneZipCode) {
        setIsBtnDisabled(false);
      } else {
        setIsBtnDisabled();
      }
    } else {
      setIsBtnDisabled();
    }
  }, [isError, formData?.orderNo, formData?.emailPhoneZipCode, isBtnDisabled]);

  const orderNo = formData?.orderNo;
  return { orderNo, update, errorMsg, isError, isBtnDisabled };
};
