import { Fragment } from 'react';
import { useCart } from '../../contexts/cart.context';

interface ButtonJson {
    name: string;
    method: () => null
}

const ArrayMethods = () => {
    const { pushItem, popItem, lenItem } = useCart();

    const buttonDefault: any= [
        {
            name: "Push ()",
            method: pushItem
        }, {
            name: "Pop ()",
            method: popItem
        }, { 
            name: "Length ()",
            method: lenItem
        }, {
            name: "String ()",
            method: pushItem
        }
    ]
    return (
        <Fragment>
            <p className='font-bold dark:text-white text-xl my-2 capitalize'> Array Methods: </p>
            <div className="flex justify-evenly flex-wrap border-2 border-gray-400 rounded-md p-2 gap-2">
                {buttonDefault.map((data: ButtonJson, i: number) => (
                    <button key={i} onClick={data.method} className='border-2 border-sky-600 dark:border-sky-400 text-white font-bold rounded-md bg-sky-900 dark:bg-sky-500 text-center py-[6px] px-4'>{data.name}</button>

                ))}
            </div>
        </Fragment>
    )
}

export default ArrayMethods;
