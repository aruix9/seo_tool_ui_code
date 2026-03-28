import { connectToDatabase } from "@/lib/db";
import { Attachment } from "@/models/attachment";
import { Cart } from "@/models/cart";
import Link from "@/models/link";
import { writeFile } from "fs";
import { join } from "path";

export async function POST(req: Request) {
  await connectToDatabase();

  try {
    const formData = await req.formData();
    const userId = formData.get("userId");
    const linkId = formData.get("linkId");
    const file: File | null = formData.get("attachment") as unknown as File;
    if (!file) {
      return Response.json(
        {
          success: true,
          message: "No files received.",
        },
        { status: 400 },
      );
    }
    const link = await Link.findById(linkId);
    if (!link) {
      return Response.json(
        { success: false, message: "Link not found" },
        { status: 404 },
      );
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = file.name
      .replace(/ /g, "_")
      .replace(/[^a-zA-Z0-9_.]/g, "");

    const path = join("./public", "uploads", fileName);
    await writeFile(path, buffer, async (err) => {
      if (err) {
        console.error("Attachment Upload Error:", err);
        return Response.json({ success: false, message: err }, { status: 500 });
      }
    });
    const attachment = await Attachment.create({
      name: fileName,
      fileUrl: path.replace("public\\", "").replaceAll("\\", "/"),
    });
    const updatedCart = await Cart.findOneAndUpdate(
      { userId, "items.linkId": linkId },
      { $set: { "items.$.attachmentId": attachment._id } },
      { new: true },
    );

    if (!updatedCart) {
      return Response.json(
        { success: false, message: "Cart or cart item not found" },
        { status: 404 },
      );
    }
    return Response.json(
      { success: true, message: "Attachment uploaded successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Attachment Upload Error:", error);
    return Response.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
