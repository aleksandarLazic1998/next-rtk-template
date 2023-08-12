interface IProps {
  baseQuery: string;
  queryObject?: { [key: string]: string | number } | null;
}

export const queryBuilder = ({ baseQuery, queryObject }: IProps) => {
  const query = new URL(baseQuery, window.location.origin);

  if (queryObject) {
    Object.entries(queryObject).forEach((queryItem) => {
      const [key, value] = queryItem;
      if (!key) return;
      query.searchParams.append(key, String(value));
    });
  }

  const decodedQueryString = decodeURIComponent(query.toString());

  return decodedQueryString;
};
