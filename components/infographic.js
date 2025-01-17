import React, { useState } from 'react';
import styles from '../styles/infographic.module.css';

const atmosphereData = [
    { name: 'Anzahl Müllteile insgesamt', umlaufbahn: '200 bis 46.380 km', info: '32.076 teile',
        color: 'rgba(0, 0, 0, 1)', scaleFactor: 0.8}, /* rgba(163, 217, 245, 0.7) */
    { name: 'Niedriger Erdorbit', umlaufbahn: '200 bis 2.000 km', info: '19.795 teile',
        color: 'rgba(54, 85, 132, 1)', hoverColor: 'rgba(79, 129, 160, 1)',
        scaleFactor: 0.76 },
    { name: 'Mittlerer Erdorbit', umlaufbahn: '2.001 bis 31.750 km', info: '524 teile',
        color: 'rgba(18,31,65,1)', hoverColor: 'rgba(34,59,114,1)',
        scaleFactor: 1.2 },
    { name: 'Übergangszonen', umlaufbahn: '31.751 bis 35.585 km', info: '8.437 teile',
        color: 'rgba(54, 85, 132, 1)', hoverColor: 'rgba(79, 129, 160, 1)',
        scaleFactor: 1.06 },
    { name: 'Geostationärer Orbit', umlaufbahn: '35.586 bis 46.380 km', info: '3.320 teile',
        color: 'rgba(19,31,88,1)', hoverColor: 'rgba(30,66,96,1)',
        scaleFactor: 1.1 },
];

export default function Inforgaphic() {
    const [selectedLayer, setSelectedLayer] = useState(atmosphereData[0]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleLayerClick = (layer) => {
        setSelectedLayer(layer);
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.layerContainer}>
                {atmosphereData.map((layer, index) => {
                    const baseSize = 200 + index * 75; // Grundgröße
                    const size = baseSize * layer.scaleFactor; // Skalierung einberechnen, damit sie unterschiedlich groß sein können
                    return (
                        <div
                            key={index}
                            className={styles.layer}
                            style={{
                                background: hoveredIndex === index ? layer.hoverColor : layer.color,
                                width: `${size}px`,
                                height: `${size}px`,
                                zIndex: atmosphereData.length - index,
                            }}
                            onClick={() => handleLayerClick(layer)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    );
                })}
                <img
                    src="/NASA animated earth.gif" /* https://giphy.com/gifs/J0QVUUvPeLS5G */
                    alt="Earth"
                    className={styles.earth}
                    onClick={() => handleLayerClick(atmosphereData[0])}
                />
                <img
                    src="/NASA animated earth BACKGROUND.png" /* https://giphy.com/gifs/J0QVUUvPeLS5G */
                    alt="Earth Background"
                    className={styles.earthBackground}
                />
            </div>
            <div className={styles.infoBox}>
                {selectedLayer ? (
                    <>
                        <h2>{selectedLayer.name}</h2>
                        <p>({selectedLayer.umlaufbahn})</p>
                        <p>{selectedLayer.info}</p>
                    </>
                ) : (
                    <p>Click a layer to learn more about it.</p>
                )}
            </div>
        </div>
    );
}
