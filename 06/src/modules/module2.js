import add from './add'
import subtract from './subtract'
import multiply from './multiply'
import Vue from "Vue"
export default function () {
  console.log(add(3, 4) + subtract(10, 5) + multiply(1, 2),Vue)
}