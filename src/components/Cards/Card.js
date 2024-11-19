import React, {useEffect, useState} from 'react';

const Card = ({index, src, curSubIndex, title, cardIndex, curIndex, setCurIndex, setCurSubIndex, setModalShow}) => {
    return (
        <>
            <div className={`flex flex-col gap-[16px] w-[400px] ${index % 2 === 1 ? 'justify-end' : 'justify-start'}`}>
                <div className="flex flex-row w-full items-center justify-center zoom-on-hover">
                    <img className={`${index % 2 === 0 ? 'h-[400px]' : 'h-[320px] w-[320px]'} self-stretch rounded-[24px] cursor-pointer`}
                         src={src}
                         alt={title}
                         onClick={() => {
                             setCurIndex(cardIndex);
                             setCurSubIndex(index);
                             setModalShow(true);
                         }}
                         onDragStart={(e) => e.preventDefault()}
                    />
                </div>
                <div className="flex flex-col gap-[8px] items-start self-stretch">
                    <span className="text-[#1A2141] w-full font-montserrat text-[24px] font-normal leading-[120%] text-center">{title}</span>
                    <span className="text-[#1A2141] w-full font-montserrat text-[18px] font-normal leading-[160%] text-center">Step {index + 1}</span>
                </div>
                <div className="flex flex-row justify-center">
                    {cardIndex === curIndex && index === curSubIndex ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="16" fill="#1A2141"/>
                            <path d="M16 9V16M16 16H9M16 16V23M16 16H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="15.5" stroke="#1A2141"/>
                            <path d="M16 9V16M16 16H9M16 16V23M16 16H23" stroke="#1A2141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
            </div>
        </>
    );
}

export default Card;
