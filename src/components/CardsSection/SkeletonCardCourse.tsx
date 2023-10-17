import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'
import * as S from './CardsSection.styles'

export const SkeletonCardCourse: FC = () => {
  return (
    <S.CardsWrapper>
      {Array(6)
        .fill('')
        .map(card => (
          <ContentLoader
            width={360}
            height={480}
            backgroundColor="#f0f0f0"
            foregroundColor="#dedede"
          >
            <rect x="0" y="0" rx="10" ry="10" width="360" height="480" />
          </ContentLoader>
        ))}
    </S.CardsWrapper>
  )
}
