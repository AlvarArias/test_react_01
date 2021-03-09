// Component List
import * as pi from "./Math.js";

export default function List() {
  return (
    <div className="List">
      <ul>
        My list
        <li>{pi.default}</li>
        <li>{pi.dublePi()}</li>
        <li>{pi.triplePi()}</li>
      </ul>
    </div>
  );
}
