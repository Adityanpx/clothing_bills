import React from 'react'
import { GiSpotedFlower } from "react-icons/gi";

function Box() {
  return (
    <div>
    <div className='mt-4 border border-black p-4 mx-3 mb-4 rounded-md'>
      <h1 className='text-left font-bold text-red-600'>सूचना</h1>
      <h1 className=' mt-1 flex gap-3 justify-center bg-red-500 text-white font-bold'><GiSpotedFlower className='mt-1' />
      कृपया कपडे डिलिव्हरी घेताना पावतीशिवाय कपडे मिळणार नाहीत. <GiSpotedFlower className='mt-1' /></h1>

      <h1 className='text-left flex gap-2'> <GiSpotedFlower className='mt-1' /> कपड्यांचे पूर्ण पैसे अगोदर द्यावे.</h1>

      <h1 className='text-left  gap-2 flex'><GiSpotedFlower className='mt-1' /> फिटिंगमध्ये काही तक्रार असल्यास, १० दिवसांच्या आत करून घेणे आणि २ दिवसांची वेळ द्यावी लागेल, नंतर तक्रार चालणार नाही.</h1>

      <h1 className='text-left  gap-2 flex'> <GiSpotedFlower className='mt-1' /> पावतीवरिल सर्व नग घेऊन जाणे आवश्यक आहे. एक नग किंवा एक ड्रेस मिळणार नाही.

 </h1>

      <h1 className='text-left flex  gap-2'> <GiSpotedFlower className='mt-1' /> कपड्यांची डिलिव्हरी वेळ संध्याकाळी ७:०० ते ९:३० वाजेपर्यंत राहील.

</h1>

      <h1 className='text-left flex  gap-2'> <GiSpotedFlower className='mt-1' />  भत्ती किंवा वॉशिंग नंतर कापड, लिनन किंवा इतर खादीची तक्रार चालणार नाही.</h1>

      <h1 className='text-left flex  gap-2'> <GiSpotedFlower className='mt-1' /> डिलिव्हरी तळण्याच्या १५ दिवसांच्या आत कपडे घेऊन जाणे आवश्यक आहे. नंतर तक्रार चालणार नाही.

</h1>


    </div> 
    <div className='flex justify-between mr-4'>
   < h1 className="font-extrabold text-left mb-2 text-xl mt-3 ml-2 font-varela">
        For  <span className="text-red-600">Sai </span> Stitch
        </h1>
        < h1 className="font-extrabold text-left mb-2 text-2xl mt-3 bg-red-500 text-white ml-2 font-varela">
         <span className="mx-4 rounded-xl">Mob : 889932222 </span> 
        </h1>
        </div>
    </div>
  )
}

export default Box