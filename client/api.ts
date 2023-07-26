export const BASE = "http://localhost:3000";

export const createApiUrl = {
  sendMessage: () => BASE + "/send-message",
};

export const postFetch = async (
  url: string,
  body: any,
  toJson: boolean = false
) => {
  const headers = { "Content-type": "application/json" };
  const cfg = {
    headers,
    method: "POST",
    body: JSON.stringify(body),
  };

  if (toJson) {
    const res = await fetch(url, cfg);
    return await res.json();
  } else return fetch(url, cfg);
};
