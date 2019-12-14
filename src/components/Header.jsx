import React from 'react';

import Signpost from '../images/Signpost'
export function Header() {
  return (<nav className="db dt-l w-100 border-box pa3 ph5-l shadow-1">
    <div className="db dtc-l v-mid blue link w-100 w-50-l tc tl-l mb2 mb0-l flex justify-center" title="Home">
    <Signpost className="w-auto h2 mr3-ns"/>
     <h1 className='dn dib-ns f2 fw9'>Freelance Field Guide</h1> 
    </div>
    <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
      <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" href="#" title="Blog">
        Pricing
          </p>
      <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" href="#" title="Blog">
        Blog
          </p>
      <p className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" href="#" title="Blog">
        Contact
          </p>
      <p className="link dim dark-gray f6 f5-l dib b pointer" href="#" title="Contact">
        Sign In
          </p>
    </div>
  </nav>);
}
