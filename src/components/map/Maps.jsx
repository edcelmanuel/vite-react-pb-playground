import { useState } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import { useCallback } from "react"
import MySelfMarker from "./MySelfMarker"
import OtherUsers from "./OtherUsers"

function Maps() {
    const [map, setMap] = useState(null)

    const containerStyle = {
        width: "100%",
        height: "100%",
    }

    const defaultCenter = {
        coordinate: { lat: 14.599512, lng: 120.984222 },
        zoom: 10,
    }

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAP3IwmPDE7XMLx9pZPxGP5JrWMFNNr8WM",
    })

    const onLoad = useCallback(function callback(map) {
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    return (
        <div className="bg-gray-900 h-screen w-screen">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter.coordinate}
                    zoom={defaultCenter.zoom}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                    clickableIcons={false}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <></>
                    <div>asd</div>
                    <MySelfMarker />
                    <OtherUsers />
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Maps
