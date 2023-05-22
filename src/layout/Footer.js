import React from 'react'
import { dataFooter } from '../FooterDB'

const Footer = () => {
  const copyRightYear = new Date().getFullYear
  return (
    <div className='footer mt-5 bg-dark text-white'>
      <div className='container d-flex justify-content-between alighn-items-center p-4'>
        {dataFooter.map((datumFooter)=>{
          const {id,title,contact,about,careers,blog} = datumFooter
          return(
            <div key={id}>
              <h2>{title}</h2>
              <ul className='list-unstyled lh-lg'>
                <li>{contact}</li>
                <li>{about}</li>
                <li>{careers}</li>
                <li>{blog}</li>
              </ul>
            </div>
          )
        })}
      </div>
        <p className='text-center m-0'>Copyright &copy; {copyRightYear} Miles.com All rights reserved</p>
    </div>
  )
}

export default Footer