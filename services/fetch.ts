export default async function fetcher(url: string) {
  const req = await fetch(url);
  return await req.json();
}
