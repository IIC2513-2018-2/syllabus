import React from 'react';

export default function Initiatives({ initiatives }) {
  return (
    <ul>
      {initiatives.map(initiative => (
        <li key={initiative.id}>
          {initiative.title}
          &nbsp;
          <a href={initiative.url}>Ir</a>
        </li>
      ))}
    </ul>
  );
}
