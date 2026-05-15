import { shops } from "../../../data/shops";

export async function GET() {
  return Response.json(shops);
}