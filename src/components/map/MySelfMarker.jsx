import React from "react"
import { useEffect } from "react"
import { useStoreGeoLocation, useStorePocketBase, useStoreUsers } from "../../lib/useStore"
import ProfileMarker from "./ProfileMarker"

const MySelfMarker = () => {
    const geoLocation = useStoreGeoLocation((s) => s.geoLocation)
    const user = useStoreUsers((s) => s.user)
    const pb = useStorePocketBase((s) => s.pb)

    if (!geoLocation) return null

    useEffect(() => {
        const interval = setInterval(async () => {
            if (user && geoLocation) {
                const data = {
                    coordinates: JSON.stringify({ lat: geoLocation.latitude, lng: geoLocation.longitude }),
                }
                const record = await pb.collection("locations").update(user.id, data)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [user, geoLocation])

    return (
        <ProfileMarker
            position={{ lat: geoLocation.latitude, lng: geoLocation.longitude }}
            seed={user?.name ?? "sleep"}
        />
    )
}

export default MySelfMarker
