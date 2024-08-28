import React from 'react';
import Link from 'next/link';
import './DropdownList.scss';

interface Props {
  list: { title: string; id: number }[];
  id: number;
}

const DropdownList: React.FC<Props> = ({ list, id }) => {
  return (
    <div className="dropdown-lists">
      <ul className="dropdown-lists-list">
        {list.map((item, index) => (
          <Link
            href={'/service/' + id + '/' + item.id}
            key={index}
            className="dropdown-lists-list-item"
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
