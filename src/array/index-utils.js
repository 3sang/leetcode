import Index from "./index.md";
import Index1 from "./1.md";
import Index2 from "./2.md";
import Index3 from "./3.md";

// 选择链表下的题目序列。
const arrayType = (no) => {
  switch (no) {
    case "0":
      return Index;
    case "1":
      return Index1;
    case "2":
      return Index2;
      case "3":
        return Index3;
    default:
      return Index;
  }
};

export default arrayType;
