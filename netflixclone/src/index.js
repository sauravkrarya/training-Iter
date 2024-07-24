import React from 'react';
import ReactDOM from 'react-dom/client';
import './netflix-index.css';
import { NetflixHeader } from '../neflix-header/netflix-header';
import { NetflixMain } from '../netflix-main/netflix-main';
import { NetflixRegister } from '../netflix-register/netflix-register';

export function NetflixIndex(){
    return(
        <div id="banner">
         <div id="shade">
            <NetflixHeader />
            <main>
                <div>
                <NetflixMain />
                </div>
            </main>
         </div>
        </div>
    )
}