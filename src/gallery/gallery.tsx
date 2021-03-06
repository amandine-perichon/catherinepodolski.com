import Carousel, { CommonProps, ViewType } from 'react-images'
import React from 'react'
import { Image, Text } from '@chakra-ui/core'
import styles from './gallery.module.css'

const View: React.FC<CommonProps & { data: { source: string, caption: string } }> = ({ data }) => {
  return (
    <div className={styles.view}>
      <Image m="auto" objectFit="contain" height="100%" src={data.source} />
      {data.caption &&
        <div className={styles["caption-container"]}>
          <Text className={styles.caption}>{data.caption}</Text>
        </div>
      }
    </div>
  )
}

const Gallery: React.FC<{ images: Array<ViewType> }> = ({ images }) =>
  <Carousel
    hideControlsWhenIdle={false}
    views={images}
    components={{ View, Footer: () => null }}
    styles={{
      container: (base) => ({
        ...base,
        paddingBottom: '20px',
        height: 'initial'
      }),
      navigationNext: (base) => ({
        ...base,
        background: '#a5a4af33',
        color: '#48494a'
      }),
      navigationPrev: (base) => ({
        ...base,
        background: '#a5a4af33',
        color: '#48494a'
      })
    }}
  />

export default Gallery