import React from 'react'

export default function Header() {
  return (
    <div className="header">
        <div className="headerframe">
  
             <div className="logo flex items-center gap-[10px]"><img src="MiniLogo.png" alt="" /> Juice Oasis</div>
             <div className="sections">
               <div className="products">მიწოდება</div>
               
                <div className="about">ჩვენს შესახებ</div>
                <div className="contactbtn"><button className='bg-red-600' >შეუკვეთე</button></div>
                
             </div>

        </div>
    </div>
  )
}
