import React from 'react';

interface TestComponentProps {
  nombre: string;
  edad: number;
  esEmpleado: boolean;
}

const TestComponent = ({ nombre, edad, esEmpleado }: TestComponentProps) => {
  const textoEmpleado = esEmpleado ? 'Si' : 'No';

  return (
    <div className='daniel'>
      <span>Nombre: {nombre}</span>
      <span>Edad: {edad}</span>
      <span>Es empleado: {textoEmpleado}</span>
    </div>
  );
};

export { TestComponent };
