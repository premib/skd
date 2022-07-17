import Image from 'next/image'
import gradCap from '../public/images/grad-cap.png'
import calendar from '../public/images/calendar.png'
import Headline3 from './headline-3'
import Headline4 from './headline-4'

interface ExpAndRespProp {
     companyName: string,
     time: string,
     role: string,
     information: string,
     responsibilities: string[]
}

const ExperienceAndResponsibility: React.FC<ExpAndRespProp> = ({
     companyName,
     time,
     role,
     information,
     responsibilities
}) => {
     return (          
          <>
               <Headline4>
                    <span className='lg:text-[1.5rem]'>{companyName}</span> &nbsp; <span className='text-[.750rem] font-light'>{time}</span> <br/>
               </Headline4>
               <p className='text-slate-900 text-lg text-bold mb-3 -mt-2'>{role}</p>
               <p className='text-slate-600 text-md text-justify'>
                    {information}
               </p>
               <p className='text-slate-900 text-lg text-bold mb-3 mt-6'>Responsibility</p>
               <div className='ml-5'>
                    <ul className='text-slate-600 text-md list-disc list-outside marker:text-slate-600'>
                         {
                              responsibilities.map((list: string, i: number) => {
                                   return <li key={i} className='my-1'>{list}</li>
                              })
                         }
                    </ul>
               </div>      
          </>    
     )
}

export default ExperienceAndResponsibility


