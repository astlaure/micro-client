webpack-manifest-plugin to create manifest

# Demo how to add parts to container
Check micro-container and micro-client

# How to communicate ?
TODO


# Styling is imported by the container
1. still explore optimization thing
```json
optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'client',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
```