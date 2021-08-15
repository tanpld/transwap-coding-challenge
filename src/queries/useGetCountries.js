import { useQuery } from "react-query";

const useGetCountries = () => {
  const { isError, isLoading, data } = useQuery("countries", () =>
    fetch(
      "https://my-json-server.typicode.com/fred-ng/transwap-coding-challenge/countries"
    ).then((res) => res.json())
  );

  return {
    isError,
    isLoading,
    data,
  };
};

export default useGetCountries;