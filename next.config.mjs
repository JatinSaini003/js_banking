/** @type {import('next').NextConfig} */
import { withSentryConfig } from "@sentry/nextjs"
const nextConfig = {
    typescript: {
        ignoreBuildError: true
    },
    eslint: {
        ignoreDuringBuild: true
    }
};

const sentryConfig = withSentryConfig(nextConfig, {
    org: "chandigarh-university-2j",
    project: "javascript-nextjs",
    authToken: process.env.SENTRY_AUTH_TOKEN,
    silent: false,
});

export default sentryConfig;
