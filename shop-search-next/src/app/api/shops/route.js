import { client } from "../../../lib/microcms";

export async function GET() {
  const data = await client.get({
    endpoint: "shops",
    queries: { limit: 100 },
  });
  return Response.json(data.contents);
}