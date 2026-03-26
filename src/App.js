import CountCharacter from "./basic/CountCharacter";
import CustomHook from "./basic/CustomHook-GE";
import FibonacciCalculator from "./basic/fibonocci";
import OddEven from "./basic/OddEven";
import PalindromeChecker from "./basic/palindrome";
import MissingChar from "./basic/MissingChar";

import "./styles.css";
import Accordian from "./components/Accordian";
import Sorting from "./basic/sorting";
import CustomHooks from "./components/CustomHooks-GE";
import FunctionCurry from "./basic/FunctionCurry";
import HigherOrderComponent from "./components/HOC";
import Internationalization from "./components/i18n";
import Lifecycle from "./components/hooks/LifeCycle";
import ForwardReff from "./components/hooks/Forwardreff";
import FetchAPI from "./api/FetchAPI";
import StaleClosureExample from "./components/hooks/StaleClosures";
import UseMemo from "./components/optimisation-technics/UseMemo";
import UseCallBack from "./components/optimisation-technics/UseCallBack";
import ReactMemo from "./components/optimisation-technics/ReactMemo";
import ReactMemoClass from "./components/optimisation-technics/ReactMemoClass";
import CoordinateLabel from "./components/RenderProps/CoordinateLabel";
import FollowerCircle from "./components/RenderProps/FollowerCircle";
import ClassLifeCycle from "./components/ClassLifeCyle";
import UseRef from "./components/hooks/UseRef";
import Counter from "./components/CustomHooks/Counter";
import TableFilterAPI from "./components/TableFilterAPI/TableFilterAPI";
import ListDelegation from "./js-concepts/event-delegation";

export default function App() {
  return (
    <div className="App">
      {/* <FibonacciCalculator />
      <PalindromeChecker /> */}
      {/* <CountCharacter /> */}
      {/* <CustomHook /> */}
      {/* <OddEven /> */}
      {/* <MissingChar /> */}
      {/* <Accordian title="What is React?" content={"React is a Javascript Language Library for building user interfaces."} />
      <Accordian title="What is a component?" content={"Components are the building blocks of a React application's UI. These components split up the entire UI into small independent and reusable pieces."} /> */}
      {/* <Sorting /> */}
      {/* <CustomHooks /> */}
      {/* <FunctionCurry /> */}
      {/* <HigherOrderComponent /> */}
      {/* <Internationalization /> */}
      {/* <Lifecycle /> */}
      <ForwardReff />
      {/* <FetchAPI /> */}
      {/* <StaleClosureExample /> */}
      {/* <UseMemo />
      <UseCallBack />
      <ReactMemo /> */}
      {/* <ReactMemoClass /> */}
      {/* ----------RenderProps--------------- */}
      {/* <CoordinateLabel /> */}
      {/* <FollowerCircle /> */}
      {/*-----------Class Life Cycle----------------- */}
      {/* <ClassLifeCycle /> */}
      {/* <UseRef /> */}
      {/* Use Previous - useRef and useEffect combined to implement this */}
      {/* <Counter /> */}
      {/* <TableFilterAPI /> */}
      {/* JS Concepts */}
      {/* <ListDelegation /> */}
    </div>
  );
}
