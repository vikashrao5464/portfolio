import React from 'react'

export default function Footer() {
  return (
    <div className='mt-16 bg-black py-3 lg:py-6'>
      <div className='page-container flex flex-wrap items-center justify-between gap-4'>
        <img className='h-5 w-auto invert lg:h-9' src="/assets/logo.jpg" alt="Vikash Rao logo" />

        <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
          <p>@ 2026 Personal Portfolio</p>
          <p>Made by vikashrao</p>
        </div>
      </div>
    </div>
  )
}
