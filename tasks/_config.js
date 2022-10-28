const pathSrc = "./src";
const pathDest = "./public";

export const config = {
    pathSrc,
    pathDest,
    html: {
        root: `${pathSrc}/html/index.html`,
        watch: `${pathSrc}/html/**/*.html`,
    },

    css: {
        root: `${pathSrc}/css/*.css`,
        watch: `${pathSrc}/css/**/*.css`,
    },

    scss: {
        root: `${pathSrc}/scss/*.scss`,
        watch: `${pathSrc}/scss/**/*.scss`,
    },

    htmlmin: {
        collapseWhitespace: true,
    },

    sourcemaps: {
        sourcemaps: true,
    },
};
