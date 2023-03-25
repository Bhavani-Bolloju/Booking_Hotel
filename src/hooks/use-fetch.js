import useSwr from 'swr';

const fetcher = async function ([url, options]) {
  const data = await fetch(url, options);
  const res = await data.json();
  return res;
};
const useFetch = function (endpoint, options) {
  const { data, error, isLoading } = useSwr(
    [`https://booking-com.p.rapidapi.com/v1/hotels/${endpoint}`, options],
    fetcher
  );

  return { data, error, isLoading };
};

export default useFetch;
