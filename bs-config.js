module.exports = {
    server: {
        baseDir: "./",
        directory: true
    },
    files: ["**/*.html", "**/*.css", "**/*.js"],
    watchOptions: {
        ignored: 'node_modules'
    }
}
