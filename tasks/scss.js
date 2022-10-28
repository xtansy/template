import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import size from "gulp-size";
import gcmq from "gulp-group-css-media-queries";

import gulpSass from "gulp-sass";
import compilSass from "sass";
const sass = gulpSass(compilSass);
import glob from "gulp-sass-glob";

import { config } from "./index.js";

export const scss = () => {
    return src(config.scss.root, config.sourcemaps)
        .pipe(plumber())
        .pipe(glob())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(gcmq())
        .pipe(size({ title: "SCSS До сжатия" }))
        .pipe(dest(config.pathDest, config.sourcemaps))
        .pipe(rename({ suffix: ".min" }))
        .pipe(csso())
        .pipe(size({ title: "SCSS После сжатия" }))
        .pipe(dest(config.pathDest, config.sourcemaps));
};
