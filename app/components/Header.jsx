import React from 'react'

export default function Header() {
  return (
    <div className="header">
        <div className="headerframe">
  
             <div className="logo flex items-center gap-[10px]"><img src="MiniLogo.png" alt="" /> Juice Oasis</div>
             <div className="sections">
               <a href='#miwodeba' className="products">მიწოდება</a>
               
                <a href='#about' className="about">ჩვენს შესახებ</a>
                <div className="contactbtn"><a href='#contacts' className='bg-red-600' >შეუკვეთე</a></div>
                
             </div>

        </div>
    </div>
  )
}
