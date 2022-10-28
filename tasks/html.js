import pkg from "gulp";
const { src, dest } = pkg;
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import plumber from "gulp-plumber";
import webpHtml from "gulp-webp-html";

import { config } from "./index.js";

export const html = () => {
    return src(config.html.root)
        .pipe(plumber())
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe(htmlmin(config.htmlmin))
        .pipe(dest(config.pathDest));
};
