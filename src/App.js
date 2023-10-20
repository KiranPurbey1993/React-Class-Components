import './App.css';
import { UserProvider } from './component/UserContext';
// import ErrorBoudary from './ErrorBoudary';
// import Hero from './component/Hero';
// import PureParentComponent from './component/PureParentComponent';
// import RefsDemo from './component/RefsDemo';
// import FragmentDem from './component/FragmentDem';
// import Inline from './component/Inline';
// import NameList from './component/NameList';
// import Style from './component/Style';
// import ParentComponent from './component/ParentComponent';
// import UserGreet from './component/UserGreet';
// import EventBind from './component/EventBind';
// import Counter from './component/Counter';
// import Greet from './component/Greet';
// import Message from './component/Message';
// import Welcome from './component/Welcome';
// import './component/myStyle.css';
// import styles from  './component/myStyle.module.css'
// import Form from './component/Form'
// import LifeCycleMountingA from './component/LifeCycleMountingA';
// import FRParentInput from './component/FRParentInput';
// import ClickCounter from './component/ClickCounter'
// import HoverCounter from './component/HoverCounter';
// import CommonCounter2 from './component/CommonCounter2';
// import ClickCounter2 from './component/ClickCounter2';
// import HoverCounter2 from './component/HoverCounter2';


// import ComponentB from './component/ComponentB';
// import Portal from './component/Portal';

import PrintComponent from './component/HOC/PrintComponent';
function App() {
  return (
    <div className="App">
      {/* <ErrorBoudary>
        <Hero heroName="Hanuman"></Hero>
      </ErrorBoudary>
      <ErrorBoudary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoudary> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <PureParentComponent></PureParentComponent> */}
      {/* <FragmentDem/> */}
      {/* <LifeCycleMountingA/> */}
      {/* <Form/> */}
      {/* <div>
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
      </div> */}
      {/* <Inline/> */}
      {/* <Style primary={true} /> */}
      {/* <NameList></NameList> */}
      {/* <UserGreet></UserGreet> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <Greet name="Kiran" place="Rajur" /> */}
      {/* <Greet name="Ritesh" place="Bhaller">
        <p>I am a small town boy</p>
      </Greet> */}

      {/* <Welcome name="Ritesh"></Welcome>  */}
      {/* <Message/> */}
      {/* <Counter></Counter> */}
      {/* <ClickCounter  name="Kiran" />
      <HoverCounter></HoverCounter> */}

      {/* <CommonCounter2 render={(counter, incrementCounter)=> 
       <ClickCounter2 counter={counter} incrementCounter={incrementCounter}></ClickCounter2>
       }
      />

      <CommonCounter2 render={(counter, incrementCounter)=> 
       <HoverCounter2 counter={counter} incrementCounter={incrementCounter}></HoverCounter2>
       }
      /> */}
      {/* <UserProvider value="Kiran">
      <ComponentB></ComponentB>
      </UserProvider> */}
      {/* <Portal/> */}
      <PrintComponent />
    </div>
  );
}

export default App;
