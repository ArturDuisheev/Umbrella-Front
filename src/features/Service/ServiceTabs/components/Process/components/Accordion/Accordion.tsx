import React, { useState } from 'react';
import './Accordion.scss';

interface Props {
  index: number;
  title: string;
  list: string[];
  isOpen: boolean;
  onClick: () => void;
}

const Accordion: React.FC<Props> = ({ index, title, list, isOpen, onClick }) => {
  const [open, setOpen] = useState<boolean>(index === 1);

  const formatList = (item: string) => {
    return item.split(';').map((subItem) => subItem.trim());
  };

  return (
    <div className="accordion-block">
      <div className={isOpen ? 'active accordion' : 'accordion'} onClick={onClick}>
        <p className={isOpen ? 'active accordion-title' : 'accordion-title'}>
          <span className="accordion-title-index">{index}</span>
          {title}
        </p>
      </div>
      <div className="card">
        {isOpen && (
          <div className="card-wrapper">
            <ul className="card-wrapper-list">
              {list.map((item, idx) =>
                formatList(item).map((subItem, subIdx) => (
                  <li key={`${idx}-${subIdx}`} className="card-wrapper-list-item">
                     {subItem}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
