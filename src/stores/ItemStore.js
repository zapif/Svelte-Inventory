import { writable } from "svelte/store";
// TODO place add and edit functions in here
const ItemStore = writable([
  {
    category: "Terminal",
    serial: "12345",
    store: "517",
  },
  {
    category: "Mac Mini",
    serial: "43124",
    store: "1029",
  },
]);

export default ItemStore;
