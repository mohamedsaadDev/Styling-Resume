import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const AccordionItem = ({ setdataCV, dataCV, index, moveItem, component: Component,removeCustomSectionByIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const style = {
    cursor: isOpen ? 'default' : 'move', // تعديل المؤشر بناءً على حالة isOpen
  };
  const ref = React.useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'accordion-item',
    hover: (draggedItem, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = draggedItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      draggedItem.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'accordion-item',
    item: () => {
      return { index };
    },
    canDrag: () => !isOpen, // تعطيل السحب إذا كان العنصر مفتوحًا
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
    
      className="position-relative"
      ref={ref}
      style={{ ...style, opacity }}
      data-handler-id={handlerId}
    >
      <div onClick={() => setIsOpen(!isOpen)}>
        <Component setdataCV={setdataCV} dataCV={dataCV} index={index} removeCustomSectionByIndex={removeCustomSectionByIndex} />
      </div>
    </div>
  );
};

export default AccordionItem;
