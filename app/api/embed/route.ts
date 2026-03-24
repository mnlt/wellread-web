import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "text required" }, { status: 400 });
    }

    const res = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: text.slice(0, 8000),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "OpenAI error" }, { status: 502 });
    }

    const data = await res.json();
    const embedding = data.data?.[0]?.embedding;

    if (!embedding) {
      return NextResponse.json({ error: "no embedding returned" }, { status: 502 });
    }

    return NextResponse.json({ embedding });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
