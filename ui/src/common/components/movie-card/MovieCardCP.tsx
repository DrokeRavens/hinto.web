import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
import CardCP from '../../../common/components/card/CardCP'
import Meta from 'antd/lib/card/Meta'

interface IMovieCardCPProps {
  urlImage: string
  movieTitle: string
  synopsis: string
  cardStyle?: React.CSSProperties
  imageStyle?: React.CSSProperties
}

/**
 * Abstrai a criação de 1 card de filme para o sistema
 *
 * @todo Abstrair o componente Meta para não usar nada do antd diretamente aqui
 * @todo Abstrair o componente Image para não usar nada do antd diretamente aqui
 *
 * @author rafaelvictor01
 * @returns JSX.Element
 */
export default function MovieCardCP(props: IMovieCardCPProps): JSX.Element {
  return (
    <MainWrapperLandingCardSCP>
      <CardCP
        hoverable={true}
        style={props.cardStyle}
        cover={
          <Image
            style={props.imageStyle}
            src={props.urlImage}
            alt={`${props.movieTitle}-img`}
          />
        }
      >
        <Meta title={props.movieTitle} description={props.synopsis} />
      </CardCP>
    </MainWrapperLandingCardSCP>
  )
}

const MainWrapperLandingCardSCP = styled.div`
  .ant-image {
    margin-left: 1px;
  }
`
