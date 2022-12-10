import React from "react"
import { useEffect } from "react"
import { useStorePocketBase, useStoreUsers } from "../../lib/useStore"
import ProfileMarker from "./ProfileMarker"

const OtherUsers = () => {
    const users = useStoreUsers((s) => s.users)
    const user = useStoreUsers((s) => s.user)
    const pb = useStorePocketBase((s) => s.pb)

    const updateUser = useStoreUsers((s) => s.updateUser)
    const addUser = useStoreUsers((s) => s.addUser)

    if (!users) return null

    useEffect(() => {
        if (pb) {
            pb.collection("locations").subscribe("*", function (e) {
                if (e.action === "create") {
                    addUser(e.record)
                } else if (e.action === "update") {
                    updateUser(e.record)
                }
            })
        }

        return () => {
            if (pb) {
                pb.collection("locations").unsubscribe("*")
            }
        }
    }, [pb])

    return users.map((item, key) => {
        if (user?.id === item?.id) return null
        return <ProfileMarker seed={item.name} position={item.coordinates} key={key} />
    })
}

export default OtherUsers
