const glob = require('glob')

module.exports = {

    webpack(config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },

    async exportPathMap () {
        const paths = { '/': { page: '/' } }

        glob.sync('md/*.md').forEach(name => {
            const slug = name.split('/')[1].replace(/ /g, '-').slice(0, - 3).trim()
            paths[`/post/${slug}`] = { page: '/post/[slug]', query: { slug } }
        })

        return paths
    }
}

