import {memo} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import './style.css';
import {numberFormat} from '../../utils';

function ItemDescription(props) {

  const cn = bem('Item-description');

  return (
    <div className={cn()}>
      <p className={cn('description')}>{props.itemInfo.description}</p>
      <p className={cn('description')}>
        Страна производитель:
        <span className={cn('info')}> {props.itemInfo.madeIn?.title}</span>
        <span className={cn('info')}> ({props.itemInfo.madeIn?.code})</span>
      </p>
      <p className={cn('description')}>Категория: <span className={cn('info')}>{props.itemInfo.category?.title}</span></p>
      <p className={cn('description')}>Год выпуска: <span className={cn('info')}>{props.itemInfo.edition}</span></p>
      <p className={cn('price')}>Цена: {numberFormat(props.itemInfo.price)} ₽</p>
      <button onClick={() => props.onAdd(props.itemInfo._id)}>Добавить</button>
    </div>
  )
}

ItemDescription.propTypes = {
  itemInfo: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    madeIn: PropTypes.object,
    category: PropTypes.object,
    edition: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  onAdd: PropTypes.func,
};

ItemDescription.defaultProps = {
  onAdd: () => {},
}

export default memo(ItemDescription);