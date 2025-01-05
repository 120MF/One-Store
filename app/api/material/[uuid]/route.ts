import { PgPool } from "@/utils/pgpool";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ uuid: string }> },
) {
  const uuid = (await params).uuid;
  const query = `
    SELECT uuid, name, description, image, created_at, rack_id, count
    FROM public.materials
    WHERE uuid = $1
  `;
  const values = [uuid];
  try {
    const client = await PgPool.connect();
    const result = await client.query(query, values);
    client.release();

    if (result.rows.length === 0) {
      return Response.json({ error: "error" });
    }

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("Error querying material by UUID:", error);
    throw error;
  }
}
