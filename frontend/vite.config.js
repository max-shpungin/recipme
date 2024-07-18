import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Get prod or dev URL

export default defineConfig({
  plugins: [react()],
});
