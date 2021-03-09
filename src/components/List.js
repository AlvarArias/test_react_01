// Component List
import * as pi from "./Math.js";
import { suma, resta, multiplica, divide } from "./Calculator.js";

export default function List() {
  return (
    <div className="List">
      <ul>
        My list
        <li>{pi.default}</li>
        <li>{pi.dublePi()}</li>
        <li>{pi.triplePi()}</li>
      </ul>
      <ul>
        <li>{suma(3, 2)}</li>
        <li>{resta(3, 2)}</li>
        <li>{multiplica(3, 2)}</li>
        <li>{divide(3, 2)}</li>
      </ul>
    </div>
  );
}
