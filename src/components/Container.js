import React, {useEffect, useState} from 'react';
import Cards from './Cards/Cards';

const Container = ({cardsInfo, curIndex, setCurIndex, curSubIndex, setCurSubIndex, setModalShow}) => {
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [maxTranslateX, setMaxTranslateX] = useState(0);

    useEffect(() => {
        let initialTranslateX = 0;
        for (let i = 0; i < curIndex; i++) {
            initialTranslateX += 336 + 480 * cardsInfo[i].cardInfo.length;
        }
        initialTranslateX += 480 * curSubIndex;
        initialTranslateX = Math.min(maxTranslateX, initialTranslateX);
        setTranslateX(initialTranslateX);
    }, [curIndex, curSubIndex])

    useEffect(() => {
        let initialTranslateX = 0;
        for (let i = 0; i < cardsInfo.length - 1; i++) {
            initialTranslateX += 336 + 480 * cardsInfo[i].cardInfo.length;
        }
        initialTranslateX += 480 * (cardsInfo[cardsInfo.length - 1].cardInfo.length - 2);
        setMaxTranslateX(initialTranslateX);
    }, [cardsInfo]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const diff = e.clientX - startX;
        setStartX(e.clientX);
        setTranslateX((prev) => Math.min(maxTranslateX, prev - diff));

        // let beforeTranslateX = 0;
        // for (let i = 0; i < curIndex; i++) {
        //     beforeTranslateX += 336 + 480 * cardsInfo[i].cardInfo.length;
        // }
        // beforeTranslateX += 480 * curSubIndex;
        // if (translateX - beforeTranslateX > 480 && curSubIndex < cardsInfo[curIndex].cardInfo.length - 1) {
        //     setCurSubIndex(curSubIndex + 1);
        // }
    };

    const handleMouseUp = (e) => {
        setIsDragging(false);
        document.body.style.userSelect = "";
    };

    return (
        <>
            <div className="h-[610px] ml-[102px] mb-[54px] mr-[80px] flex flex-row w-[calc(100% - 102px)]">
                <div className="relative w-full"
                     onMouseDown={handleMouseDown}
                     onMouseMove={handleMouseMove}
                     onMouseUp={handleMouseUp}
                     onMouseLeave={handleMouseUp}>
                    <div className="carousel-slide flex flex-row gap-[120px] transition-transform duration-500"
                         style={{
                             transform: `translateX(-${translateX}px)`
                         }}>
                        {cardsInfo.map((card, index) => (
                            <Cards
                                info={card}
                                key={index}
                                cardIndex={index}
                                curSubIndex={curSubIndex}
                                curIndex={curIndex}
                                setCurIndex={setCurIndex}
                                setCurSubIndex={setCurSubIndex}
                                setModalShow={setModalShow}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Container;
