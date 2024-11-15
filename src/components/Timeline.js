import React, {useEffect, useState} from 'react';

const Timeline = ({cardsInfo, curIndex, curSubIndex, setCurIndex, setCurSubIndex}) => {
    return (
        <>
            <div className="relative mb-[75px] h-[56px] mx-[80px] flex-shrink-0">
                <div className="relative w-full h-full flex flex-row justify-between">
                    <div className="flex flex-row p-[4px] justify-start gap-[10px] rounded-[12px] border-[2px] border-[#1A2141] bg-white z-[20] cursor-pointer">
                        <div className="flex flex-row gap-[8px] px-[16px] py-[8px] bg-[#1A2141] rounded-[8px]"
                             onClick={() => {
                                 if (curIndex > 0) {
                                     setCurIndex(curIndex - 1);
                                 }
                                 setCurSubIndex(0);
                             }}>
                            <div dangerouslySetInnerHTML={{__html: cardsInfo[curIndex].icon}}/>
                            <span className="flex flex-col justify-center text-[#A1CFC2] font-montserrat text-[18px] font-semibold leading-[120%]">
                                {cardsInfo[curIndex].type === "Pulse" ? `${cardsInfo[curIndex].type + ' ' + cardsInfo[curIndex].title}` : `${cardsInfo[curIndex].title}`}
                            </span>
                        </div>
                    </div>
                    <div className="relative h-full flex-grow flex flex-row justify-between items-center">
                        <div/>
                        {Array.from({length: cardsInfo[curIndex].cardInfo.length}, (_, i) => (
                            (i === curSubIndex) ? (
                                <div
                                    key={i}
                                    className="flex flex-col justify-center items-center bg-white border-[2px] border-[#1A2141] w-[42px] h-[42px] flex-shrink-0 z-[20] rounded-3xl cursor-pointer"
                                    onClick={() => setCurSubIndex(i)}>
                                    <div className="flex flex-col justify-center items-center bg-[#1A2141] w-[34px] h-[34px] flex-shrink-0 rounded-3xl">
                                        <span className="text-[#F7F7F7] text-center font-montserrat font-semibold text-[18px]">{i + 1}</span>
                                    </div>
                                </div>
                            ) : (
                                <div
                                    className="flex flex-col justify-center items-center bg-[#A1CFC2] w-[34px] h-[34px] flex-shrink-0 rounded-3xl z-[20] cursor-pointer"
                                    onClick={() => setCurSubIndex(i)}>
                                    <span className="text-[#1A2141] text-center font-montserrat font-semibold text-[18px]">{i + 1}</span>
                                </div>
                            )
                        ))}
                        <div/>

                        <div className="absolute top-[27px] w-full h-[2px] bg-[#1A2141] z-[5]"></div>
                        <div
                            className={`absolute top-[27px] h-[2px] bg-[#A1CFC2] z-[5]`}
                            style={{
                                width: ` ${100 - (curSubIndex + 1) / (cardsInfo[curIndex].cardInfo.length + 1) * 120 + '%'}`,
                                marginLeft: `${(curSubIndex + 1) / (cardsInfo[curIndex].cardInfo.length + 1) * 120 + '%'}`
                            }}
                        ></div>
                        <div className={`absolute h-full flex flex-col justify-center items-center z-[20]`}
                             style={{left: `${(curSubIndex + 1) / (cardsInfo[curIndex].cardInfo.length + 1) * 120 + '%'}`}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                <circle cx="4" cy="4" r="4" fill="#1A2141"/>
                            </svg>
                        </div>
                    </div>
                    {curIndex < 3 && (
                        <div
                            className="inline-flex h-full px-[16px] py-[8px] items-center gap-[8px] rounded-[8px] border-[2px] border-[#1A869C] bg-white z-[20] cursor-pointer"
                            onClick={() => {
                                setCurIndex(curIndex + 1);
                                setCurSubIndex(0);
                            }}>
                            <div dangerouslySetInnerHTML={{__html: cardsInfo[curIndex + 1].icon}}/>
                            <span className="flex flex-col justify-center text-[#1A869C] font-montserrat text-[18px] font-semibold leading-[120%]">
                            {cardsInfo[curIndex + 1].type === "Pulse"
                                ? `${cardsInfo[curIndex + 1].type + ' ' + cardsInfo[curIndex + 1].title}`
                                : `${cardsInfo[curIndex + 1].title}`}
                        </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
        ;
}

export default Timeline;
