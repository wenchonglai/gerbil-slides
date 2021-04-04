import React from "react"

export default function SessionWrapper({children}){
  return (
    <div className="session-wrapper">
      <section className="session signin">
        <img className='logo' src="/assets/logo-cr.svg"/>
        
        {children}
      </section>
    </div>
  )
}