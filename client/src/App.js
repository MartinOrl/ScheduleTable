
import Schedule from './pages/schedule/schedule';
import { createStructuredSelector } from 'reselect';
import { SelectModal } from './redux/modalReducer/modalSelectors';
import { connect } from 'react-redux';
import Modal from './components/modal/modal';
import EventContainer from './components/eventCountdown/eventCountdown';
import Navigation from './components/navigation/navigation';




function App({modal, lang}) {

  return (
    <div className='home'>
      <Navigation />
      <Modal {...modal} />
      <EventContainer />
      <Schedule />
      
    </div>
  );
}

const mapState = createStructuredSelector({
  modal: SelectModal,

})

export default connect(mapState,null)(App);
