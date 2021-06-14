import Index from "./index.md";
import Index1 from "./1.md";
import Index2 from "./2.md";
import Index3 from "./3.md";
import Index4 from "./4.md";
import Index5 from "./5.md";
import Index6 from "./6.md";
import Index7 from "./7.md";
import Index8 from "./8.md";
import Index9 from "./9.md";
import Index10 from "./10.md";
import Index11 from "./11.md";
import Index12 from "./12.md";

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
    case "4":
      return Index4;
    case "5":
      return Index5;
    case "6":
      return Index6;
    case "7":
      return Index7;
    case "8":
      return Index8;
    case "9":
      return Index9;
    case "10":
      return Index10;
    case "11":
      return Index11;
      case "12":
        return Index12;
    default:
      return Index;
  }
};

export default arrayType;
