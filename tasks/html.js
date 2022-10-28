import pkg from "gulp";
const { src, dest } = pkg;
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import size from "gulp-size";
import plumber from "gulp-plumber";

import { config } from "./index.js";

export const html = () => {
    return src(config.html.root)
        .pipe(plumber())
        .pipe(fileinclude())
        .pipe(size({ title: "HTML До сжатия" }))
        .pipe(htmlmin(config.htmlmin))
        .pipe(size({ title: "HTML После сжатия" }))
        .pipe(dest(config.pathDest));
};
