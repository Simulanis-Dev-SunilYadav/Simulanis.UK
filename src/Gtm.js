import React from 'react'
import TagManager from 'react-gtm-module'

function Gtm() {
    const tagManagerArgs = {
        gtmId: 'GTM-XXXXXX'
    }
    TagManager.initialize(tagManagerArgs)
  return (
    <>

    </>
  )
}

export default Gtm
// sunildev