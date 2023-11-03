import { useEffect, ChangeEvent, Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa';
import { useCart } from '../../contexts/cart.context';

const defaultOptions = [
    { id: 1, name: 'Numbers' },
    { id: 2, name: 'String' },
]

const CreateArray = () => {
    let { initialItems, finalItems, updateItem }: any = useCart();  
    const [selectedOption, setSelectedOption] = useState<any>(defaultOptions[0])
    const [inputVal, setInputVal] = useState<string>('');

    useEffect(() => {
        let temp = initialItems.join(', ');
        setInputVal(temp.toString());
        console.log(initialItems, finalItems)
    }, [])
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        let arrayInput = e.target.value.split(",");
        updateItem(arrayInput)
        setInputVal(arrayInput.toString())
    };

    return (
        <div>
            <div className='flex justify-between items-csenter'>
                <button className='bg-green-700 focus:bg-green-800 px-7 py-1 border-2 border-green-500 text-white font-bold rounded-md'>Generate</button>
                <div className='flex items-centesr justify-between'>
                    {/* <input type="tel" max={30} min={4} className='border-2 border-green-500 w-12 mr-2 rouned '/> */}
                    {/* <input type="number" id="quantity" name="quantity" min="1" max="5" /> */}
                    {/* <input type="tel" id="quantity" name="quantity" className="border-2 border-green-500 w-12 mr-2 rounded " min="1" max="5" /> */}
                    {/* <input type="submit"> */}
                    <Listbox value={selectedOption} onChange={setSelectedOption}>
                        <div className="relative w-36">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-2 border-green-400 text-green-600 font-bold tracking-wide text-md shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selectedOption.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <FaChevronDown
                                        className="h-5 w-5 text-green-600"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    {defaultOptions.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none font-bold py-2 pl-10 pr-4 ${active ? 'bg-green-200 text-green-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>

                </div>
            </div>
            <input className='border-2 border-green-400 font-medium mt-3 pl-2 text-md focus:border-red-900 capitalize h-12 rounded-md w-full' value={inputVal} onChange={onChange} />
            {/* //  e => setInputVal(e.target.value)} /> */}
            <p className='text-center text-sm text-black dark:text-gray-400 font-medium mt-1'>Separate Elements with Separate Commos</p>
        </div>
    )
}

export default CreateArray;