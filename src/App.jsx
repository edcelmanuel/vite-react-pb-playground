import { useState, useEffect } from "react"
import { useStoreGeoLocation, useStorePocketBase, useStoreUsers } from "./lib/useStore"
import Maps from "./components/map/Maps"
import LoginUser from "./components/users/LoginUser"

import useGeolocation from "react-hook-geolocation"
import PBLoader from "./components/PBLoader"

function App() {
    const pb = useStorePocketBase((s) => s.pb)
    const setUsers = useStoreUsers((s) => s.setUsers)
    const setGeoLocation = useStoreGeoLocation((s) => s.setGeoLocation)

    const geolocation = useGeolocation({
        enableHighAccuracy: true,
        maximumAge: 15000,
        timeout: 12000,
    })

    useEffect(() => {
        if (geolocation.error) {
            setGeoLocation(null)
        } else {
            setGeoLocation(geolocation)
        }
    }, [geolocation])

    useEffect(() => {
        if (pb) {
            pb.collection("locations")
                .getFullList(200, {
                    sort: "-created",
                })
                .then((records) => {
                    setUsers(records)
                })
        }
    }, [pb])

    return (
        <div className="h-screen w-screen">
            <PBLoader />
            <div className="relative">
                <div className="absolute top-32 left-10 z-[1000000] bg-white text-black p-6 rounded-lg">
                    <LoginUser />
                </div>
                <Maps />
            </div>
        </div>
    )
}

export default App
