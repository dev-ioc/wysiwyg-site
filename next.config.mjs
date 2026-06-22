// /** @type {import('next').NextConfig} */
// import createNextIntlPlugin from 'next-intl/plugin';
// const nextConfig = {};

// export default nextConfig;
// const withNextIntl = createNextIntlPlugin();
// export default withNextIntl(nextConfig);
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
