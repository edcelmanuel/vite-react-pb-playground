import React from "react"

const Input = ({
    register,
    name,
    condition = {},
    type = "text",
    placeholder,
    error,
    message = "No Error Message",
    label = "No Label",
    className,
    disabled = false,
}) => {
    return (
        <div className={"w-full form-control " + className}>
            <label className="label">
                <span className="label-text">{label}</span>
                {/* <span className="label-text-alt">Alt label</span> */}
            </label>
            <input
                {...register(name, condition)}
                type={type}
                placeholder={placeholder}
                className="w-full input input-bordered"
                disabled={disabled}
            />
            <label className="pt-0 label">
                <span className="label-text-alt"></span>
                {error[name] && <span className="italic text-red-500 label-text-alt">{message}</span>}
                {/* <span className="label-text-alt">Alt label</span> */}
            </label>
        </div>
    )
}

export default Input
