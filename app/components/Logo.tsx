import * as React from 'react';
import './Logo.css';

function Logo (props: {}) {
    return (
        <>
            <div className='logoContainer'>
                <div className="logoBraceContainer">
                    <span className='logoBraceStyle'>&#123;&nbsp;</span>
                </div>             
                <div className="logoVariableContainer">
                    <span className='logoQuoteStyle'> &quot;</span>
                    <span className='logoVariableStyle'>name</span>
                    <span className='logoQuoteStyle'>&quot;:&nbsp;</span>
                </div>
                <div className="logoValueContainer">
                    <span className='logoQuoteStyle'>&quot;</span>
                    <span className='logoValueStyle'>Kevin&nbsp;J&nbsp;Landymore</span>
                    <span className='logoQuoteStyle'>&quot;&nbsp;</span>
                </div>
                <div className="logoBraceContainer">
                    <span className='logoBraceStyle'>&#125;</span>
                </div>
            </div>
        </>
    );
}

export default Logo;