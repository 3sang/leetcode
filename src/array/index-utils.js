import Index from "./index.md";
import Index1 from "./1.md";

// 选择链表下的题目序列。
const arrayType = (no) => {
  switch (no) {
    case "0":
      return Index;
    case "1":
      return Index1;
    default:
      return Index;
  }
};

export default arrayType;