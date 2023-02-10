import { ContainerCalendarBoard } from './components/CalendarBoard/container';
import { ContainerNavigation } from './components/Navigation/container';

function App() {
  return (
    <div className="App">
      <ContainerNavigation />
      <ContainerCalendarBoard />
    </div>
  );
}

export default App;
