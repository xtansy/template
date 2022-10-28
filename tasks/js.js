import pkg from "gulp";
const { src, dest } = pkg;
import plumber from "gulp-plumber";
import babel from "gulp-babel";
import webpack from "webpack-stream";
import { config } from "./index.js";

export const js = () => {
    return src(config.js.root, config.sourcemaps)
        .pipe(plumber())
        .pipe(babel())
        .pipe(webpack(config.webpack))
        .pipe(dest(config.pathDest, config.sourcemaps));
};
