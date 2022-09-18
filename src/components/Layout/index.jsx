
import { useEffect, useState } from 'react';
import { getInventory, getAllPreviousDeliveryDates, getAmountInStock, getAllUpcomingDeliveryDates } from '../../api/inventoryApi';
import { DistributionComponent } from '../DistributionComponent';
import { Input } from '../Input';
import style from './style.module.scss'


export const Layout = (props) => {
    const [inventory, setInventory] = useState([])
    const [allPreviousDeliveryDates, setAllPreviousDeliveryDates] = useState([])
    const [amountInStock, setAmountInStock] = useState([])
    const [allUpcomingDeliveryDates, setAllUpcomingDeliveryDates] = useState([])

    useEffect(() => {
        getInventory().then(res => {
            setInventory(res)
            setAllPreviousDeliveryDates(getAllPreviousDeliveryDates(res))
            setAmountInStock(getAmountInStock(res))
            setAllUpcomingDeliveryDates(getAllUpcomingDeliveryDates(res))
        }
        )
    }, [])

    return (
        <div className={style.layout}>
            Layout
            <DistributionComponent />
            <Input />
        </div>
    );
};