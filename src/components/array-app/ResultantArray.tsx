import {useEffect, Fragment} from 'react';
import { useCart } from '../../contexts/cart.context';

const ResultantArray = () => {
    const { finalItems, initItem  }: any = useCart();
    useEffect(() => {
        initItem();
    }, [])
    return (
        <Fragment>
            <p className='text-center font-bold dark:text-white text-xl my-2 capitalize'> Final Array : </p>
            <div className="flex justify-evenly flex-wrap border-2 border-green-400 rounded-md p-2 gap-2">
                {finalItems.length ? finalItems.map((data: string, i: number) => (
                    <p key={i} className='border-2 border-green-600 dark:border-green-300 text-white font-bold rounded-md bg-green-900 dark:bg-green-500 text-center py-[6px] px-4'>{data}</p>
                )): <p className='dark:text-white text-green-900 font-normal text-xl'>
                    No Element found
                </p>

            }
            </div>
        </Fragment>
    )
}

export default ResultantArray;