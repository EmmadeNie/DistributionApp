
import { useEffect, useState } from 'react';
import { getInventory, getAllPreviousDeliveryDates, getAmountPerInventoryList, getAllUpcomingDeliveryDates } from '../../api/inventoryApi';
import { DistributionComponent } from '../DistributionComponent';
import { Input } from '../Input';
import style from './style.module.scss'


export const Layout = () => {
    const [allPreviousDeliveryDates, setAllPreviousDeliveryDates] = useState([])
    const [amountInStock, setAmountInStock] = useState([])
    const [allUpcomingDeliveryDates, setAllUpcomingDeliveryDates] = useState([])
    const [quantityInput, setQuantityInput] = useState(null)
    const [amountToBeDelivered, setAmountToBeDelivered] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [segmentsToShow, setSegmentsToShow] = useState([])


    useEffect(() => {
        getInventory().then(res => {
            setAllPreviousDeliveryDates(getAllPreviousDeliveryDates(res))
            setAmountInStock(getAmountPerInventoryList(getAllPreviousDeliveryDates(res)))
            setAllUpcomingDeliveryDates(getAllUpcomingDeliveryDates(res))
            setAmountToBeDelivered(getAmountPerInventoryList(getAllUpcomingDeliveryDates(res)))
        }
        )
    }, [])

    useEffect(() => {
        if (quantityInput > amountInStock + amountToBeDelivered) {
            setErrorMessage(`Sorry mate! We can only promiss you ${amountToBeDelivered + amountInStock} pairs of shoes`)
        } else {
            setErrorMessage(null)
        }
        //add availability per date to All dates
        let newSegmentsToShow = allUpcomingDeliveryDates.map((dates, i) => {
            allUpcomingDeliveryDates.slice(0, i)
            let inventory = allUpcomingDeliveryDates.slice(0, i + 1)
            let totalAvailability = getAmountPerInventoryList(inventory) + amountInStock
            return { ...dates, totalAvailability: totalAvailability }
        })

        setSegmentsToShow(newSegmentsToShow.filter(date => (date.totalAvailability - date.amount) < quantityInput))
    }, [quantityInput])


    return (
        <div className={style.layout}>
            <DistributionComponent
                key={quantityInput}
                quantityInput={quantityInput}
                allPreviousDeliveryDates={allPreviousDeliveryDates}
                amountInStock={amountInStock}
                segmentsToShow={segmentsToShow}
            />
            <Input
                errorMessage={errorMessage ?? ""}
                value={quantityInput ?? ""}
                handleOnChange={(value) => {
                    setQuantityInput(value)
                }}
            />
        </div>
    );
};