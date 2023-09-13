import './NewsCard.scss'

const NewsCard = ({ img, title, info }) => {

  return (
    <div className='news-card'>
      <div className="img-wrap">
        <img src={img} alt={title} />
      </div>
      <div className="card-info">
        <h3 className='card-title'>{title}</h3>
        <p className='card-desc'>{info}</p>
        <a href="#" className='link'>Saiba mais!</a>
      </div>
    </div>
  )
}

export default NewsCard