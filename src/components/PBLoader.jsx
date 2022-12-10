import React from "react"
import { useEffect } from "react"
import PocketBase from "pocketbase"
import { useStorePocketBase } from "../lib/useStore"

const PBLoader = () => {
    const pb = new PocketBase("https://test.pb.monggihub.com")
    const setPb = useStorePocketBase((s) => s.setPb)

    useEffect(() => {
        setPb(pb)
    }, [])

    return null
}

export default PBLoader
