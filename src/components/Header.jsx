import React from 'react';

import Signpost from '../images/Signpost';
export function Header() {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l shadow-1">
      <div
        className="db dtc-l v-mid blue link w-100 w-50-l tc tl-l mb2 mb0-l flex justify-center"
        title="Home"
      >
        <Signpost className="w-auto h2 mr3-ns" />
        <h1 className="dn dib-ns f2 fw9">Freelance Field Guide</h1>
      </div>
      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <a
          className="link dim  f6 f5-l dib mr3 mr4-l pointer blue"
          href="#pricing"
          title="Pricing"
        >
          Pricing
        </a>
        <a
          className="link dim f6 f5-l dib mr3 mr4-l pointer blue"
          href="https://freelancefish.com/"
          title="Blog"
          target="_blank" rel="noopener noreferrer"
        >
          Blog
        </a>
        {/* <a
          className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer"
          href="mailto:"
          title="Contact"
        >
          Contact
        </a> */}
       <a class="link hover-silver near-black dib mh3 tc pointer" href="https://twitter.com/freelance_fish" title="Twitter" target="_blank" rel="noopener noreferrer">
    <svg class="dib h1 w1" fill="#303d70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
    
  </a>
      </div>
    </nav>
  );
}
