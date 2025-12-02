import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("BitLinks");
    const collection = db.collection("url");

        const doc = await collection.findOne({ shorturl: body.shorturl });
    if (doc) {
      return Response.json(
        {   success: false, error: true,
            message: "Short URL already exists. Please choose a different one." },
        { status: 400 }
      );
    }
    // insert URL
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      message: "URL shortened successfully!",
    });
  } catch (error) {
    console.error("Error in /api/generate:", error);
    return Response.json(
      { success: false, error: true, message: error.message },
      { status: 500 }
    );
  }
}
