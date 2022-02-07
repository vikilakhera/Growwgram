import ContentLoader from 'react-content-loader'

const ImageLoader = (props:Props) => {
  const height = props.height();

  return (
    <ContentLoader
      width={600}
      height={height}
      viewBox={`0 0 600 ${height}`}
      backgroundColor="#d3d3d3"
      foregroundColor="#ecebeb"
      style={{ position: 'absolute' }}
    >
      <rect x="0" y="0" rx="2" ry="2" width="600" height={height} />
    </ContentLoader>
  )
}

type Props = {
  height: () => number;
}

export default ImageLoader;