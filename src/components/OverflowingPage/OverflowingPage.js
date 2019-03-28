import React from 'react';
import './OverflowingPage.scss';

function OverflowingPage({hd, ft, children}) {
    return (
        <div className="chw-overflowing-page">
            {hd && (
                <div className="chw-header">
                    {hd}
                </div>
            )}
            <div className="chw-content-wrapper">
                <div className="chw-content-overflow-wrapper">
                    {children}
                </div>
            </div>
            {ft && (
                <div className="chw-footer">
                    {ft}
                </div>
            )}
        </div>
    );
}

export default OverflowingPage;