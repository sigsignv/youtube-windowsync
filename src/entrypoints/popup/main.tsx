import { render } from "solid-js/web";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Unable to find root element");
}

render(() => <App />, root);
