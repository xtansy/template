import { hello } from "./modules/hello.js";

window.addEventListener("DOMContentLoaded", () => {
    hello(1, 2);
    hello(5, 9);
    hello(5, 10);
});
