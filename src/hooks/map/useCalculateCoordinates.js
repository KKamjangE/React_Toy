import { useEffect, useState } from "react";

const useCalculateCoordinates = (data) => {
    const [centerCoord, setCenterCoord] = useState({ lat: 0, lng: 0 });

    useEffect(() => {
        if (data.length === 0) {
            return;
        }

        setCenterCoord(
            data.reduce(
                (result, item) => {
                    result.lat += item.lat;
                    result.lng += item.lng;
                    return result;
                },
                { lat: 0, lng: 0 },
            ),
        );
    }, [data]);

    return { centerCoord };
};

export default useCalculateCoordinates;
