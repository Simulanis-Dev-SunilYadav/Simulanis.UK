import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Email() {
    const [copy, setCopy] =useState("Click to copy")
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {copy}
        </Tooltip>
    );

    const copyData = () =>{
        navigator.clipboard.writeText('customer.support@simulanis.com');
        setCopy("Copied");
        setTimeout(() => {
            setCopy("Click to copy")
        },1000);
    }

    const copyData1 = () => {
        navigator.clipboard.writeText('connect@simulanis.com');
        setCopy("Copied");
        setTimeout(() => {
            setCopy("Click to copy")
        },1000);
    }


  return (
    <>
    <OverlayTrigger 
      placement="right"
      delay={{ show: 150, hide: 50 }}
      overlay={renderTooltip}
    >
      <p style={{cursor:'pointer', position:'absolute', paddingRight:'10px'}} className='mb-0' onClick={copyData}>customer.support@simulanis.com</p>
    </OverlayTrigger>
    <OverlayTrigger
      placement="right"
      delay={{ show: 150, hide: 50 }}
      overlay={renderTooltip}
    >
      <p style={{cursor:'pointer', position:'absolute', bottom:'0px', paddingRight:'10px'}} className='mb-0' onClick={copyData1}>connect@simulanis.com</p>
    </OverlayTrigger>
    </>
  )
}

export default Email