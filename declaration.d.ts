// declarations.d.ts
declare module '*.svg' {
  import React from 'react';
  import { SVGProps } from 'react';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}
