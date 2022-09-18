import style from './style.module.scss'

export const DistributionComponent = ({ segmentsToShow, amountInStock }) => {
    return (
        <div className={style.distributionComponent}>
            <div className={style.distributionComponent__segmentsContainer}>
                <div className={style.distributionComponent__segmentsContainer__segment}>
                    <div className={style.distributionComponent__segmentsContainer__segment__now}>
                        now
                    </div >
                    <div className={style.distributionComponent__segmentsContainer__segment__amount}>
                        {amountInStock}
                    </div >
                </div >
                {
                    segmentsToShow.length > 0 && segmentsToShow.map((dates) => <div key={dates.date} className={style.distributionComponent__segmentsContainer__segment}>
                        <div className={style.distributionComponent__segmentsContainer__segment__dateLabel}>
                            {dates.date}
                        </div >
                        <div className={style.distributionComponent__segmentsContainer__segment__amount}>
                            {dates.amount}
                        </div >

                    </div >)
                }
            </div >

        </div >
    );
};