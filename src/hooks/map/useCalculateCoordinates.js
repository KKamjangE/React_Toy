const useCalculateCoordinates = (data) => {
    if (data.length === 0) {
        const center = { lat: 0, lng: 0 };
        return { center };
    }

    const center = data.reduce(
        (result, item) => {
            result.lat += item.lat;
            result.lng += item.lng;
            return result;
        },
        { lat: 0, lng: 0 },
    );

    return { center };
};

export default useCalculateCoordinates;
