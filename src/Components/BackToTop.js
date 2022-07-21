import React, { useEffect, useState } from "react";


export const BackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 150) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return(<div>
        {backToTopButton && (
            <button onClick={scrollUp} className="backToTopBtn">⇧</button>
        )}
    </div>
    )
}