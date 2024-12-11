import React, { useState, useEffect } from "react";

function Compass() {
    const [angle, setAngle] = useState(343); // Angle initial
    const [direction, setDirection] = useState("NW");

    // Fonction pour déterminer la direction selon l'angle
    const getDirection = (angle) => {
        if (angle >= 337.5 || angle < 22.5) return "N";
        if (angle >= 22.5 && angle < 67.5) return "NE";
        if (angle >= 67.5 && angle < 112.5) return "E";
        if (angle >= 112.5 && angle < 157.5) return "SE";
        if (angle >= 157.5 && angle < 202.5) return "S";
        if (angle >= 202.5 && angle < 247.5) return "SW";
        if (angle >= 247.5 && angle < 292.5) return "W";
        if (angle >= 292.5 && angle < 337.5) return "NW";
    };

    // Simulation pour faire tourner le capteur
    useEffect(() => {
        const interval = setInterval(() => {
            setAngle((prev) => (prev + 1) % 360); // Tourne à intervalle constant
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Mise à jour de la direction
    useEffect(() => {
        setDirection(getDirection(angle));
    }, [angle]);

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
            <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Compass</h2>
            </header>
            <div className="flex items-center justify-center p-6">
                <div className="relative w-72 h-72 flex items-center justify-center">
                    {/* Cercle contenant les points cardinaux qui tourne */}
                    <div
                        className="absolute w-full h-full rounded-full bg-gray-900 z-10"
                        style={{
                            transform: `rotate(-${angle}deg)`, // Rotation inverse pour aligner avec la goutte
                        }}
                    >
                        {/* Points cardinaux */}
                        <span className="absolute top-2 left-1/2 transform -translate-x-1/2 text-red-500 font-bold">
                            N
                        </span>
                        <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-gray-500">
                            S
                        </span>
                        <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                            W
                        </span>
                        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                            E
                        </span>
                    </div>
                    {/* Goutte rouge fixe avec le border-radius modifié */}
                    <div
                        className="absolute w-36 h-36 bg-red-500 z-20"
                        style={{
                            borderRadius: "50% 50% 0%", // Forme avec coin supérieur arrondi et bas plat
                            transform: "rotate(225deg)", // La goutte ne bouge pas, reste fixe
                        }}
                    ></div>
                    {/* Cercle noir au centre avec l'affichage de l'angle et direction */}
                    <div className="absolute w-32 h-32 bg-gray-900 rounded-full flex flex-col items-center justify-center text-white z-30">
                        <div className="text-2xl font-bold">{angle}°</div>
                        <div className="text-lg">{direction}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compass;
