import Index from "./index.md";
import Index1 from "./1.md";
import Index2 from "./2.md";
import Index3 from "./3.md";
import Index4 from "./4.md";

// 选择链表下的题目序列。
const stringType = (no) => {
  switch (no) {
    case "0":
      return Index;
    case "1":
      return Index1;
    case "2":
      return Index2;
    case "3":
      return Index3;
    case "4":
      return Index4;
    default:
      return Index;
  }
};

export default stringType;
