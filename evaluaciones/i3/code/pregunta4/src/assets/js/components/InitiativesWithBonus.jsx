import React from 'react';

export default function Initiatives({ initiatives, onClick, selected }) {
  return (
    <ul>
      {initiatives.map(initiative => (
        <li
          key={initiative.id}
          onClick={() => onClick(initiative.id)}
          className={selected === initiative.id ? 'selected' : null}
        >
          {initiative.title}
          &nbsp;
          <a href={initiative.url}>Ir</a>
        </li>
      ))}
    </ul>
  );
}
