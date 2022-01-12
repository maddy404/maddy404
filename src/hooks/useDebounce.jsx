import { useState } from "react";

export const useDebounce = () => {
  // const [orderNo, setOrderNo] = useState("");
  // const [emailPhoneZipCode, setEmailPhoneZipCode] = useState();
  const [formData, setFormData] = useState({
    orderNo: "",
    emailPhoneZipCode: "",
  });

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const update = debounce(function (e) {
    // console.log(e.target);
    // setOrderNo(e.target.value);
    // setEmailPhoneZipCode(e.target.value);
    const value = e.target.value;

    setFormData({ ...formData, [e.target.name]: value });
    console.log(formData);
  }, 500);

  return {
    update,
    // orderNo,
    // setOrderNo,
    // emailPhoneZipCode,
    // setEmailPhoneZipCode,
    setFormData,
    formData,
  };
};
