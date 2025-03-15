import { Webhook } from "svix";
import User from "../models/User.js";

export const cleekWebhooks = async (req, res) => {
  try {
    const webhook = new Webhook(process.env.CLERK_SECRET_KEY);
    await webhook.verify(
      JSON.stringify(req.body),
      {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"]
      }
    );
    const { data, type } = req.body;

    switch (type) {
      case "user.created":
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        res.json({});
        break;

      case "user.updated":
        const updatedUserData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, updatedUserData);
        res.json({});
        break;

      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        res.json({});
        break;

      default:
        res.status(400).json({ success: false, message: "Unhandled event type" });
        break;
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};