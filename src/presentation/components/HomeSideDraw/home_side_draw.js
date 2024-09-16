
import './home_side_draw.css';

export default function HomeSideDraw(){
    return <div className="home-left-draw" >
    <div className='home-left-draw-logo' >
        <img className='home-screen-logo' src='/assets/svg/hexaware-logo.svg'/>
        <p> Hexaware <br/> Assignment</p>
    </div>
    <div className='home-left-draw-sections'>
        <div className='draw-section' >
            <p>Dashboard</p>
        </div>
        <div className='draw-section' >
            <p>Employee</p>
        </div>
        <div className='draw-section' >
            <p>Calender</p>
        </div>
        <div className='draw-section' >
            <p>Inbox</p>
        </div>
  </div>
  </div>
}