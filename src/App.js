import React from 'react';
import back1 from './Images/steel-pipelines-cables-plant.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <div className='bg'>
      <div className='image' style={{ backgroundColor: 'lightblue', position: 'relative' }}>
        <img src={back1} alt='bgimage' style={{ height: '75%', width: '100%' }} />
        <div className='caption' style={{ 
          background: 'white',
          padding: '30px 6px 48px',
          font: 34,
          lineHeight: 1.5, // Adjust as needed
          position: 'absolute',
          top: '65%', // Adjust as needed
          left: '12%', // Adjust as needed
          transform: 'translate(-50%, -50%)',
          fontFamily: 'DraegerPangeaDisplay',
          fontWeight: 'normal',
          letterSpacing: 0,
          marginBottom: '20px',
          fontSize: '100%',
          color: 'blue'
        }}>
          <h2>Medical Gas Alarm System</h2>
          <button type='button' className="btn btn-primary">Contact Us</button>
        </div>
      </div>
      <section style={{ paddingTop: '60px', background:'lightblue'}}>
          <div className='container' style={{ margin: '0 auto', width: '94%', maxWidth: '1280px', display: 'block'}}>
            <h1 style={{text:'boldy'}}>Medical Gas Alarm Management Systems</h1>
            <div className='box' style={{display:'grid',gridTemplate:'repeat(1,1fr)',marginBottom:'2.5rem'}}>
              <div className='large'>
                <p>All alarms and operational data right where you need it.</p>
                <div className='button-wrapper' style={{display:'flex',justifyContent:'space-between'}}>
                  <div className='button-container'>
                    <button type='button' className='btn btn-primary' formTarget='_self'
                    style={{display:'flex',flexWrap:'wrap',grid:'10px',gap:'10px'}}>Request for a quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section style={{background:'white',width:'100%',padding:'1.25rem'}}>
          <div className='list'>
            <div className='list1'>
              <header>
                <div className='info1'>
                  <h3 style={{fontSize:'1.35rem',lineHeight:'1.5',wordBreak:'break-word',fontWeight:'550'}}>Area of Use</h3>
                  <p>Sample Text</p>
                </div>
                <div className='info2'>
                <h3 style={{fontSize:'1.35rem',lineHeight:'2.5',wordBreak:'break-word',fontWeight:'580'}}>Area of Use</h3>
                </div>
              </header>
            </div>
          </div>
        </section>
    </div>
    </div>
  );
}

export default App;
