import React from 'react';
import WorkStyle from './WorkStyle';
import '../css/workStyles.css';
// import { Outlet } from 'react-router-dom' ;
import bgVideo from '../assets/bg-video.mp4';

export default function AdminHome() {

  
    return (
    <>
      <div className="grid-workStyles">
        <div className="grid-style">
          <WorkStyle
            title="All Users"
            routePath="/basic" />
        </div>
      </div>
    </>
  );
}