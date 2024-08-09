import React from 'react'

export default function About() {
  return (
    <div className="aboutt">
        <div className="abouttittle">ჩვენს შესახებ</div>
        <div className="aboutframe">

           <div className="leftabout">
            <div className="bigtittle text-gray-500">ჩვენი პროდუქცია მაქსიმალურად იფილტრება 
              ყველანაირი დანამატებისა და ქიმიკატებისგან თავის არიდებით ჩვენი წვენები
              გამოირჩევა შაქრის შემცველობის შემცირების რათა მივიღოთ მაქსიმალურად ჯანსაღი პროდუქტი
              ჩვენი კომპანია უკვე 1 წელია მოქმედებს ბაზარზე
            </div>
            <div className="bigtittle text-gray-500">ჩვენი სერვისი მოქმდებს მთელს საქართველოში კომფორტული მიწოდების 
              სერვისით 
            </div>
            <br />
            <div className="bigtittle text-gray-500">ჩვენი კომპანია თანამშრომლობს უკვე 100+ მარკეტთან ჩვენი მიწოდების პოლიტიკა
              საკმაოდ გამარტივებულია
            </div>
            <div className="bigtittles responsivetittle flex gap-[25px] text-gray-500">
              <div className="markets">
                <div className="value text-emerald-500">100+</div>
                <div className="bigtittletittle">მარკეტი</div>
              </div>
              <div className="markets ">
                <div className="value text-emerald-500">25.000+</div>
                <div className="bigtittletittle">მოხმარებელი</div>
              </div>
              <div className="markets ">
                <div className="value text-emerald-500">80+</div>
                <div className="bigtittletittle">დასაქმებული</div>
              </div>
            </div>
           </div>
           <div className="rightabout"><img src="juicebox.png" alt="" /></div>

        </div>
    </div>
  )
}
