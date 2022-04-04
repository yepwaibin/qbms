import React, { memo } from 'react'
import {ExamSearchWrapper} from './style'
import FilterTittle from '@/components/filter-tittle'
const ExamSearch = memo(() => {
  return (
    <ExamSearchWrapper>
      <FilterTittle />
    </ExamSearchWrapper>
  )
})

export default ExamSearch
