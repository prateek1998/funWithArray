import {Fragment} from 'react';
import { useCart } from '../../contexts/cart.context';

const YourArray = () => {
    const { initialItems } = useCart();
    return (
        <Fragment>
            <p className='text-center font-bold dark:text-white text-xl my-2 capitalize'> Our Array : </p>
            <div className="flex justify-evenly flex-wrap border-2 border-green-400 rounded-md p-2 gap-2">
                {initialItems.map((data: string, i: number) => (
                    <p key={i} className='border-2 border-red-300 text-white font-bold rounded-md bg-red-500 text-center py-[6px] px-4'>{data}</p>

                ))}
            </div>
        </Fragment>
    )
}

export default YourArray;