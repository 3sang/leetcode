import Index from "./index.md";
import listType from './list/index-utils'
import arrayType from './array/index-utils'
import treeType from './tree/index-utils'
import stackType from './tree/index-utils'
import queueType from './tree/index-utils'

// 处理按钮点击分为哪些类别
export default function menuType(key){
  const [type, no] = key.split("-");
  let result = <></>;
  switch (type) {
    case "list":
      result = listType(no)
      break;
    case "array":
      result = arrayType(no)
      break;
    case "tree":
      result = treeType(no)
      break;
    case "stack":
      result = stackType(no)
      break;
    case "queue":
      result = queueType(no)
      break;
    default:
      result = Index;
      break;
  }

  return result;
};
