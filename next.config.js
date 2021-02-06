const withOffline = require('next-offline')
const nextConfig = {
    env: {
        ...process.env,
        __CF_USER_TEXT_ENCODING: undefined,
        NODE_ENV: undefined,
        __NEXT_PROCESSED_ENV: undefined,
        NODE_VERSION: undefined,
        NODE_OPTIONS: undefined,
        __CFBundleIdentifier: undefined,
    }
}

module.exports = withOffline(nextConfig)