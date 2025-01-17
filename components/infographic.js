import React, { useState } from 'react';
import styles from '../styles/infographic.module.css';
import { InView } from 'react-intersection-observer';

const atmosphereData = [
    { name: 'Anzahl Müllteile insgesamt', umlaufbahn: '200 bis 46.380 km', info: '32.076 Teile',
        moreInfo: 'Beinhaltet abgeschaltete Satelliten, ausgediente Raketenteile und verschiedene Trümmerteile.',
        color: 'rgba(0, 0, 0, 1)', scaleFactor: 0.8}, /* rgba(163, 217, 245, 0.7) */
    { name: 'Niedriger Erdorbit', umlaufbahn: '200 bis 2.000 km', info: '19.795 Teile',
        moreInfo: 'Der am meisten vermüllte Orbit — hier herrscht die größte Gefahr für Menschenleben und Infrastruktur.',
        color: 'rgba(71, 141, 157, 1)', hoverColor: 'rgba(125, 207, 216, 1)',
        scaleFactor: 0.75 },
    { name: 'Mittlerer Erdorbit', umlaufbahn: '2.001 bis 31.750 km', info: '524 Teile',
        moreInfo: 'Die geringste Anzahl an umherschwebendem Weltraumschrott.',
        color: 'rgba(32,75,109,1)', hoverColor: 'rgba(69,161,168,1)',
        scaleFactor: 1.1 },
    { name: 'Übergangszonen', umlaufbahn: '31.751 bis 35.585 km', info: '8.437 Teile',
        moreInfo: 'Diese Teile sind noch auf dem Weg zu geostationären Objekten; sie dürfen also nicht zu stark gewichtet werden.',
        color: 'rgba(71, 141, 157, 1)', hoverColor: 'rgba(125, 207, 216, 1)',
        scaleFactor: 0.98 },
    { name: 'Geostationärer Orbit', umlaufbahn: '35.586 bis 46.380 km', info: '3.320 Teile',
        moreInfo: 'Hier schweben Objekte wie Rundfunk- und Wettersatelliten — somit etwa auch beschädigte Teile dieser.',
        color: 'rgba(10,38,50,1)', hoverColor: 'rgba(47,113,124,1)',
        scaleFactor: 1.05 },
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
        <div className={styles.outerContainer} id={'infografik'}>

        <InView
            threshold={0.5} // Element wird sichtbar, wenn 50% im Viewport sind
        >
            {({inView, ref}) => (
                <div
                    ref={ref}
                    className={`${styles.fadeIn} ${inView ? styles.visible : styles.hidden}`}
                >
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
                                        background:
                                            selectedLayer === layer ? layer.hoverColor : /* wenn selectedLayer = layer, dann hoverColor verwenden */
                                            hoveredIndex === index ? layer.hoverColor : /* wenn hoveredIndex = index, dann hoverColor verwenden */
                                                layer.color,
                                        width: `${size}px`,
                                        height: `${size}px`,
                                        zIndex: atmosphereData.length - index,
                                    }}
                                    onClick={() => handleLayerClick(layer, index)}
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
                        <h1>Weltraummüllteile nach Höhe der Umlaufbahn</h1>
                        {selectedLayer ? (
                            <>
                                <h2 style={{color: selectedLayer.hoverColor}}>{selectedLayer.name}</h2>
                                <p>({selectedLayer.umlaufbahn})</p>
                                <p>{selectedLayer.info}</p>
                                <p>{selectedLayer.moreInfo}</p>
                            </>
                        ) : (
                            <p>Click a layer to learn more about it.</p>
                        )}
                    </div>
                </div>
                </div>
                )}
            </InView>
        </div>

    );
}
