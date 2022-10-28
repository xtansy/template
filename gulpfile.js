import pkg from "gulp";
const { watch, parallel, series } = pkg;
import bs from "browser-sync";
const browserSync = bs.create();

//===================================
// src создает файловый поток чтения
// pipe поток дальше
// dest создает поток записи
//===================================

import { html, clear, config, js, scss, img } from "./tasks/index.js";

const watcher = () => {
    watch(config.html.watch, html).on("change", browserSync.reload);
    watch(config.scss.watch, scss).on("change", browserSync.reload);
    watch(config.js.watch, js).on("change", browserSync.reload);
    watch(config.img.watch, img).on("change", browserSync.reload);
};

const server = () => {
    return browserSync.init({
        server: {
            baseDir: config.pathDest,
        },
    });
};

export const dev = series(
    clear,
    parallel(html, scss, js, img),
    parallel(watcher, server)
);
