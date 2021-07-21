import s from './index.module.styl'
import React, { useMemo, useCallback } from 'react'
import t from '~t'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { makeCollection } from '~data/selectors/collections'

import Tabs from '~co/common/tabs'

export default function MyMainSearchIn({ search, _id, query: { fromId }, getLink }) {
    const history = useHistory()

    //collection
    const getCollection = useMemo(()=>makeCollection(), [])
    const collection = useSelector(state=>
        getCollection(
            state,
            parseInt(_id) || fromId, [_id, fromId]
        )
    )

    //tabs
    const tabs = useMemo(()=>[
        {key: 0, title: `${t.s('defaultCollection-0')} ${t.s('everywhere').toLowerCase()}`},
        {key: collection._id, title: `${t.s('only')} ${t.s('in')} "${collection.title}"`}
    ], [collection])

    const onChange = useCallback(_id=>{
        history.push(
            getLink({
                search,
                _id,
                fromId: collection._id
            })
        )
    }, [history, search, collection._id])
    
    if (!search || !collection._id)
        return null

    return (
        <div className={s.tabs}>
            <Tabs
                items={tabs}
                active={parseInt(_id)}
                onChange={onChange} />
        </div>
    )
}