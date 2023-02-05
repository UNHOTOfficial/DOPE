import { config } from "./url";

export default async function fetcher(endpoint: string, fetchType: string) {
  const url = config.url;
  let response;

  switch (fetchType) {
    case "static":
      const staticFetch = await fetch(url + endpoint);
      if (!staticFetch.ok) {
        throw new Error("Failed To Fetch Data.");
      }
      response = staticFetch.json();
      break;

    case "revalidate":
      const revalidate = await fetch(url + endpoint, {
        next: { revalidate: 10 },
      });
      if (!revalidate.ok) {
        throw new Error("Failed To Fetch Data.");
      }
      response = revalidate.json();
      break;

    case "dynamic":
      const dynamic = await fetch(url + endpoint, { cache: "no-store" });
      if (!dynamic.ok) {
        throw new Error("Failed To Fetch Data.");
      }
      response = dynamic.json();
      break;
  }
  return response;
}
