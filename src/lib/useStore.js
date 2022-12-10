import create from "zustand"

const useStoreUsers = create((set) => ({
    users: null,
    setUsers: (payload) => set({ users: payload }),
    user: null,
    setUser: (payload) => set({ user: payload }),
}))

const useStorePocketBase = create((set) => ({
    pb: null,
    setPb: (payload) => set({ pb: payload }),
}))

const useStoreGeoLocation = create((set) => ({
    geoLocation: null,
    setGeoLocation: (payload) => set({ geoLocation: payload }),
}))

export { useStoreUsers, useStorePocketBase, useStoreGeoLocation }