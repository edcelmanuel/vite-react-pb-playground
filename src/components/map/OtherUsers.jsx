import React from "react"
import { useEffect } from "react"
import { useStoreUsers } from "../../lib/useStore"
import ProfileMarker from "./ProfileMarker"

const OtherUsers = () => {
    const users = useStoreUsers((s) => s.users)
    const user = useStoreUsers((s) => s.user)

    if (!users) return null

    return users.map((item, key) => {
        if (user?.id === item?.id) return null
        return <ProfileMarker seed={item.name} position={item.coordinates} key={key} />
    })
}

export default OtherUsers
