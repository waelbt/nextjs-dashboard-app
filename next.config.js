// next.config.js

const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['my-forwarded-host.com'],
        },
    },
};

module.exports = nextConfig;
