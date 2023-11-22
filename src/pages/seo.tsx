import useApiRequest from "@/hooks/useApiRequest";
import React from "react";

type Props = {};

const SeoPage = (props: Props) => {
  const { data, loading, error } = useApiRequest({
    method: "GET",
    url: "https://api-harilibur.vercel.app/api",
    data: null,
  });

  console.log(data);

  return <div>{loading && <p>Loading...</p>}</div>;
};

export default SeoPage;
