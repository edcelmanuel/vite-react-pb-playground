import { useState, useEffect } from "react"
import { useStoreGeoLocation, useStorePocketBase, useStoreUsers } from "./lib/useStore"
import Maps from "./components/map/Maps"
import LoginUser from "./components/users/LoginUser"
import PocketBase from "pocketbase"
import useGeolocation from "react-hook-geolocation"

function App() {
    const pb = new PocketBase("https://test.pb.monggihub.com")
    const setPb = useStorePocketBase((s) => s.setPb)
    const users = useStoreUsers((s) => s.users)
    const setUsers = useStoreUsers((s) => s.setUser)
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
            console.log(geolocation)
            setGeoLocation(geolocation)
        }
    }, [geolocation])

    useEffect(() => {
        if (!users) {
            console.log(users)
            pb.collection("locations")
                .getFullList(200, {
                    sort: "-created",
                })
                .then((records) => {
                    setUsers(records)
                    console.log(records)
                })
            setPb(pb)
        }
    }, [users])

    return (
        <div className="h-screen w-screen">
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
