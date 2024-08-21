interface Props<S, F> {
  status: number;
  data: S | null;
  error: F | null;
}

export default function fetchWithType<TResponseSuccess, TResponseError>(
  url: string,
  config: RequestInit = {},
): Promise<Props<TResponseSuccess, TResponseError>> {
  return fetch(url, config).then(async (response) => {
    const status = response.status;

    if (status < 200 || status > 299) {
      try {
        const result = await response.json().then((data) => data as TResponseError);
        console.log(`[LOGGER] ${status} - ${url} | `, result);
        return {
          status,
          data: null,
          error: result,
        };
      } catch (_) {
        console.log(`[LOGGER] ERROR - ${url} | `, _);
        const result = await response.text().then((data) => data as TResponseError);
        return {
          status,
          data: null,
          error: result,
        };
      }
    }

    try {
      const result = await response.json().then((data) => data as TResponseSuccess);
      console.log(`[LOGGER] ${status} - ${url} | `, result);
      return {
        status,
        data: result,
        error: null,
      };
    } catch (_) {
      console.log(`[LOGGER] ERROR - ${url} | `, _);
      const result = await response.text().then((data) => data as TResponseError);
      return {
        status,
        data: null,
        error: result,
      };
    }
  });
}
