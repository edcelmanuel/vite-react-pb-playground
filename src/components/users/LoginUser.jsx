import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../inputs/Input"
import { useStorePocketBase, useStoreUsers } from "../../lib/useStore"

function LoginUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm()

    const pb = useStorePocketBase((s) => s.pb)
    const setUser = useStoreUsers((s) => s.setUser)

    const Submit = async (data) => {
        if (!pb) return null

        const users = await pb.collection("locations").getFullList(200, {
            sort: "-created",
        })

        let isAlreadyCreated = false

        for (let index = 0; index < users.length; index++) {
            const user = users[index]
            if (user.name.toUpperCase() === data.name.toUpperCase()) {
                console.log("Record Exists")
                isAlreadyCreated = true
                setUser(user)
            }
        }

        if (!isAlreadyCreated) {
            const record = await pb.collection("locations").create(data)
            setUser(record)
        }
    }

    return (
        <div className="bg-white  rounded-md">
            <form
                onSubmit={handleSubmit((data) => {
                    Submit(data)
                })}
                className="flex flex-col"
            >
                <div>Login User</div>
                <Input
                    register={register}
                    name="name"
                    label="User's Name"
                    placeholder="User's Name"
                    type="text"
                    condition={{ required: true }}
                    error={errors}
                    message="Shop Name Required"
                />
                <button type="submit" className="flex w-full btn">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default LoginUser
