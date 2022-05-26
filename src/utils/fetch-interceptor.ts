import { getJwtToken } from "./localstorage.service";

export { }

const originalFetch = fetch;

function interceptorFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
  const jwtToken = getJwtToken();
  if (jwtToken) {
    init = init ?? { headers: {} };
    init.headers = {
      ...init.headers,
      'Authorization': `Bearer ${jwtToken}`
    }
  }

  return originalFetch(input, init);
}

window.fetch = interceptorFetch;