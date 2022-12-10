import React from "react"
import { Marker } from "@react-google-maps/api"
import { InfoBox } from "@react-google-maps/api"
const ProfileMarker = ({ position, seed }) => {
    return (
        <>
            <InfoBox
                options={{
                    closeBoxURL: "",
                    enableEventPropagation: true,
                    pixelOffset: new window.google.maps.Size(-31.5, -73),
                }}
                position={position}
            >
                <div className="h-16 w-16 bg-[#ea4335] rounded-full p-2 shadow-lg">
                    <div className="bg-white rounded-full flex h-full w-full shadow-sm overflow-hidden">
                        <img src={`https://avatars.dicebear.com/api/adventurer-neutral/${seed}.svg`} />
                    </div>
                </div>
            </InfoBox>
            <Marker position={position} />
        </>
    )
}

export default ProfileMarker
