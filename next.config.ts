import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);

// import type { NextConfig } from "next";
// import createNextIntlPlugin from "next-intl/plugin";

// const nextConfig: NextConfig = {};

// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);
