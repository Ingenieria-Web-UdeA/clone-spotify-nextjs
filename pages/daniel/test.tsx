import { TestComponent } from '@/components/TestComponent';
import React from 'react';

const TestPage = () => {
  return (
    <div>
      <span className='daniel'>Pagina de Test</span>
      <TestComponent nombre='Daniel' edad={10} esEmpleado={true} />
    </div>
  );
};

export default TestPage;
