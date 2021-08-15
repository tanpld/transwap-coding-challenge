import { useQuery } from "react-query";

const useGetBankDetails = (id) => {
  const { isError, isLoading, data } = useQuery(["bankDetails", id], () =>
    fetch(
      `https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/banks/${id}`
    ).then((res) => res.json())
  );

  return {
    isError,
    isLoading,
    data,
  };
};

export default useGetBankDetails;
