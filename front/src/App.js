import { ContainerAddScheduleDialog } from './components/AddScheduleDialog/cotainer';
import { ContainerCalendarBoard } from './components/CalendarBoard/container';
import { ContainerNavigation } from './components/Navigation/container';

function App() {
  return (
    <div className="App">
      <ContainerNavigation />
      <ContainerCalendarBoard />
      <ContainerAddScheduleDialog />
    </div>
  );
}

export default App;
