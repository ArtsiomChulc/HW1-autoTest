import React from 'react';
import down from '../icons/down.png';
import up from '../icons/up.png';
import reset from '../icons/reset.png';
import s from '../../HW15.module.css';
import store from "../../../hw10/bll/store";

// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = reset

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    return sort === down
        ? up
        : sort === up
            ? ''
            : down
    //логика сортировки 1)стрелка вверх => 2)стрелка вниз=> 3) никакой сортировки=>1)
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log(sort, down, up)
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img className={s.icon}
                id={id + '-icon-' + sort}
                src={icon}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort