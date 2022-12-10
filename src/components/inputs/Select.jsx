import React from "react"

const Select = ({
    register,
    name,
    condition = {},
    type = "text",
    placeholder,
    error,
    message = "No Error Message",
    label = "No Label",
    className,
    items,
    selectKey,
    hasAddItem = false,
    disabled = false,
}) => {
    return (
        <div className={"w-full form-control " + className}>
            <label className="label">
                <span className="label-text">{label}</span>
                {/* <span className="label-text-alt">Alt label</span> */}
            </label>
            <select
                {...register(name, condition)}
                placeholder={placeholder}
                className="w-full select select-bordered"
                disabled={disabled}
            >
                <option value="">{placeholder}</option>
                {items?.map((item, key) => {
                    return (
                        <option value={item.id} key={key}>
                            {item[selectKey]}
                        </option>
                    )
                })}
                {hasAddItem && (
                    <option value="add">
                        Add New
                        {/* <div className="flex justify-between">
              <div>Add New</div>
              <i className="fa-solid fa-circle-plus"></i>
            </div> */}
                    </option>
                )}
            </select>
            <label className="pt-0 label">
                <span className="label-text-alt"></span>
                {error && error[name] && <span className="italic text-red-500 label-text-alt">{message}</span>}
                {/* <span className="label-text-alt">Alt label</span> */}
            </label>
        </div>
    )
}

export default Select
