import style from './style.module.scss'


export const Input = ({ errorMessage, handleOnChange }) => {
    return (
        <div className={style.input}>
            <div className={style.input__error}>
                {errorMessage}
            </div>
            <div className={style.input__inputContainer}>
                <div className={style.input__inputContainer__label}>
                    Quantity:
                </div>
                <input
                    autoComplete={"false"}
                    type="number"
                    className={style.input__inputContainer__input}
                    onChange={(event) => handleOnChange(event.target.value)}
                />
            </div>
        </div>
    );
};