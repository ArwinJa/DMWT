import React, { useState } from 'react';
import styles from '../styles/infographic.module.css';

const atmosphereData = [
    { name: 'Anzahl Müllteile insgesamt', umlaufbahn: '200 bis 46.380 km', info: '32.076 teile', color: 'rgba(163, 217, 245, 0.7)' },
    { name: 'Niedriger Erdorbit', umlaufbahn: '200 bis 2.000 km', info: '19.795 teile', color: 'rgba(163, 217, 245, 0.7)' },
    { name: 'Mittlerer Erdorbit', umlaufbahn: '2.001 bis 31.750 km', info: '524 teile', color: 'rgba(128, 191, 255, 0.6)' },
    { name: 'Übergangszonen', umlaufbahn: '31.751 bis 35.585 km', info: '8.437 teile', color: 'rgba(77, 148, 255, 0.5)' },
    { name: 'Geostationärer Orbit', umlaufbahn: '35.586 bis 46.380 km', info: '3.320 teile', color: 'rgba(19, 82, 177, 0.4)' },
];

export default function Inforgaphic() {
    const [selectedLayer, setSelectedLayer] = useState(atmosphereData[0]);

    const handleLayerClick = (layer) => {
        setSelectedLayer(layer);
    };

    return (
        <div className={styles.container}>
            <div className={styles.layerContainer}>
                {atmosphereData.map((layer, index) => {
                    const size = 200 + index * 75;
                    return (
                        <div
                            key={index}
                            className={styles.layer}
                            style={{
                                backgroundColor: layer.color,
                                width: `${size}px`,
                                height: `${size}px`,
                                zIndex: atmosphereData.length - index,
                            }}
                            onClick={() => handleLayerClick(layer)}
                        />
                    );
                })}
                <img
                    src="/earth.png"
                    alt="Earth"
                    className={styles.earth}
                    onClick={() => handleLayerClick(atmosphereData[0])}
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
