import qs from "query-string";

interface buildQueryProps {
    type: string;
    query: string;
    category: string;
    page: number;
    perPage?: number;
}

export const buildQuery = (params: buildQueryProps) => {

    const { type, query, category, page = 1, perPage = 20 } = params;

    const conditions = [`*[_type=="${type}"`];
  
    if (query) conditions.push(`title match "*${query}*"`);
  
    if (category && category !== "all") {
      conditions.push(`category == "${category}"`);
    }
  
    // Calculate pagination limits
    const offset = (page - 1) * perPage;
    const limit = perPage;
  
    return conditions.length > 1
      ? `${conditions[0]} && (${conditions
          .slice(1)
          .join(" && ")})][${offset}...${limit}]`
      : `${conditions[0]}][${offset}...${limit}]`;

}


interface formUrlQueryProps {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export const formUrlQuery = ({ params, key, value, keysToRemove } : formUrlQueryProps ) => {
  
  const currentUrl = qs.parse(params);

  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove: string) => {
      delete currentUrl[keyToRemove];
    })
  } else if (key && value) {
    currentUrl[key] = value;
  }

  return qs.stringifyUrl(
    { url: window.location.pathname, query: currentUrl },
    { skipNull: true } 
  );
}