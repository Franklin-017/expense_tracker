import { inputType } from "../Interfaces/CommonTypes";

export default function Input( { id, label, type, value, placeholder, handleChange  }: inputType ) {
    return (
        <div className="flex flex-col gap-1 mt-3">
            { label && <label className="my-1" htmlFor={ id }>
                { label }
            </label> }
            <input
                className="border border-gray-200 p-3 rounded-md"
                type={ type }
                id={ id }
                value={ value }
                placeholder={ placeholder || "" }
                onChange={ (event) => handleChange(event.target.value) }
            />
        </div>
    );
}
