
import { DistributionComponent } from '../DistributionComponent';
import { Input } from '../Input';
import style from './style.module.scss'


export const Layout = (props) => {

    return (
        <div className={style.layout}>
            Layout
            <DistributionComponent

            />
            <Input />
        </div>
    );
};