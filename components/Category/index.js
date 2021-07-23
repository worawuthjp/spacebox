import classNames from 'classnames';
import React from 'react';
import _ from 'lodash';
import { CategoryStyle } from './styled';
import { Image } from 'components';
import numberFormat from 'services/numberFormat';

export default function Category({ className, rowClassName, items }) {
  return (
    <CategoryStyle>
      <div className={classNames('row', rowClassName)}>
        {_.map(items, (item, itemIndex) => {
          return (
            <div key={itemIndex} className={classNames('column', 'mt-2', 'border', className)}>
              <Image style={{ width: 'auto', height: '200px', padding: '10px 10px 10px' }} src={_.get(item, 'picture[0].src')} />
              <div className="text-center">
                <p>{item.name}</p>
                <p>฿{numberFormat(item.price)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </CategoryStyle>
  );
}
