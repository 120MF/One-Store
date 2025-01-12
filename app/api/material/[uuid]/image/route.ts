import { PgPool } from "@/utils/pgpool";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ uuid: string }> },
) {
  try {
    const query = `
      SELECT image
      FROM public.materials
      WHERE uuid = $1
    `;
    const values = [(await params).uuid];

    const client = await PgPool.connect();
    const result = await client.query(query, values);
    client.release();

    if (result.rows.length === 0) {
      return new Response("Image not found", { status: 404 });
    }

    const byteArray = result.rows[0].image;
    const blob = new Blob([byteArray], { type: "image/png" });
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Error retrieving image:", error);
    return new Response("Error retrieving image", { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ uuid: string }> },
) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const byteArray = new Uint8Array(arrayBuffer);

    const query = `
      UPDATE public.materials
      SET image = $1
      WHERE uuid = $2
    `;
    const values = [byteArray, (await params).uuid];

    const client = await PgPool.connect();
    await client.query(query, values);
    client.release();

    return new Response("File uploaded successfully", { status: 200 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return new Response("Error uploading file", { status: 500 });
  }
}
