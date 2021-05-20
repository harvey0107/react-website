import React from 'react'
import AppHero from '../components/home/Hero'
import AppAbout from '../components/home/About'
import AppFeature from '../components/home/Feature'
import AppWork from '../components/home/Work'

function AppHome() {
    return (
        <div className='main'>
            <AppHero/>
            <AppAbout/>
            <AppFeature/>
            <AppWork/>
        </div>
    )
}

export default AppHome
