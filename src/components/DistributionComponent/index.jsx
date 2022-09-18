import style from './style.module.scss'
import classnames from 'classnames'

export const DistributionComponent = ({ segmentsToShow, amountInStock }) => {



    return (
        <div className={style.distributionComponent}>
            <div className={style.distributionComponent__segmentsContainer}>
                <div className={style.distributionComponent__segmentsContainer__segment}>
                    <div className={style.distributionComponent__segmentsContainer__segment__now}>
                        now
                    </div >
                    <div className={classnames(style.distributionComponent__segmentsContainer__segment__amount, style.distributionComponent__segmentsContainer__segment__amount_colorPrimary)}>
                        {amountInStock}
                    </div >
                </div >
                {
                    segmentsToShow.length > 0 && segmentsToShow.map((dates, index) => {
                        const colorIndex = (index % 4) + 1 // rotate color palette every 4 segments

                        return (<div key={dates.date} className={style.distributionComponent__segmentsContainer__segment}>
                            <div className={style.distributionComponent__segmentsContainer__segment__tooltip}>
                                {dates.date}
                            </div >
                            <div className={classnames(style.distributionComponent__segmentsContainer__segment__amount, style[`distributionComponent__segmentsContainer__segment__amount_color${colorIndex}`])}>
                                {dates.amount}
                            </div >

                        </div >)
                    })
                }
            </div >

        </div >
    );
};