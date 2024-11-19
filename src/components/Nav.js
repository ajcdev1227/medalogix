import React, {useEffect, useState} from 'react';

const Nav = () => {
    return (
        <nav className="absolute left-0 top-0 bg-white w-full h-[78px] inline-flex justify-between px-[40px]" style={{ boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.10)' }}>
            <img src="/assets/images/logo-img.png" className="mt-[25px] w-[191px] h-[28px] flex-shrink-0" alt="Logo"/>
            <div className="inline-flex items-center gap-[32px] py-[29px]">
                <a className="text-[#1A2141] font-montserrat text-[16px] font-semibold leading-normal cursor-pointer">Solutions</a>
                <a className="text-[#1A2141] font-montserrat text-[16px] font-semibold leading-normal cursor-pointer">Out Story</a>
                <a className="text-[#1A2141] font-montserrat text-[16px] font-semibold leading-normal cursor-pointer">Success Stories</a>
                <a className="text-[#1A2141] font-montserrat text-[16px] font-semibold leading-normal cursor-pointer">Expertise</a>
                <a className="text-[#1A2141] font-montserrat text-[16px] font-semibold leading-normal cursor-pointer">Contact Us</a>
            </div>
            <button className="inline-flex px-[24px] py-[12px] justify-center items-center rounded-[15px] bg-[#1A2141] text-white w-[95px] h-[44px] mt-[17px]">
                Login
            </button>
        </nav>
    );
}

export default Nav;
