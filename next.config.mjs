/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs"
const nextConfig = {};

const sentryConfig = withSentryConfig(nextConfig, {
    org: "chandigarh-university-2j",
    project: "javascript-nextjs",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: false,
});

export default sentryConfig;
