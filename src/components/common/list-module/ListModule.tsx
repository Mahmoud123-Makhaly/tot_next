import React from 'react';
import Image from 'next/image';

import { IListItem } from './ListItemType';

interface IListModuleProps {
  title?: string;
  listItems?: Array<IListItem>;
}
const ListModule = (props: IListModuleProps) => {
  const { title, listItems } = props;
  return (
    <div className="bg-white border-raduis-23 list-module">
      <div className="message-content">
        <h4 className="fw-bold text-primary font-24 m-0 pb-3 title">{title}</h4>
        <ul className="list-unstyled">
          {listItems?.map((item, index) => (
            <li className={`${item.design ? item.design : 'mb-4'} `} key={index}>
              <Image src={item.imgSrc} width={0} height={0} alt={item.imgAlt} />
              <span className="ms-3 text">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListModule;
