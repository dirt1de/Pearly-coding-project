import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from "dotenv";

dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __FROM_PHONE_NUMBER__: `"${process.env.FROM_PHONE_NUMBER}"`, // wrapping in "" since it's a string
  },
  plugins: [react()],
});
