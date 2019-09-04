module.exports = {
    devServer: {
        // proxy: 'http://localhost:5042'
        proxy:  {
            // '^/api': {
            '^https://api.coindesk.com': {
                target: 'https://api.coindesk.com',
                // pathRewrite: {'^/api/': ''}
            }
        }
    }
}