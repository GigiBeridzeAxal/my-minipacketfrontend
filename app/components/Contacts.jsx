'use client'
import axios from 'axios'
import React, { useState } from 'react'

export default function Contacts() {

    const [name , setname] = useState()
    const [surname , setsurname] = useState()
    const [desc , setdesc] = useState()
    const [phone , setphone] = useState()
    const [businessname , setbussinessname] = useState()

    
    const [namealert , setnamealert] = useState(false)
    
    const [surnamealert , setsurnamealert] = useState(false)

    const [bussinessalert , setbussinessalert] = useState(false)
    
    const [phonealert , setphonealert] = useState(false)
    const [descalert , setdescalert] = useState(false)

    const [created , setcreated] = useState(false)

    const Send = async(req,res) => {
        setnamealert(false)
        setsurnamealert(false)
        setbussinessalert(false)
        setphonealert(false)
        setdescalert(false)
        

        if(name == undefined){
            setnamealert(true)

        }
        if(desc == undefined){
            setdescalert(true)

        }
        
        if(surname == undefined){
            setsurnamealert(true)

        }
        
        if(businessname == undefined){
            setbussinessalert(true)

        }
        
        if(phone == undefined){
            setphonealert(true)

        }else{
            if(phone.length >= 9 ){

            }else{
                setphonealert(true)
            }
        }

        

        const create = await axios.post(process.env.NEXT_PUBLIC_BACKEND , 
           {
            name:name,
            surname:surname,
            desc:desc,
            phone:phone,
            bussinesname:businessname
        }
        )
        if(create.status == 201){
            setcreated(true)
        }



    }

  return (
    <div id='contacts' className="contacts">
        <div className="contactstittle">შეკვეთა</div>
        <div className="contactsframe">

            
            <div className="rightcontact">
                {created == true ? <div className="succescreated text-emerald-500 flex w-[100%] items-center justify-center">თქვენი შეტყობინება წარმატებით გაიგზავნა</div> : <div></div>}
                <div className="lineinput flex gap-[55px]">
                    <div className="input">
                     

                        {namealert == true ? <div className="text-red-500">გთხოვთ შეიყვანოთ თქვენი სახელი</div> : <div className="nametittle">სახელი</div>}
                        <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='ზაზა' />
                    </div>
                    <div className="input">
                    {surnamealert == true ? <div className="text-red-500">გთხოვთ შეიყვანოთ თქვენი გვარი</div> : <div className="nametittle">გვარი</div>}
                        <input onChange={(e) => setsurname(e.target.value)} type="text" placeholder='კვარაცხელია' />
                    </div>
                </div>
                <div className="lineinput flex gap-[55px]">
                    <div className="input">
                    {phonealert == true ? <div className="text-red-500">გთხოვთ შეიყვანოთ თქვენი ვალიდური მობილურის ნომერი</div> : <div className="nametittle">მობილურის ნომერი</div>}
                        <input onChange={(e) => setphone(e.target.value)} maxLength={16} minLength={8}  type="text" placeholder='593484036' />
                    </div>
                    <div className="input">
                    {bussinessalert == true ? <div className="text-red-500">გთხოვთ შეიყვანოთ თქვენი ბიზნესის დასახელება</div> : <div className="nametittle">ბიზნესის დასახელება</div>}
                        <input onChange={(e) => setbussinessname(e.target.value)} type="text" placeholder='რესტორანი თეთრი გედი' />
                    </div>

                </div>
                <div className="textarea">
                {descalert == true ? <div className="text-red-500">გთხოვთ შეიყვანოთ თქვენი ტექსტი</div> : <div className="nametittle">შეტყობინება</div>}
                <textarea onChange={(e) => setdesc(e.target.value)} name="" placeholder='გამარჯობა გვსურს თქვენი პროდუქცია რესტორანი თეთრი გედი' id=""></textarea>
                <button onClick={(e) => Send()} className='bg-blue-500' >გაგზავნა</button>
                </div>
             
            </div>

            

        </div>
    </div>
  )
}
