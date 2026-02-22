import { config } from "dotenv";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin();
const envFilePath = path.resolve(process.cwd(), `.env.${process.env.APP_ENV || 'development'}`);
config({ path: envFilePath });

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  sassOptions: {
    includePaths: [path.join(__dirname, 'style')], 
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/**', 
      },
    ],
  },
  
};

export default withNextIntl(nextConfig);
