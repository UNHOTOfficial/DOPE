import { config } from "./url";

export default async function fetcher(endpoint: string) {
  const url = config.url;
  try {
    const req = await fetch(url + endpoint);
    return await req.json();
  } catch (error: any) {
    throw new Error(error.toString());
  }
}
