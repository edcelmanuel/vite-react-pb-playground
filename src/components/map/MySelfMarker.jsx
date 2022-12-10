import React from "react"
import { useEffect } from "react"
import { useStoreGeoLocation } from "../../lib/useStore"
import ProfileMarker from "./ProfileMarker"

const MySelfMarker = () => {
    const geoLocation = useStoreGeoLocation((s) => s.geoLocation)

    const options = useEffect(() => {
        console.log("Store", geoLocation)
    }, [geoLocation])

    if (!geoLocation) return null

    return <ProfileMarker position={{ lat: geoLocation.latitude, lng: geoLocation.longitude }} />
}

export default MySelfMarker
