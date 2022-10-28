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

    js: {
        root: `${pathSrc}/js/*.js`,
        watch: `${pathSrc}/js/**/*.js`,
    },

    img: {
        root: `${pathSrc}/img/*.{png,jpg,jpeg,gif,svg}`,
        watch: `${pathSrc}/img/**/*.{png,jpg,jpeg,gif,svg}`,
        dest: `${pathDest}/img`,
    },

    htmlmin: {
        collapseWhitespace: true,
    },

    webpack: {
        mode: "production",
    },

    sourcemaps: {
        sourcemaps: true,
    },
};
